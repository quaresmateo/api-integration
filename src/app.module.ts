import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { DealsController } from './deals/deals.controller';
import { DealsModule } from './deals/deals.module';
import { BlingModule } from './bling/bling.module';

@Module({
  imports: [
    DealsModule,
    BlingModule,
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRoot(process.env.MONGO_URI),
  ],
  controllers: [DealsController],
})
export class AppModule { }
