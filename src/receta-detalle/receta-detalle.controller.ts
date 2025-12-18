import {
    Controller,
    Get,
    Post,
    Put,
    Delete,
    Body,
    Param,
    ParseIntPipe,
} from '@nestjs/common';

import { RecetaDetalleService } from './receta-detalle.service';
import { CreateRecetaDetalleDto } from './dto/create-receta-detalle.dto';
import { UpdateRecetaDetalleDto } from './dto/update-receta-detalle.dto';

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
    findAll() {
        return this.recetaDetalleService.findAll();
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
