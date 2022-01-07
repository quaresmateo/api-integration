# Integração

A integração foi feita através  do [Webhook do Pipedrive](https://support.pipedrive.com/pt/article/webhooks).

Sempre que uma oportunidade for igual ganho, o endpoint `POST /deals` será acessada pelo Pipedrive criando de maneira totalmente automatizada um pedido simultaneamente no MongoDB Atlas e nos pedidos do Bling. 

![Exemplo](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/a5692749-b89f-43dd-9207-a82c7f934d27/Experimentador_Flowchart.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220107%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220107T214034Z&X-Amz-Expires=86400&X-Amz-Signature=30c8b473293e68a9808976dd8989f17a34f3f90dc1e0c06ef50fd65a457289fb&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Experimentador%2520Flowchart.jpg%22&x-id=GetObject)

# Endpoints

Link para API Online https://link-api-teoian.herokuapp.com/deals

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

## **Instalação**

```bash
$ npm install
```

## **Rodando o app**

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:pro
```
