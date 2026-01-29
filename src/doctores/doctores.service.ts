import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { paginate, Pagination } from 'nestjs-typeorm-paginate';
import { Doctor } from './doctor.entity';
import { CreateDoctorDto } from './dto/create-doctor.dto';
import { UpdateDoctorDto } from './dto/update-doctor.dto';
import { CitaMedica } from '../citas-medicas/cita-medica.entity';
import { DoctoresConsultorio } from '../doctoresConsultorios/doctores-consultorio.entity';

@Injectable()
export class DoctoresService {
  constructor(
    @InjectRepository(Doctor)
    private readonly doctorRepository: Repository<Doctor>,
    @InjectRepository(CitaMedica)
    private readonly citasRepository: Repository<CitaMedica>,
    @InjectRepository(DoctoresConsultorio)
    private readonly doctoresConsultoriosRepository: Repository<DoctoresConsultorio>,
  ) {}

  async create(createDoctorDto: CreateDoctorDto): Promise<Doctor> {
    const nuevoDoctor = this.doctorRepository.create(createDoctorDto);
    return await this.doctorRepository.save(nuevoDoctor);
  }

  async findAll(query: { page: number; limit: number; search?: string; searchField?: string; sort?: string; order?: 'ASC' | 'DESC' }): Promise<Pagination<Doctor>> {
    const { page, limit, search, searchField, sort, order } = query;

    const qb = this.doctorRepository.createQueryBuilder('doctor');

    if (search) {
      const allowedSearchFields = ['dias_disponibles'];

      if (searchField && allowedSearchFields.includes(searchField)) {
        qb.andWhere(`doctor.${searchField} ILIKE :search`, { search: `%${search}%` });
      } else {
        qb.andWhere('doctor.dias_disponibles ILIKE :search', { search: `%${search}%` });
      }
    }

    if (sort) {
      qb.orderBy(`doctor.${sort}`, order === 'DESC' ? 'DESC' : 'ASC');
    } else {
      qb.orderBy('doctor.id_doctor', 'DESC');
    }

    return paginate<Doctor>(qb, { page, limit });
  }

  async findOne(id: number): Promise<Doctor> {
    const doctor = await this.doctorRepository.findOneBy({ id_doctor: id });
    if (!doctor) {
      throw new NotFoundException(`Doctor con ID ${id} no encontrado`);
    }
    return doctor;
  }

  async update(id: number, updateDoctorDto: UpdateDoctorDto): Promise<Doctor> {
    const doctor = await this.findOne(id);
    this.doctorRepository.merge(doctor, updateDoctorDto);
    return await this.doctorRepository.save(doctor);
  }

  async remove(id: number): Promise<void> {
    await this.findOne(id);

    const citasCount = await this.citasRepository.count({ where: { id_doctor: id } });
    if (citasCount > 0) {
      throw new BadRequestException(
        `No se puede eliminar el doctor porque tiene ${citasCount} cita(s) asociada(s).`
      );
    }

    const consultoriosCount = await this.doctoresConsultoriosRepository.count({
      where: { id_doctor: id },
    });
    if (consultoriosCount > 0) {
      throw new BadRequestException(
        `No se puede eliminar el doctor porque tiene ${consultoriosCount} consultorio(s) asociado(s).`
      );
    }

    const result = await this.doctorRepository.delete({ id_doctor: id });
    if (result.affected === 0) {
      throw new NotFoundException(`Doctor con ID ${id} no encontrado`);
    }
  }
}
