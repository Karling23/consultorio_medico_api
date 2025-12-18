import { IsInt, IsNotEmpty, IsDateString, IsOptional } from 'class-validator';

export class CreateRecetaDto {
  @IsInt()
  @IsNotEmpty()
  id_historial: number;

  @IsDateString()
  @IsOptional()
  fecha_emision?: string;
}
