import { Controller, Get, Post, Put, Delete, Body, Param, ParseIntPipe, Query, UseGuards } from '@nestjs/common';

import { PacientesService } from './pacientes.service';
import { CreatePacienteDto } from './dto/create-paciente.dto';
import { UpdatePacienteDto } from './dto/update-paciente.dto';
import { Pagination } from 'nestjs-typeorm-paginate';
import { Paciente } from './paciente.entity';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { Roles } from 'src/auth/decorators/roles.decorator';

@Controller('pacientes')
export class PacientesController {
    constructor(
        private readonly pacientesService: PacientesService,
    ) {}

    @Post()
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles('admin')
    create(@Body() createDto: CreatePacienteDto) {
        return this.pacientesService.create(createDto);
    }

    @Get()
    findAll(@Query() query: any): Promise<Pagination<Paciente>> {
        // Convertimos a números y damos valores por defecto
        const page = query.page ? Number(query.page) : 1;
        const limit = query.limit ? Number(query.limit) : 10;
        
        const finalLimit = limit > 100 ? 100 : limit;

        // Enviamos todo el objeto al servicio
        return this.pacientesService.findAll({ 
            ...query, 
            page, 
            limit: finalLimit 
        });
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number) {
        return this.pacientesService.findOne(id);
    }

    @Put(':id')
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles('admin')
    update(
        @Param('id', ParseIntPipe) id: number,
        @Body() updateDto: UpdatePacienteDto,
    ) {
        return this.pacientesService.update(id, updateDto);
    }

    @Delete(':id')
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles('admin')
    remove(@Param('id', ParseIntPipe) id: number) {
        return this.pacientesService.remove(id);
    }
}