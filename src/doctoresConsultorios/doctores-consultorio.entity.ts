import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Doctor } from '../doctores/doctor.entity';
import { Consultorio } from '../consultorios/consultorio.entity';

@Entity('doctores_consultorios')
export class DoctoresConsultorio {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'integer', nullable: false })
  id_doctor: number;

  @ManyToOne(() => Doctor, { eager: false })
  @JoinColumn({ name: 'id_doctor', referencedColumnName: 'id_doctor' })
  doctor: Doctor;

  @Column({ type: 'integer', nullable: false })
  id_consultorio: number;

  @ManyToOne(() => Consultorio, { eager: false })
  @JoinColumn({ name: 'id_consultorio', referencedColumnName: 'id_consultorio' })
  consultorio: Consultorio;
}
