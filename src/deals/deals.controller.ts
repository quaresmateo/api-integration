import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DealsService } from './deals.service';
import { DealDocument } from './entities/deal.entity';

@Controller('deals')
export class DealsController {
  constructor(private readonly dealsService: DealsService) { }

  @Post()
  async create(@Body() body: DealDocument) {
    return this.dealsService.create(body);
  }

  @Get()
  async findAll() {
    return this.dealsService.findAll();
  }
}
