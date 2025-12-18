import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('medicamentos')
export class Medicamento {
    @PrimaryGeneratedColumn({ name: 'id_medicamento' })
    id_medicamento: number;

    @Column({ length: 100 })
    nombre: string;

    @Column({ type: 'text', nullable: true })
    descripcion: string;
}
