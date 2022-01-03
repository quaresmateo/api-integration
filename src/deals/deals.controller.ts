import { Controller, Get, Post, Body, Res, HttpStatus, Req } from '@nestjs/common';
import { Responses } from 'src/responses/responses.interface';
import { DealsService } from './deals.service';

@Controller('deals')
export class DealsController {
  constructor(private readonly dealsService: DealsService) { }

  /**
   * Controller responsável por receber requisições do Webhook do Pipedrive
   * @param body Corpo da requisição
   * consultar em https://pipedrive.readme.io/docs/guide-for-webhooks
   */
  @Post()
  async create(@Body() body: any, @Res() res: any) {
    try {
      const response: Responses = await this.dealsService.create(body);

      if (response.statusCode === HttpStatus.CREATED) {
        return res.status(HttpStatus.CREATED).json(response);
      }
      else if (response.statusCode === HttpStatus.BAD_REQUEST) {
        return res.status(HttpStatus.BAD_REQUEST).json(response);
      }
    }
    catch (error) {
      const response: Responses = {
        statusCode: HttpStatus.BAD_REQUEST,
        message: 'Deal has not been created',
        data: { error }
      };

      return res.status(HttpStatus.BAD_REQUEST).json(response);
    }
  }

  @Get()
  async findAll(@Req() req: any, @Res() res: any) {
    try {
      const response: Responses = await this.dealsService.findAll(req);

      if (response.statusCode === HttpStatus.OK) {
        return res.status(HttpStatus.OK).json(response);
      }
      else if (response.statusCode === HttpStatus.BAD_REQUEST) {
        return res.status(HttpStatus.BAD_REQUEST).json(response);
      }
    }
    catch (error) {
      const response: Responses = {
        statusCode: HttpStatus.BAD_REQUEST,
        message: 'Deal has not been found',
        data: { error }
      };

      return res.status(HttpStatus.BAD_REQUEST).json(response);
    }
  }
}
