import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity('citas_medicas')
export class CitaMedica {
    @PrimaryGeneratedColumn({ name: 'id_cita' })
    id_cita: number;

    @Column({ name: 'id_paciente' })
    id_paciente: number;

    @Column({ name: 'id_doctor' })
    id_doctor: number;

    @Column({ name: 'id_consultorio' })
    id_consultorio: number;

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