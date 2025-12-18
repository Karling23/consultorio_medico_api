import {
    Controller,
    Get,
    Post,
    Put,
    Delete,
    Body,
    Param,
    ParseIntPipe,
    Query
} from '@nestjs/common';
import { HistorialClinicoService } from './historial-clinico.service';
import { CreateHistorialClinicoDto } from './dto/create-historial-clinico.dto';
import { UpdateHistorialClinicoDto } from './dto/update-historial-clinico.dto';
import { Pagination } from 'nestjs-typeorm-paginate';
import { HistorialClinico } from './historial-clinico.entity';

@Controller('historial-clinico')
export class HistorialClinicoController {
    constructor(
        private readonly historialClinicoService: HistorialClinicoService,
    ) {}

    @Post()
    create(@Body() createDto: CreateHistorialClinicoDto) {
        return this.historialClinicoService.create(createDto);
    }

    @Get()
    findAll(
        @Query('page') page = 1,
        @Query('limit') limit = 10,
    ): Promise<Pagination<HistorialClinico>> {
        limit = limit > 100 ? 100 : limit;
        return this.historialClinicoService.findAll({ page, limit });
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number) {
        return this.historialClinicoService.findOne(id);
    }

    @Put(':id')
    update(
        @Param('id', ParseIntPipe) id: number,
        @Body() updateDto: UpdateHistorialClinicoDto,
    ) {
        return this.historialClinicoService.update(id, updateDto);
    }

    @Delete(':id')
    remove(@Param('id', ParseIntPipe) id: number) {
        return this.historialClinicoService.remove(id);
    }
}
