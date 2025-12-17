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

    @Column({ type: 'text', nullable: true })
    diagnostico?: string;

    @Column({ type: 'text', nullable: true })
    tratamiento?: string;

    @Column({ type: 'text', nullable: true })
    observaciones?: string;
}
