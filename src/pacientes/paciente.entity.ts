import { Entity, PrimaryGeneratedColumn, Column,} from 'typeorm';

@Entity('pacientes')
export class Paciente {
    @PrimaryGeneratedColumn({ name: 'id_paciente' })
    id_paciente: number;

    @Column({ name: 'id_usuario' })
    id_usuario: number;

    @Column({ name: 'cedula', length: 10, unique: true })
    cedula: string;

    @Column({ name: 'fecha_nacimiento', type: 'date' })
    fecha_nacimiento: string;

    @Column({ name: 'telefono', length: 20 })
    telefono: string;

    @Column({ name: 'direccion', length: 150 })
    direccion: string;
}