import { IsInt, IsString, IsOptional, Length, IsDateString } from 'class-validator';

export class UpdatePacienteDto {
    @IsOptional()
    @IsInt()
    id_usuario?: number;

    @IsOptional()
    @IsString()
    @Length(10, 10, { message: 'La cédula debe tener exactamente 10 caracteres' })
    cedula?: string;

    @IsOptional()
    @IsDateString()
    fecha_nacimiento?: string;

    @IsOptional()
    @IsString()
    @Length(0, 20)
    telefono?: string;

    @IsOptional()
    @IsString()
    @Length(0, 150)
    direccion?: string;
}