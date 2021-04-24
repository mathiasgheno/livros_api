import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class LivrosEntity extends Document {
  @Prop() nome: string;
  @Prop() serie: string;
  @Prop() paginas: string;
  @Prop() descricao: string;
  @Prop() imagem: string;
}

export const LivrosSchema = SchemaFactory.createForClass(LivrosEntity);