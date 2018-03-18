/**
    * @api {post} /api/v1/employee/validate Employee Validate
    * @apiGroup Employee
    * @apiVersion 1.0.0
    * @apiHeader {String}  token Users unique access-key.
    * @apiSuccess {String} password Employee password
    * @apiExample {curl} Example:
        curl -X POST  http://localhost:3000/api/v1/employee/validate \
        -H 'Cache-Control: no-cache' \
        -H 'token: seu token aqui' \
        -H 'Content-Type: application/x-www-form-urlencoded' \
        -d 'password=123456'
    * @apiSuccessExample {json} Success
    *    HTTP/1.1 200 OK
       {
            "_id": "5aae02a72c324ec239b81506",
            "updatedAt": "2018-03-18T06:09:43.088Z",
            "createdAt": "2018-03-18T06:09:43.088Z",
            "name": "teste",
            "password": "e10adc3949ba59abbe56e057f20f883e",
            "__v": 0,
            "avatar": ""
        }
    * @apiErrorExample {json} Empty Body
    *    HTTP/1.1 404 Bad Request
    [
        {
            "location": "params",
            "param": "password",
            "msg": {
                "title": "Senha",
                "message": "Senha é requerido!"
            }
        }
    ]
    * @apiErrorExample {json} Create Employee error
    *    HTTP/1.1 500 Internal Server Error
**/

/**
    * @api {post} /api/v1/employee Employee Create
    * @apiGroup Employee
    * @apiVersion 1.0.0
    * @apiHeader {String}  token Users unique access-key.
    * @apiSuccess {String} name Employee name
    * @apiSuccess {String} password Employee password
    * @apiExample {curl} Example:
        curl -X POST  http://localhost:3000/api/v1/employee \
        -H 'Cache-Control: no-cache' \
        -H 'token: seu token aqui' \
        -H 'Content-Type: application/x-www-form-urlencoded' \
        -d 'name=fulano&password=123456'
    * @apiSuccessExample {json} Success
    *    HTTP/1.1 200 OK
       {
            "_id": "5aae02a72c324ec239b81506",
            "updatedAt": "2018-03-18T06:09:43.088Z",
            "createdAt": "2018-03-18T06:09:43.088Z",
            "name": "teste",
            "password": "e10adc3949ba59abbe56e057f20f883e",
            "__v": 0,
            "avatar": ""
        }
    * @apiErrorExample {json} Empty Body
    *    HTTP/1.1 404 Bad Request
    [
        {
            "location": "params",
            "param": "password",
            "msg": {
                "title": "Senha",
                "message": "Senha é requerido!"
            }
        },
        {
            "location": "params",
            "param": "name",
            "msg": {
                "title": "Nome",
                "message": "Nome é requerido!"
            }
        }
    ]
    * @apiErrorExample {json} Create Employee error
    *    HTTP/1.1 500 Internal Server Error
**/

/**
   * @api {get} /api/v1/employee Find All Employee
   * @apiGroup Employee
   * @apiHeader {String}  token Users unique access-key.
   * @apiVersion 1.0.0
   * @apiExample {curl} Example:
    curl  http://localhost:4000/api/v1/employee
    -H 'Cache-Control: no-cache' \
    -H 'Content-Type: application/x-www-form-urlencoded' \
    -H 'token: seu token aqui'
   * @apiSuccessExample {json} Success
   *    HTTP/1.1 200 OK
   [
        {
            "_id": "5aae02a72c324ec239b81506",
            "updatedAt": "2018-03-18T06:09:43.088Z",
            "createdAt": "2018-03-18T06:09:43.088Z",
            "name": "teste",
            "password": "e10adc3949ba59abbe56e057f20f883e",
            "__v": 0,
            "avatar": ""
        },
        {
            "_id": "5aae03602c324ec239b81507",
            "updatedAt": "2018-03-18T06:12:48.429Z",
            "createdAt": "2018-03-18T06:12:48.429Z",
            "name": "teste",
            "password": "e10adc3949ba59abbe56e057f20f883e",
            "__v": 0,
            "avatar": ""
        }
    ]

   * @apiErrorExample {json} Empty Register
   *    HTTP/1.1 404 Bad Request
   [
        {
            "message": "Não conseguimos retornar o que procura!",
            "title": "Error em Procurar"
        }
    ]
   * @apiErrorExample {json} Find All error
   *    HTTP/1.1 500 Internal Server Error
**/

/**
   * @api {get} /api/v1/employee/:_id Find One Employee
   * @apiParam {_id} _id Employee _id
   * @apiHeader {String}  token Users unique access-key.
   * @apiVersion 1.0.0
   * @apiGroup Employee
   * @apiExample {curl} Example:
    curl  http://localhost:4000/api/v1/employee/5aae03602c324ec239b81507 \
    -H 'Cache-Control: no-cache' \
    -H 'Content-Type: application/x-www-form-urlencoded' \
    -H 'token: seu token aqui'
   * @apiSuccessExample {json} Success
   *    HTTP/1.1 200 OK
    {
        "_id": "5aae03602c324ec239b81507",
        "updatedAt": "2018-03-18T06:12:48.429Z",
        "createdAt": "2018-03-18T06:12:48.429Z",
        "name": "teste",
        "password": "e10adc3949ba59abbe56e057f20f883e",
        "__v": 0,
        "avatar": ""
    }
   * @apiErrorExample {json} Id Invalid
   *    HTTP/1.1 404 Bad Request
   [
        {
            "title": "Id",
            "message": "Id invalido!"
        }
    ]
   * @apiErrorExample {json} Find One error
   *    HTTP/1.1 500 Internal Server Error
**/

/**
    * @api {put} /api/v1/employee/:_id Update Employee
    * @apiGroup Employee
    * @apiHeader {String}  token Users unique access-key.
    * @apiVersion 1.0.0
    * @apiParam {_id} _id Employee _id
    * @apiSuccess {String} name Employee name Optional
    * @apiSuccess {String} password Employee password Optional
    * @apiExample {curl} Example:
        curl -X PUT  http://localhost:4000/api/v1/employee/5aa59832aa1c5a1c53c70056 \
        -H 'Cache-Control: no-cache' \
        -H 'Content-Type: application/x-www-form-urlencoded' \
        -H 'token: seu token aqui' \
        -d 'name=employee'

    * @apiSuccessExample {json} Success
    *    HTTP/1.1 200 OK
    [
        {
            "title": "Alterado com sucesso!",
            "message": "Conseguimos alterar o seu registro com sucesso!"
        }
    ]
    * @apiErrorExample {json} Id Invalid
    *    HTTP/1.1 404 Bad Request
    [
        {
            "title": "Id",
            "message": "Id invalido!"
        }
    ]
    * @apiErrorExample {json} Update Employee error
    *    HTTP/1.1 500 Internal Server Error
**/

/**
    * @api {delete} /api/v1/employee/:_id Delete Employee
    * @apiGroup Employee
    * @apiVersion 1.0.0
    * @apiHeader {String}  token Users unique access-key.
    * @apiParam {_id} _id Employee _id
    * @apiExample {curl} Example:
        curl -X DELETE  http://localhost:4000/api/v1/employee/5aa59832aa1c5a1c53c70056 \
        -H 'Cache-Control: no-cache' \
        -H 'Content-Type: application/x-www-form-urlencoded' \
        -H 'token: seu token aqui'
    * @apiSuccessExample {json} Success
    *    HTTP/1.1 200 OK
    [
        {
            "title": "Deletado",
            "message": "Deletado com Sucesso!"
        }
    ]
    * @apiErrorExample {json} Id Invalid
    *    HTTP/1.1 404 Bad Request
    [
        {
            "title": "Id",
            "message": "Id invalido!"
        }
    ]
    * @apiErrorExample {json} Delete User error
    *    HTTP/1.1 500 Internal Server Error
**/
