import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Usuario } from '../usuarios/usuario.entity';

@Entity('pacientes')
export class Paciente {
    @PrimaryGeneratedColumn({ name: 'id_paciente' })
    id_paciente: number;

    @Column({ name: 'id_usuario' })
    id_usuario: number;

    @ManyToOne(() => Usuario, { eager: false })
    @JoinColumn({ name: 'id_usuario', referencedColumnName: 'id_usuario' })
    usuario: Usuario;

    @Column({ name: 'cedula', length: 10, unique: true })
    cedula: string;

    @Column({ name: 'fecha_nacimiento', type: 'date' })
    fecha_nacimiento: string;

    @Column({ name: 'telefono', length: 20 })
    telefono: string;

    @Column({ name: 'direccion', length: 150 })
    direccion: string;
}
