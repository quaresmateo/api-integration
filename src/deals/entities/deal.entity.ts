import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type DealDocument = Deal & Document;

@Schema()
export class Deal {
  @Prop({ required: true, unique: true })
  id: number;

  @Prop({ required: true })
  person_name: string;

  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  status: string;

  @Prop({ required: true })
  value: number;

  @Prop({ required: true })
  currency: string;

  @Prop({ required: true })
  won_time: Date;
}

export const DealSchema = SchemaFactory.createForClass(Deal);