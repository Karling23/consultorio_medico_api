import { IsInt, IsString, IsNotEmpty, IsOptional, Length, IsDateString } from 'class-validator';

export class CreatePacienteDto {
    @IsInt()
    @IsNotEmpty()
    id_usuario: number;

    @IsString()
    @IsNotEmpty()
    @Length(10, 10, { message: 'La cédula debe tener exactamente 10 caracteres' })
    cedula: string;

    @IsDateString()
    @IsNotEmpty()
    fecha_nacimiento: string;

    @IsString()
    @Length(0, 20)
    telefono: string;

    @IsString()
    @Length(0, 150)
    direccion: string;
}