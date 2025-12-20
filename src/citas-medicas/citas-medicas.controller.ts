import { Controller, Get, Post, Put, Delete, Body, Param, ParseIntPipe, Query, UseGuards } from '@nestjs/common';

import { CitasMedicasService } from './citas-medicas.service';
import { CreateCitaMedicaDto } from './dto/create-cita-medica.dto';
import { UpdateCitaMedicaDto } from './dto/update-cita-medica.dto';
import { Pagination } from 'nestjs-typeorm-paginate';
import { CitaMedica } from './cita-medica.entity';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { Roles } from 'src/auth/decorators/roles.decorator';

@Controller('citas-medicas')
export class CitasMedicasController {
    constructor(
        private readonly citasMedicasService: CitasMedicasService,
    ) {}

    @Post()
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles('admin')
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
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles('admin')
    update(
        @Param('id', ParseIntPipe) id: number,
        @Body() updateDto: UpdateCitaMedicaDto,
    ) {
        return this.citasMedicasService.update(id, updateDto);
    }

    @Delete(':id')
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles('admin')
    remove(@Param('id', ParseIntPipe) id: number) {
        return this.citasMedicasService.remove(id);
    }
}