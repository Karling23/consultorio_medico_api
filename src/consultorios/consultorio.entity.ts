import {Entity, PrimaryGeneratedColumn, Column,} from 'typeorm';

@Entity('consultorios')
export class Consultorio {
    @PrimaryGeneratedColumn({ name: 'id_consultorio' })
    id_consultorio: number;

    @Column({ 
        name: 'nombre', 
        length: 50, 
        nullable: false 
    })
    nombre: string;

    @Column({ 
        name: 'ubicacion', 
        length: 100, 
        nullable: true 
    })
    ubicacion: string;

    @Column({ 
        name: 'estado', 
        length: 20, 
        default: 'activo' 
    })
    estado: string;
}