import {
    Controller,
    Get,
    Post,
    Put,
    Delete,
    Body,
    Param,
    ParseIntPipe,
    Query,
    UseGuards,
    InternalServerErrorException,
} from '@nestjs/common';
import { MedicamentosService } from './medicamentos.service';
import { CreateMedicamentoDto } from './dto/create-medicamento.dto';
import { UpdateMedicamentoDto } from './dto/update-medicamento.dto';
import { Pagination } from 'nestjs-typeorm-paginate';
import { Medicamento } from './medicamento.entity';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import { QueryDto } from 'src/common/dto/querry.dto';

@Controller('medicamentos')
export class MedicamentosController {
    constructor(
        private readonly medicamentosService: MedicamentosService,
    ) {}

    @Post()
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles('admin')
    create(@Body() createDto: CreateMedicamentoDto) {
        return this.medicamentosService.create(createDto);
    }

    @Get()
    async findAll(
    @Query() query: QueryDto,
    ): Promise<Pagination<Medicamento>> {

    if (query.limit && query.limit > 100) {
        query.limit = 100;
    }

    const result = await this.medicamentosService.findAll(query);

    if (!result) {
        throw new InternalServerErrorException(
        'Could not retrieve medicamentos',
        );
    }

    return result;
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number) {
        return this.medicamentosService.findOne(id);
    }

    @Put(':id')
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles('admin')
    update(
        @Param('id', ParseIntPipe) id: number,
        @Body() updateDto: UpdateMedicamentoDto,
    ) {
        return this.medicamentosService.update(id, updateDto);
    }

    @Delete(':id')
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles('admin')
    remove(@Param('id', ParseIntPipe) id: number) {
        return this.medicamentosService.remove(id);
    }
}
