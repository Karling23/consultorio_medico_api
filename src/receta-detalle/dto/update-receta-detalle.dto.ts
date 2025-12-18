import { IsOptional, IsString } from 'class-validator';

export class UpdateRecetaDetalleDto {
    @IsOptional()
    @IsString()
    medicamento?: string;

    @IsOptional()
    @IsString()
    dosis?: string;

    @IsOptional()
    @IsString()
    frecuencia?: string;

    @IsOptional()
    @IsString()
    duracion?: string;
}
