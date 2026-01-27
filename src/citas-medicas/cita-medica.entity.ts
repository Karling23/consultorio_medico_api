import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Paciente } from '../pacientes/paciente.entity';
import { Doctor } from '../doctores/doctor.entity';
import { Consultorio } from '../consultorios/consultorio.entity';

@Entity('citas_medicas')
export class CitaMedica {
    @PrimaryGeneratedColumn({ name: 'id_cita' })
    id_cita: number;

    @Column({ name: 'id_paciente' })
    id_paciente: number;

    @ManyToOne(() => Paciente, { eager: false })
    @JoinColumn({ name: 'id_paciente', referencedColumnName: 'id_paciente' })
    paciente: Paciente;

    @Column({ name: 'id_doctor' })
    id_doctor: number;

    @ManyToOne(() => Doctor, { eager: false })
    @JoinColumn({ name: 'id_doctor', referencedColumnName: 'id_doctor' })
    doctor: Doctor;

    @Column({ name: 'id_consultorio' })
    id_consultorio: number;

    @ManyToOne(() => Consultorio, { eager: false })
    @JoinColumn({ name: 'id_consultorio', referencedColumnName: 'id_consultorio' })
    consultorio: Consultorio;

    @Column({ type: 'date', name: 'fecha_cita' })
    fecha_cita: string;

    @Column({ type: 'time', name: 'hora_cita' })
    hora_cita: string;

    @Column({ 
        name: 'estado', 
        length: 20, 
        default: 'Pendiente' 
    })
    estado: string; // Valores: Pendiente | Confirmada | Cancelada

    @Column({ type: 'text', nullable: true })
    motivo?: string;

    @CreateDateColumn({ 
        name: 'fecha_creacion', 
        type: 'timestamp', 
        default: () => 'CURRENT_TIMESTAMP' 
    })
    fecha_creacion: Date;
}
