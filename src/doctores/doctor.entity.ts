import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('doctores')
export class Doctor {
  @PrimaryGeneratedColumn('increment')
  id_doctor: number;

  @Column({ type: 'integer', nullable: false })
  id_usuario: number;

  @Column({ type: 'integer', nullable: false })
  id_especialidad: number;

  @Column({ type: 'time', nullable: true })
  horario_inicio: string;

  @Column({ type: 'time', nullable: true })
  horario_fin: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  dias_disponibles: string;
}
