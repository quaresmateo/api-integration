import { HttpService } from "@nestjs/axios";
import { Injectable } from "@nestjs/common";
import { AxiosResponse } from 'axios';
import { firstValueFrom } from "rxjs";
import { Deal } from "src/deals/entities/deal.entity";
import { Pedido } from "./pedido.interface";
import { toXML } from "to-xml"

@Injectable()
export class BlingService {
  constructor(private httpService: HttpService) { }
  private readonly apiKey: string = process.env.BLING_API_KEY;

  create(deal: Deal): Promise<AxiosResponse<any>> {
    try {
      const apiUrl: string = 'https://bling.com.br/Api/v2/pedido/json'

      const pedidoObj: Pedido = {
        '?xml version="1.0" encoding="iso-8859-1"?': null,
        pedido: {
          cliente: {
            nome: deal.person_name
          },
          tranporte: {
            servico: 'digital'
          },
          itens: {
            item: {
              codigo: deal.id,
              descricao: deal.title,
              qtde: 1,
              vlr_unit: deal.value,
              vlr: deal.value
            }
          }
        }
      }

      const pedidoXml: string = toXML(pedidoObj);

      return firstValueFrom(this.httpService.post(`${apiUrl}?apikey=${this.apiKey}&xml=${pedidoXml}`))
    } catch (error) {
      return error
    }
  }
}
