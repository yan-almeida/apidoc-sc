define({ "api": [
  {
    "type": "get",
    "url": "/users",
    "title": "",
    "version": "0.0.1",
    "group": "Users",
    "description": "<p>Retorna todos os usuários</p>",
    "success": {
      "examples": [
        {
          "title": "Sucess",
          "content": "HTTP/1.1 200 OK\n{\n  \"message\": \"Requisição efetuada com sucesso.\",\n  \"data\": {\n    \"total\": 1,\n    \"users\": [\n      {\n        \"id\": 1,\n        \"name\": \"Yan Almeida Garcia\",\n        \"about\": \"Apenas um teste!\",\n        \"sector\": \"Direção\"\n      }\n    ]\n  },\n  \"metadata\": {},\n  \"status\": 200\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"message\": \"Não encontrado.\"\n  \"metadata\": {},\n  \"status\": 404\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./_apidoc.js",
    "groupTitle": "Users",
    "name": "GetUsers"
  },
  {
    "type": "get",
    "url": "/users/:id_usuario",
    "title": "",
    "version": "0.0.1",
    "group": "Users",
    "description": "<p>Retorna um usuário específico</p>",
    "success": {
      "examples": [
        {
          "title": "Sucesso",
          "content": "HTTP/1.1 200 OK\n{\n  \"message\": \"Requisição efetuada com sucesso.\",\n  \"data\": {\n   \"user\": [\n     {\n       \"id\": 1,\n       \"name\": \"Yan Almeida Garcia\",\n       \"email\": \"yan@almeida.com\",\n       \"cpf\": \"000.000.000-00\",\n       \"cellphone\": \"(00) 9 1234-5678\",\n       \"sector\": \"Direção\"\n       \"gender\": \"Não informar\"\n     },\n   ]\n },\n \"metadata\": {},\n \"status\": 200\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"message\": \"Não encontrado.\"\n  \"metadata\": {},\n  \"status\": 404\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./_apidoc.js",
    "groupTitle": "Users",
    "name": "GetUsersId_usuario"
  }
] });
