import { IsInt, IsOptional, IsString } from 'class-validator';

export class CreateHistorialClinicoDto {
    @IsInt()
    id_cita: number;

    @IsString()
    @IsOptional()
    diagnostico?: string;

    @IsString()
    @IsOptional()
    tratamiento?: string;

    @IsString()
    @IsOptional()
    observaciones?: string;
}
