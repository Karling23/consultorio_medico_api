import { Controller, Get, Post, Put, Delete, Body, Param, ParseIntPipe } from '@nestjs/common';

import { ConsultoriosService } from './consultorios.service';
import { CreateConsultorioDto } from './dto/create-consultorio.dto';
import { UpdateConsultorioDto } from './dto/update-consultorio.dto';

@Controller('consultorios')
export class ConsultoriosController {
    constructor(
        private readonly consultoriosService: ConsultoriosService,
    ) {}

    @Post()
    create(@Body() createDto: CreateConsultorioDto) {
        return this.consultoriosService.create(createDto);
    }

    @Get()
    findAll() {
        return this.consultoriosService.findAll();
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number) {
        return this.consultoriosService.findOne(id);
    }

    @Put(':id')
    update(
        @Param('id', ParseIntPipe) id: number,
        @Body() updateDto: UpdateConsultorioDto,
    ) {
        return this.consultoriosService.update(id, updateDto);
    }

    @Delete(':id')
    remove(@Param('id', ParseIntPipe) id: number) {
        return this.consultoriosService.remove(id);
    }
}