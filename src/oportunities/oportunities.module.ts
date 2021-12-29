import { Module } from '@nestjs/common';
import { OportunitiesService } from './oportunities.service';
import { OportunitiesController } from './oportunities.controller';

@Module({
  controllers: [OportunitiesController],
  providers: [OportunitiesService]
})
export class OportunitiesModule {}
