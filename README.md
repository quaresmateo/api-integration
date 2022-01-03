# Documentação

Esplicação de tudo que foi feito:

# Endpoints

## Criar um pedido no Bling e MongoDB

URL

```jsx
POST {{base_url}}/deals
```

RAW

```jsx
{
    "current": {
        "id": 1,
        "person_name": "Sarah Nobrega",
        "status": "won",
        "title": "Negócio Pollo",
        "currency": "BRL",
        "value": 20000,
        "won_time": "2022-01-03 01:23:33"
    }
}
```

## Buscar pedidos no MongoDB por data ou valor

URL

```jsx
GET {{base_url}}/deals
```

PARAMS

| Key | Value |
| --- | --- |
| page | number |
| limit | number |
| group_by | string: “date” or “value” |

# Integração

A integração foi feita através  do [Webhook do Pipedrive](https://support.pipedrive.com/pt/article/webhooks).

Sempre que uma oportunidade for igual a ganho, o endpoint `POST /deals` será acessada pelo Pipedrive criando de maneira totalmente automatizada um pedido simultaneamente no MongoDB Atlas e nos pedidos do Bling.



## Instalação

```bash
$ npm install
```

## Rodando o app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```
