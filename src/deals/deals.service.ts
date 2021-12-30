import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Deal, DealDocument } from './entities/deal.entity';

@Injectable()
export class DealsService {
  constructor(@InjectModel(Deal.name) private dealModel: Model<DealDocument | any>,) { }

  async create(body: DealDocument): Promise<any> {
    const createdDeal = new this.dealModel(body);
    return createdDeal.save();
  }

  async findAll(): Promise<any> {
    return `This action returns all deals`;
  }
}
