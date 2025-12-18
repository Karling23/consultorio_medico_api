import { IsNotEmpty, IsString, MinLength } from 'class-validator';

export class CreateUsuarioDto {
    @IsString()
    nombre_usuario: string;

    @IsString()
    password: string;

    @IsString()
    rol: string; 
}
