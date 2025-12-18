import { Controller, Get, Post, Put, Delete, Body, Param, ParseIntPipe, Query } from '@nestjs/common';

import { CitasMedicasService } from './citas-medicas.service';
import { CreateCitaMedicaDto } from './dto/create-cita-medica.dto';
import { UpdateCitaMedicaDto } from './dto/update-cita-medica.dto';
import { Pagination } from 'nestjs-typeorm-paginate';
import { CitaMedica } from './cita-medica.entity';

@Controller('citas-medicas')
export class CitasMedicasController {
    constructor(
        private readonly citasMedicasService: CitasMedicasService,
    ) {}

    @Post()
    create(@Body() createDto: CreateCitaMedicaDto) {
        return this.citasMedicasService.create(createDto);
    }

    @Get()
    findAll(
        @Query('page') page = 1,
        @Query('limit') limit = 10,
    ): Promise<Pagination<CitaMedica>> {
    limit = limit > 100 ? 100 : limit;
        return this.citasMedicasService.findAll({ page, limit });
    }   

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number) {
        return this.citasMedicasService.findOne(id);
    }

    @Put(':id')
    update(
        @Param('id', ParseIntPipe) id: number,
        @Body() updateDto: UpdateCitaMedicaDto,
    ) {
        return this.citasMedicasService.update(id, updateDto);
    }

    @Delete(':id')
    remove(@Param('id', ParseIntPipe) id: number) {
        return this.citasMedicasService.remove(id);
    }
}