import { IsNotEmpty, IsString } from 'class-validator';

export class CreateRecetaDetalleDto {
    @IsString()
    @IsNotEmpty()
    medicamento: string;

    @IsString()
    @IsNotEmpty()
    dosis: string;

    @IsString()
    @IsNotEmpty()
    frecuencia: string;

    @IsString()
    @IsNotEmpty()
    duracion: string;
}
