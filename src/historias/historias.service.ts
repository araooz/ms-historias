import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Historia } from './schemas/historia.schema';
import { Model } from 'mongoose';

@Injectable()
export class HistoriasService {
  constructor(@InjectModel(Historia.name) private model: Model<Historia>) {}

  async lineaDeTiempo(mascotaId: string, page = 1, limit = 20) {
    const skip = (page - 1) * limit;
    const [items, total] = await Promise.all([
      this.model.find({ mascota_id: mascotaId }).sort({ 'historia.fecha': -1 }).skip(skip).limit(limit).lean(),
      this.model.countDocuments({ mascota_id: mascotaId }),
    ]);
    return { items, page, limit, total };
  }

  async agregarEvento(mascotaId: string, payload: {
    fecha: string; evento: string; imagenes?: string[]; detalles?: string;
    usuario_id?: string; meta?: any;
  }) {
    // Guarda cada evento como un documento de historia acumulando timeline
    return this.model.create({
      mascota_id: mascotaId,
      historia: [{ fecha: new Date(payload.fecha), evento: payload.evento }],
      imagenes: payload.imagenes ?? [],
      detalles: payload.detalles,
      usuario_id: payload.usuario_id,
      meta: payload.meta,
    });
  }
}
