import { Controller, Get, Post, Body, Patch, Param, Delete, Query, UseGuards, DefaultValuePipe, ParseIntPipe } from '@nestjs/common';
import { DoctoresConsultoriosService } from './doctores-consultorios.service';
import { CreateDoctoresConsultorioDto } from './dto/create-doctores-consultorio.dto';
import { UpdateDoctoresConsultorioDto } from './dto/update-doctores-consultorio.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';

@Controller('doctoresConsultorios')
export class DoctoresConsultoriosController {
  constructor(private readonly doctoresConsultoriosService: DoctoresConsultoriosService) {}

  @Post()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin')
  create(@Body() createDoctoresConsultorioDto: CreateDoctoresConsultorioDto) {
    return this.doctoresConsultoriosService.create(createDoctoresConsultorioDto);
  }

  @Get()
  findAll(
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number = 1,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number = 10,
    @Query('search') search?: string,
    @Query('searchField') searchField?: string,
    @Query('sort') sort?: string,
    @Query('order') order: 'ASC' | 'DESC' = 'ASC',
  ) {
    return this.doctoresConsultoriosService.findAll({ page, limit, search, searchField, sort, order });
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.doctoresConsultoriosService.findOne(+id);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin')
  update(@Param('id') id: string, @Body() updateDoctoresConsultorioDto: UpdateDoctoresConsultorioDto) {
    return this.doctoresConsultoriosService.update(+id, updateDoctoresConsultorioDto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin')
  remove(@Param('id') id: string) {
    return this.doctoresConsultoriosService.remove(+id);
  }
}
