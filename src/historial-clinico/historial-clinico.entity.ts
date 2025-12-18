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

    @Column({ type: 'text', nullable: false })
    diagnostico: string;

    @Column({ type: 'text', nullable: false })
    tratamiento: string;

    @Column({ type: 'text', nullable: false })
    observaciones: string;
}
