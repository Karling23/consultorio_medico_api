import {
    Controller,
    Get,
    Post,
    Put,
    Delete,
    Body,
    Param,
    ParseIntPipe,
    Query,
    UseGuards,
    InternalServerErrorException,
    BadRequestException,
    UseInterceptors,
    UploadedFile,
} from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { Pagination } from 'nestjs-typeorm-paginate';
import { Usuario } from './usuario.entity';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import { QueryDto } from 'src/common/dto/querry.dto';
import { SuccessResponseDto } from 'src/common/dto/response.dto';
import { FileInterceptor } from '@nestjs/platform-express/multer';
import { diskStorage } from 'multer';

@Controller('usuarios')
export class UsuariosController {
    constructor(private readonly usuariosService: UsuariosService) {}

    @Post()
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles('admin')
    create(@Body() createUsuarioDto: CreateUsuarioDto) {
        return this.usuariosService.create(createUsuarioDto);
    }

    @Get()
    async findAll(
        @Query() query: QueryDto,
        @Query('isActive') isActive?: string,
    ): Promise<SuccessResponseDto<Pagination<Usuario>>> {
        if (query.limit && query.limit > 100) {
        query.limit = 100;
        }

        if (isActive !== undefined && isActive !== 'true' && isActive !== 'false') {
        throw new BadRequestException('Invalid value for "isActive". Use "true" or "false".');
        }

        const result = await this.usuariosService.findAll(
        query,
        isActive === 'true',
        );

        if (!result) throw new InternalServerErrorException('Could not retrieve users');

        return new SuccessResponseDto('Users retrieved successfully', result);
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number) {
        return this.usuariosService.findOne(id);
    }

    @Put(':id')
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles('admin')
    update(
        @Param('id', ParseIntPipe) id: number,
        @Body() updateUsuarioDto: UpdateUsuarioDto,
    ) {
        return this.usuariosService.update(id, updateUsuarioDto);
    }

    @Delete(':id')
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles('admin')
    remove(@Param('id', ParseIntPipe) id: number) {
        return this.usuariosService.remove(id);
    }

    @Put(':id/profile')
    @UseInterceptors(FileInterceptor('profile', {
    storage: diskStorage({
        destination: './public/profile',
        filename: (req, file, cb) => {
        const uniqueName = `${Date.now()}-${file.originalname}`;
        cb(null, uniqueName);
        }
    }),
    fileFilter: (req, file, cb) => {
        if (!file.mimetype.match(/\/(jpg|jpeg|png)$/)) {
        return cb(new BadRequestException('Only JPG or PNG files are allowed'), false);
        }
        cb(null, true);
    }
    }))
    async uploadProfile(
    @Param('id') id: number,
    @UploadedFile() file: Express.Multer.File,
    ) {
    if (!file) throw new BadRequestException('Profile image is required');
    const user = await this.usuariosService.updateProfile(id, file.filename);
    return new SuccessResponseDto('Profile image updated', user);
    }

}
