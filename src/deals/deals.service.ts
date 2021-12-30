import { Body, Injectable } from '@nestjs/common';
import { DealDocument } from './entities/deal.entity';

@Injectable()
export class DealsService {
  create(body: DealDocument) {
    return `This action adds a new deal ${body}`;
  }

  findAll() {
    return `This action returns all deals`;
  }
}
