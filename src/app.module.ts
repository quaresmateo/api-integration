import { Module } from '@nestjs/common';
import { DealsController } from './deals/deals.controller';
import { DealsModule } from './deals/deals.module';
import { DealsService } from './deals/deals.service';

@Module({
  imports: [DealsModule],
  controllers: [DealsController],
  providers: [DealsService],
})
export class AppModule { }
