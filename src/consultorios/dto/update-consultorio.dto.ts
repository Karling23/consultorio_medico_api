import { IsString, IsOptional, Length, IsIn } from 'class-validator';

export class UpdateConsultorioDto {
    @IsOptional()
    @IsString()
    @Length(1, 50)
    nombre?: string;

    @IsOptional()
    @IsString()
    @Length(0, 100)
    ubicacion?: string;

    @IsOptional()
    @IsString()
    @IsIn(['activo', 'inactivo'], {
        message: 'El estado debe ser activo o inactivo',
    })
    @Length(1, 20)
    estado?: string;
}