import { Controller, Get, Post, Put, Delete, Body, Param, ParseIntPipe, Query, UseGuards } from '@nestjs/common';

import { ConsultoriosService } from './consultorios.service';
import { CreateConsultorioDto } from './dto/create-consultorio.dto';
import { UpdateConsultorioDto } from './dto/update-consultorio.dto';
import { Pagination } from 'nestjs-typeorm-paginate';
import { Consultorio } from './consultorio.entity';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { Roles } from 'src/auth/decorators/roles.decorator';

@Controller('consultorios')
export class ConsultoriosController {
    constructor(
        private readonly consultoriosService: ConsultoriosService,
    ) {}

    @Post()
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles('admin')
    create(@Body() createDto: CreateConsultorioDto) {
        return this.consultoriosService.create(createDto);
    }

    @Get()
    findAll(@Query() query: any): Promise<Pagination<Consultorio>> {
        // Aseguramos que page y limit sean números y tengan valores por defecto
        const page = query.page ? Number(query.page) : 1;
        const limit = query.limit ? Number(query.limit) : 10;
        
        // Mantenemos tu regla de máximo 100
        const finalLimit = limit > 100 ? 100 : limit;

        // Pasamos el objeto completo (que ahora sí incluye el search)
        return this.consultoriosService.findAll({ 
            ...query, 
            page, 
            limit: finalLimit 
        });
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number) {
        return this.consultoriosService.findOne(id);
    }

    @Put(':id')
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles('admin')
    update(
        @Param('id', ParseIntPipe) id: number,
        @Body() updateDto: UpdateConsultorioDto,
    ) {
        return this.consultoriosService.update(id, updateDto);
    }

    @Delete(':id')
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles('admin')
    remove(@Param('id', ParseIntPipe) id: number) {
        return this.consultoriosService.remove(id);
    }
}