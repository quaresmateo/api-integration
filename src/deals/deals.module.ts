import { Module } from '@nestjs/common';
import { DealsService } from './deals.service';
import { DealsController } from './deals.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Deal, DealSchema } from './entities/deal.entity';

@Module({
  imports: [MongooseModule.forFeature([{ name: Deal.name, schema: DealSchema }])],
  controllers: [DealsController],
  providers: [DealsService],
  exports: [DealsService]
})
export class DealsModule { }
