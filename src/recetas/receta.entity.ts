import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('recetas')
export class Receta {
  @PrimaryGeneratedColumn('increment')
  id_receta: number;

  @Column({ type: 'varchar', length: 64, nullable: false })
  id_historial: string;

  @Column({ type: 'date', default: () => 'CURRENT_DATE' })
  fecha_emision: string;
}
