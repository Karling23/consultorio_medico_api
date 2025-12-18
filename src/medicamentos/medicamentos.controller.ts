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

import { MedicamentosService } from './medicamentos.service';
import { CreateMedicamentoDto } from './dto/create-medicamento.dto';
import { UpdateMedicamentoDto } from './dto/update-medicamento.dto';

@Controller('medicamentos')
export class MedicamentosController {
    constructor(
        private readonly medicamentosService: MedicamentosService,
    ) {}

    @Post()
    create(@Body() createDto: CreateMedicamentoDto) {
        return this.medicamentosService.create(createDto);
    }

    @Get()
    findAll() {
        return this.medicamentosService.findAll();
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number) {
        return this.medicamentosService.findOne(id);
    }

    @Put(':id')
    update(
        @Param('id', ParseIntPipe) id: number,
        @Body() updateDto: UpdateMedicamentoDto,
    ) {
        return this.medicamentosService.update(id, updateDto);
    }

    @Delete(':id')
    remove(@Param('id', ParseIntPipe) id: number) {
        return this.medicamentosService.remove(id);
    }
}
