import { Controller, Get, Post, Put, Delete, Body, Param, ParseIntPipe, } from '@nestjs/common';

import { PacientesService } from './pacientes.service';
import { CreatePacienteDto } from './dto/create-paciente.dto';
import { UpdatePacienteDto } from './dto/update-paciente.dto';

@Controller('pacientes')
export class PacientesController {
    constructor(
        private readonly pacientesService: PacientesService,
    ) {}

    @Post()
    create(@Body() createDto: CreatePacienteDto) {
        return this.pacientesService.create(createDto);
    }

    @Get()
    findAll() {
        return this.pacientesService.findAll();
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number) {
        return this.pacientesService.findOne(id);
    }

    @Put(':id')
    update(
        @Param('id', ParseIntPipe) id: number,
        @Body() updateDto: UpdatePacienteDto,
    ) {
        return this.pacientesService.update(id, updateDto);
    }

    @Delete(':id')
    remove(@Param('id', ParseIntPipe) id: number) {
        return this.pacientesService.remove(id);
    }
}