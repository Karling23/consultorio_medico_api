import { IsString, IsNotEmpty, IsOptional, Length, IsIn } from 'class-validator';

export class CreateConsultorioDto {
    @IsString()
    @IsNotEmpty()
    @Length(1, 50)
    nombre: string;

    @IsString()
    @Length(0, 100)
    ubicacion: string;

    @IsString()
    @IsIn(['activo', 'inactivo'], {
        message: 'El estado debe ser activo o inactivo',
    })
    @Length(1, 20)
    estado: string;
}