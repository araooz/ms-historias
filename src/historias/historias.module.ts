import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { HistoriasService } from './historias.service';
import { HistoriasController } from './historias.controller';
import { Historia, HistoriaSchema } from './schemas/historia.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Historia.name, schema: HistoriaSchema }])],
  controllers: [HistoriasController],
  providers: [HistoriasService],
})
export class HistoriasModule {}
