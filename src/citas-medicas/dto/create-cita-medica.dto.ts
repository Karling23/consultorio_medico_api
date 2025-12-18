import { IsInt, IsString, IsNotEmpty, Length, IsIn, IsDateString, Matches } from 'class-validator';

export class CreateCitaMedicaDto {
    @IsInt()
    @IsNotEmpty()
    id_paciente: number;

    @IsInt()
    @IsNotEmpty()
    id_doctor: number;

    @IsInt()
    @IsNotEmpty()
    id_consultorio: number;

    @IsDateString()
    @IsNotEmpty()
    fecha_cita: string;

    @IsString()
    @IsNotEmpty()
    @Matches(/^([01]\d|2[0-3]):?([0-5]\d)$/, {
        message: 'La hora debe tener un formato valido HH:mm',
    })
    hora_cita: string;

    @IsString()
    @IsIn(['Pendiente', 'Confirmada', 'Cancelada'], {
        message: 'El estado debe ser Pendiente, Confirmada o Cancelada',
    })
    @Length(1, 20)
    estado: string;

    @IsString()
    motivo: string;
}