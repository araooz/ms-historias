import { Controller, Get, Param, Query, Post, Body } from '@nestjs/common';
import { ApiQuery, ApiTags, ApiResponse, ApiBody } from '@nestjs/swagger';
import { HistoriasService } from './historias.service';
import { CreateHistoriaDto } from './dto/create-historia.dto';

@ApiTags('historias')
@Controller('historias')
export class HistoriasController {
  constructor(private readonly svc: HistoriasService) {}

  @Get('mascota/:mascotaId')
  @ApiQuery({ name: 'page', required: false })
  @ApiQuery({ name: 'limit', required: false })
  @ApiResponse({ status: 200, description: 'Línea de tiempo paginada' })
  linea(@Param('mascotaId') mascotaId: string, @Query('page') page = 1, @Query('limit') limit = 20) {
    return this.svc.lineaDeTiempo(mascotaId, Number(page), Number(limit));
  }

  @Post(':mascotaId')
  @ApiBody({ type: CreateHistoriaDto })
  @ApiResponse({ status: 201, description: 'Evento agregado' })
  crear(@Param('mascotaId') mascotaId: string, @Body() dto: CreateHistoriaDto) {
    return this.svc.agregarEvento(mascotaId, dto);
  }
}
