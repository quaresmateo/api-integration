export interface Pedido {
  '?xml version=\"1.0\" encoding=\"iso-8859-1\"?': 'string';
  pedido: {
    cliente: {
      nome: string;
    }

    tranporte: {
      servico: string;
    };

    itens: {
      item: {
        codigo: number;
        descricao: string;
        qtde: number;
        vlr_unit: number;
        vlr: number;
      }
    };
  };

}