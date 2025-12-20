import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
} from 'typeorm';

@Entity('historial_clinico')
export class HistorialClinico {
    @PrimaryGeneratedColumn({ name: 'id_historial' })
    id_historial: number;

    @Column({ name: 'id_cita' })
    id_cita: number;

    @Column({ nullable: true })
    diagnostico: string;

    @Column({ nullable: true })
    tratamiento: string;

    @Column({ nullable: true })
    observaciones: string;
}
