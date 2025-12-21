import { Controller, Get, Post, Body, Patch, Param, Delete, Query, UseGuards, DefaultValuePipe, ParseIntPipe } from '@nestjs/common';
import { DoctoresService } from './doctores.service';
import { CreateDoctorDto } from './dto/create-doctor.dto';
import { UpdateDoctorDto } from './dto/update-doctor.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';

@Controller('doctores')
export class DoctoresController {
  constructor(private readonly doctoresService: DoctoresService) {}

  @Post()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin')
  create(@Body() createDoctorDto: CreateDoctorDto) {
    return this.doctoresService.create(createDoctorDto);
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
    return this.doctoresService.findAll({ page, limit, search, searchField, sort, order });
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.doctoresService.findOne(+id);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin')
  update(@Param('id') id: string, @Body() updateDoctorDto: UpdateDoctorDto) {
    return this.doctoresService.update(+id, updateDoctorDto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin')
  remove(@Param('id') id: string) {
    return this.doctoresService.remove(+id);
  }
}
