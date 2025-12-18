import { IsOptional, IsString } from 'class-validator';

export class UpdateHistorialClinicoDto {
    @IsOptional()
    @IsString()
    diagnostico?: string;

    @IsOptional()
    @IsString()
    tratamiento?: string;

    @IsOptional()
    @IsString()
    observaciones?: string;
}
