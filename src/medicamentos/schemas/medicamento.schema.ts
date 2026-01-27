import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ collection: 'medicamentos', timestamps: true })
export class Medicamento extends Document {
    @Prop({ required: true, trim: true })
    nombre: string;

    @Prop({ default: null })
    descripcion: string;

    @Prop({ required: true, min: 0 })
    precio: number;

    @Prop({ required: true, min: 0 })
    stock: number;
}

export const MedicamentoSchema = SchemaFactory.createForClass(Medicamento);
