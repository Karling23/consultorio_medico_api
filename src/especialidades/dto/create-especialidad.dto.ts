import { IsString, IsNotEmpty, IsOptional, MaxLength } from 'class-validator';

export class CreateEspecialidadDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  nombre: string;

  @IsString()
  @IsOptional()
  descripcion?: string;
}
