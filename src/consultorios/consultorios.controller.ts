import { Controller, Get, Post, Put, Delete, Body, Param, ParseIntPipe, Query } from '@nestjs/common';

import { ConsultoriosService } from './consultorios.service';
import { CreateConsultorioDto } from './dto/create-consultorio.dto';
import { UpdateConsultorioDto } from './dto/update-consultorio.dto';
import { Pagination } from 'nestjs-typeorm-paginate';
import { Consultorio } from './consultorio.entity';

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
    findAll(
        @Query('page') page = 1,
        @Query('limit') limit = 10,
    ): Promise<Pagination<Consultorio>> {
    limit = limit > 100 ? 100 : limit;
        return this.consultoriosService.findAll({ page, limit });
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