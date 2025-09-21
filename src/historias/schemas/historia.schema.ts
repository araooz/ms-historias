import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ _id: true, timestamps: true })
export class Historia extends Document {
  @Prop({ required: true, index: true })
  mascota_id: string;

  @Prop({
    type: [{
      fecha: { type: Date, required: true },
      evento: { type: String, required: true }
    }],
    default: []
  })
  historia: { fecha: Date; evento: string }[];

  @Prop({ type: [String], default: [] })
  imagenes: string[];

  @Prop() detalles?: string;

  @Prop() usuario_id?: string;

  @Prop({
    type: {
      peso: { type: Number },
      observaciones: { type: String },
      // Campo opcional para TTL si quieres purgar logs antiguos:
      // expireAt: { type: Date, index: { expireAfterSeconds: 0 } }
    },
    default: {}
  })
  meta?: { peso?: number; observaciones?: string; /* expireAt?: Date */ };
}
export const HistoriaSchema = SchemaFactory.createForClass(Historia);

// Índices recomendados: por mascota_id; TTL opcional si agregas expireAt.
// (congruente con las recomendaciones del enunciado). 
