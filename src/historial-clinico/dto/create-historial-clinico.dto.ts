import { IsInt, IsOptional, IsString } from 'class-validator';

export class CreateHistorialClinicoDto {
    @IsInt()
    id_cita: number;

    @IsString()
    diagnostico: string;

    @IsString()
    tratamiento: string;

    @IsString()
    observaciones: string;
}
