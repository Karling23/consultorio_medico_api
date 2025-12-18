import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('especialidades')
export class Especialidad {
  @PrimaryGeneratedColumn('increment')
  id_especialidad: number;

  @Column({ type: 'varchar', length: 50, nullable: false })
  nombre: string;

  @Column({ type: 'text', nullable: true })
  descripcion: string;
}
