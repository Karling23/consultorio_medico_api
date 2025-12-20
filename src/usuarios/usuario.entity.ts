import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
} from 'typeorm';

@Entity('usuarios')
export class Usuario {
    @PrimaryGeneratedColumn({ name: 'id_usuario' })
    id_usuario: number;

    @Column({ name: 'nombre_usuario', length: 50 })
    nombre_usuario: string;

    @Column({ name: 'password', length: 255 })
    password: string;

    @Column({ length: 20, default: 'paciente' })
    rol: string;

    @CreateDateColumn({
        name: 'fecha_creacion',
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP',
    })
    fecha_creacion: Date;

    @Column({ nullable: true })
    profile: string;
}
