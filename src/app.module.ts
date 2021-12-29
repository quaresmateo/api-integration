import { Module } from '@nestjs/common';
import { OportunitiesModule } from './oportunities/oportunities.module';

@Module({
  imports: [OportunitiesModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
