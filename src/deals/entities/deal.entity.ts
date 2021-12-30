import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type DealDocument = Deal & Document;

@Schema()
export class Deal {
  @Prop({ required: true })
  id: number;

  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  status: string;

  @Prop({ required: true })
  value: number;

  @Prop({ required: true })
  currency: string;
}

export const DealSchema = SchemaFactory.createForClass(Deal);