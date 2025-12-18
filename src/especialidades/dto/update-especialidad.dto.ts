import { IsString, IsOptional, MaxLength } from 'class-validator';

export class UpdateEspecialidadDto {
  @IsString()
  @IsOptional()
  @MaxLength(50)
  nombre?: string;

  @IsString()
  @IsOptional()
  descripcion?: string;
}
