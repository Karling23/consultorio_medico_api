import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
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

  async findAll(): Promise<Doctor[]> {
    return await this.doctorRepository.find();
  }

  async findOne(id: number): Promise<Doctor> {
    const doctor = await this.doctorRepository.findOneBy({ id_doctor: id });
    if (!doctor) {
      throw new Error('Doctor not found');
    }
    return doctor;
  }

  async update(id: number, updateDoctorDto: UpdateDoctorDto): Promise<Doctor> {
    const doctor = await this.findOne(id);
    this.doctorRepository.merge(doctor, updateDoctorDto);
    return await this.doctorRepository.save(doctor);
  }

  async remove(id: number): Promise<void> {
    await this.doctorRepository.delete(id);
  }
}
