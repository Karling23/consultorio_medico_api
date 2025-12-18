import { IsInt, IsNotEmpty } from 'class-validator';

export class CreateDoctoresConsultorioDto {
  @IsInt()
  @IsNotEmpty()
  id_doctor: number;

  @IsInt()
  @IsNotEmpty()
  id_consultorio: number;
}
