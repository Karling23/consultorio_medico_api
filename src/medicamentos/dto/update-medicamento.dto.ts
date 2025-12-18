import { IsOptional, IsString } from 'class-validator';

export class UpdateMedicamentoDto {
    @IsOptional()
    @IsString()
    nombre?: string;

    @IsOptional()
    @IsString()
    descripcion?: string;
}
