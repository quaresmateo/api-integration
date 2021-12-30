import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { DealsController } from './deals/deals.controller';
import { DealsModule } from './deals/deals.module';

@Module({
  imports: [
    DealsModule,
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRoot(process.env.MONGO_URI),
  ],
  controllers: [DealsController],
  providers: [],
})
export class AppModule { }
