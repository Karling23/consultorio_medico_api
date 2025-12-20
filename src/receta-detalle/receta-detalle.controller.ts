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
} from '@nestjs/common';
import { RecetaDetalleService } from './receta-detalle.service';
import { CreateRecetaDetalleDto } from './dto/create-receta-detalle.dto';
import { UpdateRecetaDetalleDto } from './dto/update-receta-detalle.dto';
import { Pagination } from 'nestjs-typeorm-paginate';
import { RecetaDetalle } from './receta-detalle.entity';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import { QueryDto } from 'src/common/dto/querry.dto';

@Controller('receta-detalle')
export class RecetaDetalleController {
    constructor(
        private readonly recetaDetalleService: RecetaDetalleService,
    ) {}

    @Post()
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles('admin')
    create(@Body() createDto: CreateRecetaDetalleDto) {
        return this.recetaDetalleService.create(createDto);
    }

    @Get()
    async findAll(
    @Query() query: QueryDto,
    ): Promise<Pagination<RecetaDetalle>> {

        if (query.limit && query.limit > 100) {
            query.limit = 100;
        }

        const result = await this.recetaDetalleService.findAll(query);

        if (!result) {
            throw new InternalServerErrorException(
            'Could not retrieve receta detalle',
            );
        }

        return result;
    }


    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number) {
        return this.recetaDetalleService.findOne(id);
    }

    @Put(':id')
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles('admin')
    update(
        @Param('id', ParseIntPipe) id: number,
        @Body() updateDto: UpdateRecetaDetalleDto,
    ) {
        return this.recetaDetalleService.update(id, updateDto);
    }

    @Delete(':id')
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles('admin')
    remove(@Param('id', ParseIntPipe) id: number) {
        return this.recetaDetalleService.remove(id);
    }
}
