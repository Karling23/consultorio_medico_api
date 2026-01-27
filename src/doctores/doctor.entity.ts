import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Usuario } from '../usuarios/usuario.entity';
import { Especialidad } from '../especialidades/especialidad.entity';

@Entity('doctores')
export class Doctor {
  @PrimaryGeneratedColumn('increment')
  id_doctor: number;

  @Column({ type: 'integer', nullable: false })
  id_usuario: number;

  @ManyToOne(() => Usuario, { eager: false })
  @JoinColumn({ name: 'id_usuario', referencedColumnName: 'id_usuario' })
  usuario: Usuario;

  @Column({ type: 'integer', nullable: false })
  id_especialidad: number;

  @ManyToOne(() => Especialidad, { eager: false })
  @JoinColumn({ name: 'id_especialidad', referencedColumnName: 'id_especialidad' })
  especialidad: Especialidad;

  @Column({ type: 'time', nullable: true })
  horario_inicio: string;

  @Column({ type: 'time', nullable: true })
  horario_fin: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  dias_disponibles: string;
}
