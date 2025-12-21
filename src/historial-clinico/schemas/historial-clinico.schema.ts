import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ collection: 'historial_clinico', timestamps: true })
export class HistorialClinico extends Document {

    @Prop({ required: true })
    id_cita: number;

    @Prop()
    diagnostico: string;

    @Prop()
    tratamiento: string;

    @Prop()
    observaciones: string;
}

export const HistorialClinicoSchema =
    SchemaFactory.createForClass(HistorialClinico);
