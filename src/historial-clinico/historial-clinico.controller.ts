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
} from '@nestjs/common';
import { HistorialClinicoService } from './historial-clinico.service';
import { CreateHistorialClinicoDto } from './dto/create-historial-clinico.dto';
import { UpdateHistorialClinicoDto } from './dto/update-historial-clinico.dto';
import { Pagination } from 'nestjs-typeorm-paginate';
import { HistorialClinico } from './historial-clinico.entity';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';


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
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles('admin')
    update(
        @Param('id', ParseIntPipe) id: number,
        @Body() updateDto: UpdateHistorialClinicoDto,
    ) {
        return this.historialClinicoService.update(id, updateDto);
    }

    @Delete(':id')
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles('admin')
    remove(@Param('id', ParseIntPipe) id: number) {
        return this.historialClinicoService.remove(id);
    }
}
