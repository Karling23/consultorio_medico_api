import { IsInt, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateDoctorDto {
  @IsInt()
  @IsNotEmpty()
  id_usuario: number;

  @IsInt()
  @IsNotEmpty()
  id_especialidad: number;

  @IsString()
  @IsOptional()
  horario_inicio: string;

  @IsString()
  @IsOptional()
  horario_fin: string;

  @IsString()
  @IsOptional()
  dias_disponibles: string;
}
