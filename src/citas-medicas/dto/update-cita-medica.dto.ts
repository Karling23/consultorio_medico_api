import { IsInt, IsString, IsOptional, Length, IsIn, IsDateString, Matches } from 'class-validator';

export class UpdateCitaMedicaDto {
    @IsOptional()
    @IsInt()
    id_paciente?: number;

    @IsOptional()
    @IsInt()
    id_doctor?: number;

    @IsOptional()
    @IsInt()
    id_consultorio?: number;

    @IsOptional()
    @IsDateString()
    fecha_cita?: string;

    @IsOptional()
    @IsString()
    @Matches(/^([01]\d|2[0-3]):?([0-5]\d)$/, {
        message: 'La hora debe tener un formato válido HH:mm',
    })
    hora_cita?: string;

    @IsOptional()
    @IsString()
    @IsIn(['Pendiente', 'Confirmada', 'Cancelada'], {
        message: 'El estado debe ser Pendiente, Confirmada o Cancelada',
    })
    @Length(1, 20)
    estado?: string;

    @IsOptional()
    @IsString()
    motivo?: string;
}