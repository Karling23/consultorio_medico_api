import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { paginate, Pagination, IPaginationOptions } from 'nestjs-typeorm-paginate';
import { Doctor } from './doctor.entity';
import { CreateDoctorDto } from './dto/create-doctor.dto';
import { UpdateDoctorDto } from './dto/update-doctor.dto';

@Injectable()
export class DoctoresService {
  constructor(
    @InjectRepository(Doctor)
    private readonly doctorRepository: Repository<Doctor>,
  ) {}

  async create(createDoctorDto: CreateDoctorDto): Promise<Doctor> {
    const nuevoDoctor = this.doctorRepository.create(createDoctorDto);
    return await this.doctorRepository.save(nuevoDoctor);
  }

  async findAll(options: IPaginationOptions): Promise<Pagination<Doctor>> {
    return paginate<Doctor>(this.doctorRepository, options);
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
    const result = await this.doctorRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Doctor con ID ${id} no encontrado`);
    }
  }
}
