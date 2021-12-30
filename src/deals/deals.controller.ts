import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DealsService } from './deals.service';

@Controller('deals')
export class DealsController {
  constructor(private readonly dealsService: DealsService) { }

  @Post()
  async create(@Body() body: any) {
    const createdDeal = await this.dealsService.create(body);
    return true;
  }

  @Get()
  async findAll() {
    return this.dealsService.findAll();
  }
}
