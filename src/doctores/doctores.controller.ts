import { Controller, Get, Post, Body, Patch, Param, Delete, Query, DefaultValuePipe, ParseIntPipe } from '@nestjs/common';
import { DoctoresService } from './doctores.service';
import { CreateDoctorDto } from './dto/create-doctor.dto';
import { UpdateDoctorDto } from './dto/update-doctor.dto';
import { Pagination } from 'nestjs-typeorm-paginate';
import { Doctor } from './doctor.entity';

@Controller('doctores')
export class DoctoresController {
  constructor(private readonly doctoresService: DoctoresService) {}

  @Post()
  create(@Body() createDoctorDto: CreateDoctorDto) {
    return this.doctoresService.create(createDoctorDto);
  }

  @Get()
  findAll(
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number = 1,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number = 10,
  ): Promise<Pagination<Doctor>> {
    limit = limit > 100 ? 100 : limit;
    return this.doctoresService.findAll({
      page,
      limit,
      route: 'http://localhost:3000/doctores',
    });
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.doctoresService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDoctorDto: UpdateDoctorDto) {
    return this.doctoresService.update(+id, updateDoctorDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.doctoresService.remove(+id);
  }
}
