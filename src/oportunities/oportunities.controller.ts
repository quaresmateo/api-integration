import { Controller, Get } from '@nestjs/common';
import { OportunitiesService } from './oportunities.service';

@Controller('oportunities')
export class OportunitiesController {
  constructor(private readonly oportunitiesService: OportunitiesService) { }

  @Get()
  findAll() {
    return this.oportunitiesService.findAll();
  }
}
