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
import { HistorialClinicoService } from './historial-clinico.service';
import { CreateHistorialClinicoDto } from './dto/create-historial-clinico.dto';
import { UpdateHistorialClinicoDto } from './dto/update-historial-clinico.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import { QueryDto } from 'src/common/dto/querry.dto';
import { PaginationResult } from 'src/common/interfaces/pagination.interface';
import { HistorialClinico } from './schemas/historial-clinico.schema';


@Controller('historial-clinico')
export class HistorialClinicoController {
    constructor(
        private readonly historialClinicoService: HistorialClinicoService,
    ) {}

    @Post()
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles('admin')
    create(@Body() createDto: CreateHistorialClinicoDto) {
        return this.historialClinicoService.create(createDto);
    }

    @Get()
    async findAll(
    @Query() query: QueryDto,
    ): Promise<PaginationResult<HistorialClinico>> {

    if (query.limit && query.limit > 100) {
        query.limit = 100;
    }

    const result = await this.historialClinicoService.findAll(query);

    if (!result) {
        throw new InternalServerErrorException(
        'Could not retrieve historial clínico',
        );
    }

    return result;
    }


    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.historialClinicoService.findOne(id);
    }

    @Put(':id')
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles('admin')
    update(
        @Param('id') id: string,
        @Body() updateDto: UpdateHistorialClinicoDto,
    ) {
        return this.historialClinicoService.update(id, updateDto);
    }

    @Delete(':id')
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles('admin')
    remove(@Param('id') id: string) {
        return this.historialClinicoService.remove(id);
    }
}
