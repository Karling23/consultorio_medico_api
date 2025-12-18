import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('recetas')
export class Receta {
  @PrimaryGeneratedColumn('increment')
  id_receta: number;

  @Column({ type: 'integer', nullable: false })
  id_historial: number;

  @Column({ type: 'date', default: () => 'CURRENT_DATE' })
  fecha_emision: string;
}
