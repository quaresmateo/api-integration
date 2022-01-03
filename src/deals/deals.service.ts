import { HttpStatus, Injectable, Res } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BlingService } from 'src/bling/bling.service';
import { Responses } from 'src/responses/responses.interface';
import { Deal, DealDocument } from './entities/deal.entity';

@Injectable()
export class DealsService {
  constructor(
    @InjectModel(Deal.name) private dealModel: Model<DealDocument | any>,
    private blingService: BlingService
  ) { }

  async create(body: any): Promise<any> {
    let response: Responses;
    try {
      const { current } = body;

      const deal: Deal = {
        id: current.id,
        person_name: current.person_name,
        title: current.title,
        status: current.status,
        value: current.value,
        currency: current.currency,
        won_time: current.won_time,
      };

      if (deal.status === 'won') {
        const createdDeal = new this.dealModel(deal);
        await createdDeal.save();
        await this.blingService.create(deal);

        response = {
          statusCode: HttpStatus.CREATED,
          message: 'Deal has been created',
          data: { createdDeal },
        };

        return response;
      }

      response = {
        statusCode: HttpStatus.BAD_REQUEST,
        message: 'Deal has not been created',
        data: { info: 'Deal status is not "won"' },
      };

      return response;
    } catch (error) {
      let response: Responses = {
        statusCode: HttpStatus.BAD_REQUEST,
        message: 'Deal has not been created',
        data: { error }
      };

      return response;
    }
  }

  async findAll(@Res() req: any): Promise<any> {
    try {
      let response: Responses;

      const { page = 1, limit = 10, group_by = 'date' } = req.query;

      const deals: Deal[] = await this.dealModel.aggregate([
        {
          $sort: {
            [group_by]: -1,
          },
        },
        {
          $group: {
            _id: {
              [group_by]: group_by === 'date' ?
                { $dateToString: { format: '%Y-%m-%d', date: '$won_time' } }
                : '$value',
            },
            count: { $sum: 1 },
            deals: { $push: '$$ROOT' },
          },
        },
        {
          $sort: {
            _id: -1,
          },
        },
        {
          $skip: (page - 1) * limit,
        },
        {
          $limit: limit,
        },
      ]);

      response = {
        statusCode: HttpStatus.OK,
        message: 'Deals has been found',
        data: { deals },
      };

      return response;
    }
    catch (error) {
      let response: Responses = {
        statusCode: HttpStatus.BAD_REQUEST,
        message: 'Deal has not been found',
        data: { error }
      };

      return response;
    }
  }
}