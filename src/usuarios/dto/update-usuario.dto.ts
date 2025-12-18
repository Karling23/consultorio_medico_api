import { IsOptional, IsString } from 'class-validator';

export class UpdateUsuarioDto {
    
    @IsOptional()
    @IsString()
    nombre_usuario?: string;

    @IsOptional()
    @IsString()
    password?: string;

    @IsOptional()
    @IsString()
    rol?: string; 
}
