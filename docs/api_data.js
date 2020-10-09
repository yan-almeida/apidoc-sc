define({ "api": [
  {
    "type": "get",
    "url": "/user/:id",
    "title": "Read data of a User",
    "version": "0.2.0",
    "name": "GetUser",
    "group": "User",
    "permission": [
      {
        "name": "admin",
        "title": "This title is visible in version 0.1.0 and 0.2.0",
        "description": ""
      }
    ],
    "description": "<p>Here you can describe the function. Multilines are possible.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The Users-ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The Users-ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "name",
            "description": "<p>Fullname of the User.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The <code>id</code> of the User was not found.</p>"
          }
        ]
      }
    },
    "filename": "./node_modules/apidoc/example/_apidoc.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/user/:id",
    "title": "Read data of a User",
    "version": "0.1.0",
    "name": "GetUser",
    "group": "User",
    "permission": [
      {
        "name": "admin",
        "title": "This title is visible in version 0.1.0 and 0.2.0",
        "description": ""
      }
    ],
    "description": "<p>Here you can describe the function. Multilines are possible.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The Users-ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The Users-ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "name",
            "description": "<p>Fullname of the User.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The error description text in version 0.1.0.</p>"
          }
        ]
      }
    },
    "filename": "./node_modules/apidoc/example/_apidoc.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/user",
    "title": "Create a User",
    "version": "0.2.0",
    "name": "PostUser",
    "group": "User",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>In this case &quot;apiErrorStructure&quot; is defined and used. Define blocks with params that will be used in several functions, so you dont have to rewrite them.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the User.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The Users-ID.</p>"
          }
        ]
      }
    },
    "filename": "./node_modules/apidoc/example/_apidoc.js",
    "groupTitle": "User",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NoAccessRight",
            "description": "<p>Only authenticated Admins can access the data.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNameTooShort",
            "description": "<p>Minimum of 5 characters required.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response (example):",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"error\": \"UserNameTooShort\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/users/",
    "title": "",
    "version": "0.0.1",
    "group": "Users",
    "description": "<p>Retorna todos os funcionários</p>",
    "success": {
      "examples": [
        {
          "title": "Sucess",
          "content": "HTTP/1.1 200 OK\n{\n  \"message\": \"Requisição efetuada com sucesso.\",\n  \"data\": {\n    \"total\": n,\n    \"users\": [\n      {\n        \"id\": 1,\n        \"name\": \"Yan Almeida Garcia\",\n        \"about\": \"Apenas um teste!\",\n        \"sector\": \"Direção\"\n      },\n      {\n        ...\n      }\n    ]\n  },\n  \"metadata\": {},\n  \"status\": 200\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./_apidoc.js",
    "groupTitle": "Users",
    "name": "GetUsers",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Error",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"message\": \"Não encontrado.\"\n  \"metadata\": {},\n  \"status\": 404\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/users/:id_usuario",
    "title": "",
    "version": "0.0.1",
    "group": "Users",
    "description": "<p>Retorna um funcionário específico</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id_usuario",
            "description": "<p>funcionário único.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Sucesso",
          "content": "HTTP/1.1 200 OK\n{\n  \"message\": \"Requisição efetuada com sucesso.\",\n  \"data\": {\n   \"user\": [\n     {\n       \"id\": 1,\n       \"name\": \"Yan Almeida Garcia\",\n       \"email\": \"yan@almeida.com\",\n       \"cpf\": \"000.000.000-00\",\n       \"phone\": \"(00) 91234-5678\",\n       \"sector\": \"Direção\"\n       \"gender\": \"Não informar\"\n     },\n   ]\n },\n \"metadata\": {},\n \"status\": 200\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./_apidoc.js",
    "groupTitle": "Users",
    "name": "GetUsersId_usuario",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Error",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"message\": \"Não encontrado.\"\n  \"metadata\": {},\n  \"status\": 404\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/users/",
    "title": "",
    "version": "0.0.1",
    "group": "Users",
    "description": "<p>Cria um novo funcionário</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "Nome",
            "description": "<p>Nome do funcionário.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "Setor",
            "description": "<p>Setor do funcionário (definirá as permissões dentro da aplicação).</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "E-mail",
            "description": "<p>E-mail do(s) funcionário(s).</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "CPF",
            "description": "<p>CPF (único por funcionário).</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "Sexo",
            "description": "<p>Sexo do funcionário.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "Celular",
            "description": "<p>Telefone de contato dos funcionários.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Formato de requisição ():",
          "content": "{\n\"cpf_usuario\": \"000.000.000-00\",\n\"email_usuario\": \"yan@almeida.com\",\n\"nome_usuario\": \"Yan Almeida Garcia\",\n\"tel_usuario\": \"(00) 91234-5678\",\n\"setor_usuario\": 1,\n\"sexo_usuario\": 1\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Sucesso",
          "content": "HTTP/1.1 200 OK\n{\n  \"message\": \"Cadastro efetuado com sucesso.\",\n  \"data\": null,\n  \"metadata\": {},\n  \"status\": 200\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./_apidoc.js",
    "groupTitle": "Users",
    "name": "PostUsers",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "DataConflict",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Error",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"message\": \"Dado(s) já cadastrado(s).\"\n  \"metadata\": {},\n  \"status\": 500\n}",
          "type": "json"
        }
      ]
    }
  }
] });