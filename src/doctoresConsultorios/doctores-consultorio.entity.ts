import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('doctores_consultorios')
export class DoctoresConsultorio {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'integer', nullable: false })
  id_doctor: number;

  @Column({ type: 'integer', nullable: false })
  id_consultorio: number;
}
