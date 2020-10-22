define({ "api": [
  {
    "type": "get",
    "url": "/users",
    "title": "",
    "version": "0.1.0",
    "group": "Users",
    "description": "<p>Retorna todos os funcionários</p>",
    "permission": [
      {
        "name": "Coord"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n  \"message\": \"Requisição efetuada com sucesso.\",\n  \"data\": {\n    \"total\": n,\n    \"users\": [\n      {\n        \"id\": 1,\n        \"name\": \"Yan Almeida Garcia\",\n        \"about\": \"Apenas um teste!\",\n        \"sector\": \"Direção\"\n      },\n        ...\n    ]\n  },\n  \"metadata\": {},\n  \"status\": 200\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./src/controllers/users.js",
    "groupTitle": "Users",
    "name": "GetUsers",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>Dado(s) solicitado(s) não encontrado(s).</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UnauthorizedJwtExpired",
            "description": "<p>JSON Web Token expirado.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UnauthorizedSector",
            "description": "<p>Decoded token com dados inválidos.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UnauthorizedToken",
            "description": "<p>Token não passador - Authorization.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error 404",
          "content": "HTTP/1.1 (404) Not Found\n{\n  \"message\": \"Não encontrado.\"\n  \"metadata\": {},\n  \"status\": 404\n}",
          "type": "json"
        },
        {
          "title": "Expired",
          "content": "HTTP/1.1 (401) Unauthorized Jwt\n{\n  \"message\": \"Invalid token - jwt expired\",\n  \"data\": null,\n  \"metadata\": {},\n  \"status\": 401\n}",
          "type": "json"
        },
        {
          "title": "Sector",
          "content": "HTTP/1.1 (401) Unauthorized Decoded Sector\n{\n  \"message\": \"Invalid token - sector\",\n  \"data\": null,\n  \"metadata\": {},\n  \"status\": 401\n}",
          "type": "json"
        },
        {
          "title": "Token",
          "content": "HTTP/1.1 (401) Unauthorized Token\n{\n  \"message\": \"Invalid token - token\",\n  \"data\": null,\n  \"metadata\": {},\n  \"status\": 401\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/users/:id_user",
    "title": "",
    "version": "0.1.0",
    "group": "Users",
    "description": "<p>Retorna um funcionário específico</p>",
    "permission": [
      {
        "name": "Coord"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>funcionário.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n  \"message\": \"Requisição efetuada com sucesso.\",\n  \"data\": {\n   \"user\": [\n     {\n       \"id\": 1,\n       \"name\": \"Yan Almeida Garcia\",\n       \"email\": \"yan@almeida.com\",\n       \"cpf\": \"000.000.000-00\",\n       \"phone\": \"(00) 91234-5678\",\n       \"sector\": \"Direção\"\n       \"gender\": \"Não informar\"\n     },\n   ]\n },\n \"metadata\": {},\n \"status\": 200\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./src/controllers/users.js",
    "groupTitle": "Users",
    "name": "GetUsersId_user",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>Dado(s) solicitado(s) não encontrado(s).</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UnauthorizedJwtExpired",
            "description": "<p>JSON Web Token expirado.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UnauthorizedSector",
            "description": "<p>Decoded token com dados inválidos.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UnauthorizedToken",
            "description": "<p>Token não passador - Authorization.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error 404",
          "content": "HTTP/1.1 (404) Not Found\n{\n  \"message\": \"Não encontrado.\"\n  \"metadata\": {},\n  \"status\": 404\n}",
          "type": "json"
        },
        {
          "title": "Expired",
          "content": "HTTP/1.1 (401) Unauthorized Jwt\n{\n  \"message\": \"Invalid token - jwt expired\",\n  \"data\": null,\n  \"metadata\": {},\n  \"status\": 401\n}",
          "type": "json"
        },
        {
          "title": "Sector",
          "content": "HTTP/1.1 (401) Unauthorized Decoded Sector\n{\n  \"message\": \"Invalid token - sector\",\n  \"data\": null,\n  \"metadata\": {},\n  \"status\": 401\n}",
          "type": "json"
        },
        {
          "title": "Token",
          "content": "HTTP/1.1 (401) Unauthorized Token\n{\n  \"message\": \"Invalid token - token\",\n  \"data\": null,\n  \"metadata\": {},\n  \"status\": 401\n}",
          "type": "json"
        }
      ]
    }
  }
] });
