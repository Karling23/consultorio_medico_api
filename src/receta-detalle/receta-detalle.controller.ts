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
} from '@nestjs/common';
import { RecetaDetalleService } from './receta-detalle.service';
import { CreateRecetaDetalleDto } from './dto/create-receta-detalle.dto';
import { UpdateRecetaDetalleDto } from './dto/update-receta-detalle.dto';
import { Pagination } from 'nestjs-typeorm-paginate';
import { RecetaDetalle } from './receta-detalle.entity';

@Controller('receta-detalle')
export class RecetaDetalleController {
    constructor(
        private readonly recetaDetalleService: RecetaDetalleService,
    ) {}

    @Post()
    create(@Body() createDto: CreateRecetaDetalleDto) {
        return this.recetaDetalleService.create(createDto);
    }

    @Get()
    findAll(
        @Query('page') page = 1,
        @Query('limit') limit = 10,
    ): Promise<Pagination<RecetaDetalle>> {
        limit = limit > 100 ? 100 : limit;
        return this.recetaDetalleService.findAll({ page, limit });
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number) {
        return this.recetaDetalleService.findOne(id);
    }

    @Put(':id')
    update(
        @Param('id', ParseIntPipe) id: number,
        @Body() updateDto: UpdateRecetaDetalleDto,
    ) {
        return this.recetaDetalleService.update(id, updateDto);
    }

    @Delete(':id')
    remove(@Param('id', ParseIntPipe) id: number) {
        return this.recetaDetalleService.remove(id);
    }
}
