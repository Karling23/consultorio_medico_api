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
import { RecetaDetalleService } from './receta-detalle.service';
import { CreateRecetaDetalleDto } from './dto/create-receta-detalle.dto';
import { UpdateRecetaDetalleDto } from './dto/update-receta-detalle.dto';
import { Pagination } from 'nestjs-typeorm-paginate';
import { RecetaDetalle } from './receta-detalle.entity';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';

@Controller('receta-detalle')
export class RecetaDetalleController {
    constructor(
        private readonly recetaDetalleService: RecetaDetalleService,
    ) {}

    @Post()
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles('admin')
    create(@Body() createDto: CreateRecetaDetalleDto) {
        return this.recetaDetalleService.create(createDto);
    }

    @Get()
    findAll(
        @Query('page') page = 1,
        @Query('limit') limit = 10,
    ): Promise<Pagination<RecetaDetalle>> {
        limit = limit > 100 ? 100 : limit;
        return this.recetaDetalleService.findAll({ page, limit });
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number) {
        return this.recetaDetalleService.findOne(id);
    }

    @Put(':id')
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles('admin')
    update(
        @Param('id', ParseIntPipe) id: number,
        @Body() updateDto: UpdateRecetaDetalleDto,
    ) {
        return this.recetaDetalleService.update(id, updateDto);
    }

    @Delete(':id')
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles('admin')
    remove(@Param('id', ParseIntPipe) id: number) {
        return this.recetaDetalleService.remove(id);
    }
}
