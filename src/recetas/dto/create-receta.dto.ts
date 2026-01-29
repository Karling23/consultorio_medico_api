import { IsString, IsNotEmpty, IsDateString, IsOptional } from 'class-validator';

export class CreateRecetaDto {
  @IsString()
  @IsNotEmpty()
  id_historial: string;

  @IsDateString()
  @IsOptional()
  fecha_emision?: string;
}
