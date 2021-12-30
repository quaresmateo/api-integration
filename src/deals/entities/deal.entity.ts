import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'

export type DealDocument = Document & Deal

@Schema()
export class Deal {
  @Prop({ required: true })
  id: number

  @Prop({ required: true })
  title: string

  @Prop({ required: true })
  status: string

  @Prop({ required: true })
  value: number

  @Prop({ required: true })
  currency: string
}
