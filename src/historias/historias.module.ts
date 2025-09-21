import { Module } from '@nestjs/common';
import { HistoriasService } from './historias.service';
import { HistoriasController } from './historias.controller';

@Module({
  providers: [HistoriasService],
  controllers: [HistoriasController]
})
export class HistoriasModule {}
