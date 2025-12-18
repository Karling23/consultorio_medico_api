import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateMedicamentoDto {
    @IsString()
    @IsNotEmpty()
    nombre: string;

    @IsString()
    descripcion: string;
}
