define({ "api": [  {    "type": "get",    "url": "/api/v1/logout",    "title": "Authenticate Logout",    "group": "Authenticate",    "version": "1.0.0",    "header": {      "fields": {        "Header": [          {            "group": "Header",            "type": "String",            "optional": false,            "field": "token",            "description": "<p>Users unique access-key.</p>"          }        ]      }    },    "examples": [      {        "title": "Example:",        "content": "curl http://localhost:3000/api/v1/logout \\\n-H 'Cache-Control: no-cache' \\\n-H 'Content-Type: application/x-www-form-urlencoded' \\",        "type": "curl"      }    ],    "success": {      "examples": [        {          "title": "Success",          "content": "HTTP/1.1 200 OK\n  [\n     {\n         \"title\": \"Alterado com sucesso!\",\n         \"message\": \"Conseguimos alterar o seu registro com sucesso!\"\n     }\n ]",          "type": "json"        }      ]    },    "error": {      "examples": [        {          "title": "Token Invalid",          "content": "HTTP/1.1 404 Bad Request\n[\n     {\n         \"title\": \"Token do Usuário\",\n         \"message\": \"Erro no token do usuário\"\n     }\n ]",          "type": "json"        },        {          "title": "Authenticate Internal error",          "content": "HTTP/1.1 500 Internal Server Error",          "type": "json"        }      ]    },    "filename": "./docs/authenticate.js",    "groupTitle": "Authenticate",    "name": "GetApiV1Logout"  },  {    "type": "get",    "url": "/api/v1/me",    "title": "Authenticate Me",    "group": "Authenticate",    "version": "1.0.0",    "header": {      "fields": {        "Header": [          {            "group": "Header",            "type": "String",            "optional": false,            "field": "token",            "description": "<p>Users unique access-key.</p>"          }        ]      }    },    "examples": [      {        "title": "Example:",        "content": "curl http://localhost:3000/api/v1/me \\\n-H 'Cache-Control: no-cache' \\\n-H 'Content-Type: application/x-www-form-urlencoded' \\\n-d 'email=higordiegoti@gmail.com&password=123456'",        "type": "curl"      }    ],    "success": {      "examples": [        {          "title": "Success",          "content": "HTTP/1.1 200 OK\n   {\n     \"_id\": \"5aad355a8489d46d8168582c\",\n     \"name\": \"codecup\",\n     \"email\": \"codecup@gmail.com\",\n     \"password\": \"e10adc3949ba59abbe56e057f20f883e\",\n     \"__v\": 0,\n     \"updatedAt\": \"2018-03-17T17:09:29.974Z\",\n     \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YWFkMzU1YTg0ODlkNDZkODE2ODU4MmMiLCJuYW1lIjoiY29kZWN1cCIsImVtYWlsIjoiY29kZWN1cEBnbWFpbC5jb20iLCJpYXQiOjE1MjEzMDY1Njl9.4zHwdSuyz9qvNXPsusZIcv6vGGKqAgFnUvDSRimRCdk\",\n     \"gcm\": \"\",\n     \"avatar\": \"\"\n }",          "type": "json"        }      ]    },    "error": {      "examples": [        {          "title": "Token Invalid",          "content": "HTTP/1.1 404 Bad Request\n[\n     {\n         \"title\": \"Token do Usuário\",\n         \"message\": \"Erro no token do usuário\"\n     }\n ]",          "type": "json"        },        {          "title": "Authenticate Internal error",          "content": "HTTP/1.1 500 Internal Server Error",          "type": "json"        }      ]    },    "filename": "./docs/authenticate.js",    "groupTitle": "Authenticate",    "name": "GetApiV1Me"  },  {    "type": "post",    "url": "/api/v1/authenticate",    "title": "Authenticate",    "group": "Authenticate",    "version": "1.0.0",    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "email",            "description": "<p>Authenticate email</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "password",            "description": "<p>Authenticate password</p>"          }        ]      },      "examples": [        {          "title": "Success",          "content": "HTTP/1.1 200 OK\n     {\n         \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YWFkMzU1YTg0ODlkNDZkODE2ODU4MmMiLCJuYW1lIjoiY29kZWN1cCIsImVtYWlsIjoiY29kZWN1cEBnbWFpbC5jb20iLCJpYXQiOjE1MjEzMDY1Njl9.4zHwdSuyz9qvNXPsusZIcv6vGGKqAgFnUvDSRimRCdk\"\n     }",          "type": "json"        }      ]    },    "examples": [      {        "title": "Example:",        "content": "curl -X POST  http://localhost:4000/api/v1/authenticate \\\n-H 'Cache-Control: no-cache' \\\n-H 'Content-Type: application/x-www-form-urlencoded' \\\n-d 'email=higordiegoti@gmail.com&password=123456'",        "type": "curl"      }    ],    "error": {      "examples": [        {          "title": "Empty Body",          "content": "HTTP/1.1 404 Bad Request\n [\n     {\n         \"location\": \"params\",\n         \"param\": \"email\",\n         \"msg\": {\n             \"title\": \"Email\",\n             \"message\": \"Email é requerido!\"\n         }\n     },\n     {\n         \"location\": \"params\",\n         \"param\": \"password\",\n         \"msg\": {\n             \"title\": \"Senha\",\n             \"message\": \"Senha é requerido!\"\n         }\n     }\n ]",          "type": "json"        },        {          "title": "Authenticate Internal error",          "content": "HTTP/1.1 500 Internal Server Error",          "type": "json"        }      ]    },    "filename": "./docs/authenticate.js",    "groupTitle": "Authenticate",    "name": "PostApiV1Authenticate"  },  {    "type": "delete",    "url": "/api/v1/user/:_id",    "title": "Delete User",    "group": "User",    "version": "1.0.0",    "header": {      "fields": {        "Header": [          {            "group": "Header",            "type": "String",            "optional": false,            "field": "token",            "description": "<p>Users unique access-key.</p>"          }        ]      }    },    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "_id",            "optional": false,            "field": "_id",            "description": "<p>User _id</p>"          }        ]      }    },    "examples": [      {        "title": "Example:",        "content": "curl -X DELETE  http://localhost:4000/api/v1/user/5aa59832aa1c5a1c53c70056 \\\n-H 'Cache-Control: no-cache' \\\n-H 'Content-Type: application/x-www-form-urlencoded'",        "type": "curl"      }    ],    "success": {      "examples": [        {          "title": "Success",          "content": "HTTP/1.1 200 OK\n [\n     {\n         \"title\": \"Deletado\",\n         \"message\": \"Deletado com Sucesso!\"\n     }\n ]",          "type": "json"        }      ]    },    "error": {      "examples": [        {          "title": "Id Invalid",          "content": "HTTP/1.1 404 Bad Request\n [\n     {\n         \"title\": \"Id\",\n         \"message\": \"Id invalido!\"\n     }\n ]",          "type": "json"        },        {          "title": "Create Employees error",          "content": "HTTP/1.1 500 Internal Server Error",          "type": "json"        }      ]    },    "filename": "./docs/user.js",    "groupTitle": "User",    "name": "DeleteApiV1User_id"  },  {    "type": "get",    "url": "/api/v1/user",    "title": "Find All User",    "group": "User",    "header": {      "fields": {        "Header": [          {            "group": "Header",            "type": "String",            "optional": false,            "field": "token",            "description": "<p>Users unique access-key.</p>"          }        ]      }    },    "version": "1.0.0",    "examples": [      {        "title": "Example:",        "content": "curl  http://localhost:4000/api/v1/user\n-H 'Cache-Control: no-cache' \\\n-H 'Content-Type: application/x-www-form-urlencoded'",        "type": "curl"      }    ],    "success": {      "examples": [        {          "title": "Success",          "content": "HTTP/1.1 200 OK\n[\n     {\n         \"__v\": 0,\n         \"_id\": \"5aa59832aa1c5a1c53c70056\",\n         \"email\": \"higordiegoti@gmail.com\",\n         \"name\": \"higor\",\n         \"password\": \"e10adc3949ba59abbe56e057f20f883e\"\n     }\n ]",          "type": "json"        }      ]    },    "error": {      "examples": [        {          "title": "Empty Register",          "content": "HTTP/1.1 404 Bad Request\n[\n     {\n         \"message\": \"Não conseguimos retornar o que procura!\",\n         \"title\": \"Error em Procurar\"\n     }\n ]",          "type": "json"        },        {          "title": "Find All error",          "content": "HTTP/1.1 500 Internal Server Error",          "type": "json"        }      ]    },    "filename": "./docs/user.js",    "groupTitle": "User",    "name": "GetApiV1User"  },  {    "type": "get",    "url": "/api/v1/user/:_id",    "title": "Find One User",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "_id",            "optional": false,            "field": "_id",            "description": "<p>User _id</p>"          }        ]      }    },    "header": {      "fields": {        "Header": [          {            "group": "Header",            "type": "String",            "optional": false,            "field": "token",            "description": "<p>Users unique access-key.</p>"          }        ]      }    },    "version": "1.0.0",    "group": "User",    "examples": [      {        "title": "Example:",        "content": "curl  http://localhost:4000/api/v1/user/5aa59832aa1c5a1c53c70056 \\\n-H 'Cache-Control: no-cache' \\\n-H 'Content-Type: application/x-www-form-urlencoded'",        "type": "curl"      }    ],    "success": {      "examples": [        {          "title": "Success",          "content": "HTTP/1.1 200 OK\n {\n     \"__v\": 0,\n     \"_id\": \"5aa59832aa1c5a1c53c70056\",\n     \"email\": \"higordiegoti@gmail.com\",\n     \"name\": \"higor\",\n     \"password\": \"e10adc3949ba59abbe56e057f20f883e\"\n }",          "type": "json"        }      ]    },    "error": {      "examples": [        {          "title": "Id Invalid",          "content": "HTTP/1.1 404 Bad Request\n[\n     {\n         \"title\": \"Id\",\n         \"message\": \"Id invalido!\"\n     }\n ]",          "type": "json"        },        {          "title": "Find One error",          "content": "HTTP/1.1 500 Internal Server Error",          "type": "json"        }      ]    },    "filename": "./docs/user.js",    "groupTitle": "User",    "name": "GetApiV1User_id"  },  {    "type": "post",    "url": "/api/v1/user",    "title": "Create User",    "group": "User",    "version": "1.0.0",    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "name",            "description": "<p>User name</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "email",            "description": "<p>User email</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "password",            "description": "<p>User password</p>"          }        ]      },      "examples": [        {          "title": "Success",          "content": "HTTP/1.1 200 OK\n     {\n         \"__v\": 0,\n         \"_id\": \"5aa59832aa1c5a1c53c70056\",\n         \"email\": \"higordiegoti@gmail.com\",\n         \"name\": \"higor\",\n         \"password\": \"e10adc3949ba59abbe56e057f20f883e\"\n     }",          "type": "json"        }      ]    },    "examples": [      {        "title": "Example:",        "content": "curl -X POST  http://localhost:4000/api/v1/user \\\n-H 'Cache-Control: no-cache' \\\n-H 'Content-Type: application/x-www-form-urlencoded' \\\n-d 'name=higor&email=higordiegoti@gmail.com&password=123456'",        "type": "curl"      }    ],    "error": {      "examples": [        {          "title": "Empty Body",          "content": "HTTP/1.1 404 Bad Request\n [\n     {\n         \"location\": \"params\",\n         \"param\": \"email\",\n         \"msg\": {\n             \"title\": \"Email\",\n             \"message\": \"Email é requerido!\"\n         }\n     },\n     {\n         \"location\": \"params\",\n         \"param\": \"password\",\n         \"msg\": {\n             \"title\": \"Senha\",\n             \"message\": \"Senha é requerido!\"\n         }\n     },\n     {\n         \"location\": \"params\",\n         \"param\": \"name\",\n         \"msg\": {\n             \"title\": \"Nome\",\n             \"message\": \"Nome é requerido!\"\n         }\n     }\n ]",          "type": "json"        },        {          "title": "Create Employees error",          "content": "HTTP/1.1 500 Internal Server Error",          "type": "json"        }      ]    },    "filename": "./docs/user.js",    "groupTitle": "User",    "name": "PostApiV1User"  },  {    "type": "put",    "url": "/api/v1/user/:_id",    "title": "Update User",    "group": "User",    "header": {      "fields": {        "Header": [          {            "group": "Header",            "type": "String",            "optional": false,            "field": "token",            "description": "<p>Users unique access-key.</p>"          }        ]      }    },    "version": "1.0.0",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "_id",            "optional": false,            "field": "_id",            "description": "<p>User _id</p>"          }        ]      }    },    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "name",            "description": "<p>User name Optional</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "email",            "description": "<p>User email Optional</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "password",            "description": "<p>User password Optional</p>"          }        ]      },      "examples": [        {          "title": "Success",          "content": "HTTP/1.1 200 OK\n [\n     {\n         \"title\": \"Alterado com sucesso!\",\n         \"message\": \"Conseguimos alterar o seu registro com sucesso!\"\n     }\n ]",          "type": "json"        }      ]    },    "examples": [      {        "title": "Example:",        "content": "curl -X PUT  http://localhost:4000/api/v1/user/5aa59832aa1c5a1c53c70056 \\\n-H 'Cache-Control: no-cache' \\\n-H 'Content-Type: application/x-www-form-urlencoded' \\\n-d 'name=higor2'",        "type": "curl"      }    ],    "error": {      "examples": [        {          "title": "Id Invalid",          "content": "HTTP/1.1 404 Bad Request\n [\n     {\n         \"title\": \"Id\",\n         \"message\": \"Id invalido!\"\n     }\n ]",          "type": "json"        },        {          "title": "Create Employees error",          "content": "HTTP/1.1 500 Internal Server Error",          "type": "json"        }      ]    },    "filename": "./docs/user.js",    "groupTitle": "User",    "name": "PutApiV1User_id"  },  {    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "optional": false,            "field": "varname1",            "description": "<p>No type.</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "varname2",            "description": "<p>With type.</p>"          }        ]      }    },    "type": "",    "url": "",    "version": "0.0.0",    "filename": "./doc-html/main.js",    "group": "_Users_HigorDiego_Documents_node_seed_mongodb_doc_html_main_js",    "groupTitle": "_Users_HigorDiego_Documents_node_seed_mongodb_doc_html_main_js",    "name": ""  }] });
