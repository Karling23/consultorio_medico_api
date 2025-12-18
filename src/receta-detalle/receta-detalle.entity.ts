import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('receta_detalle')
export class RecetaDetalle {
    @PrimaryGeneratedColumn({ name: 'id_receta_detalle' })
    id_receta_detalle: number;

    @Column({ length: 100 })
    medicamento: string;

    @Column({ length: 50 })
    dosis: string;

    @Column({ length: 50 })
    frecuencia: string;

    @Column({ length: 50 })
    duracion: string;
}
