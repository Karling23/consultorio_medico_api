import { IsNotEmpty, IsOptional, IsString, MinLength } from 'class-validator';

export class CreateUsuarioDto {
    @IsString()
    nombre_usuario: string;

    @IsString()
    password: string;

    @IsOptional()
    @IsString()
    rol: string; 
}
