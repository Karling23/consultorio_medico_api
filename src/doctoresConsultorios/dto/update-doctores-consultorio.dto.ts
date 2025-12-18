import { IsInt, IsOptional } from 'class-validator';

export class UpdateDoctoresConsultorioDto {
  @IsInt()
  @IsOptional()
  id_doctor?: number;

  @IsInt()
  @IsOptional()
  id_consultorio?: number;
}
