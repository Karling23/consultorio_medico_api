import {
    Controller,
    Get,
    Post,
    Put,
    Delete,
    Body,
    Param,
    ParseIntPipe,
} from '@nestjs/common';

import { HistorialClinicoService } from './historial-clinico.service';
import { CreateHistorialClinicoDto } from './dto/create-historial-clinico.dto';
import { UpdateHistorialClinicoDto } from './dto/update-historial-clinico.dto';

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
    findAll() {
        return this.historialClinicoService.findAll();
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
