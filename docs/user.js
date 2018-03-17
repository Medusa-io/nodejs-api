/**
    * @api {post} /api/v1/user Create User
    * @apiGroup User
    * @apiVersion 1.0.0
    * @apiSuccess {String} name User name
    * @apiSuccess {String} email User email
    * @apiSuccess {String} password User password
    * @apiExample {curl} Example:
        curl -X POST  http://localhost:4000/api/v1/user \
        -H 'Cache-Control: no-cache' \
        -H 'Content-Type: application/x-www-form-urlencoded' \
        -d 'name=higor&email=higordiegoti@gmail.com&password=123456'
    * @apiSuccessExample {json} Success
    *    HTTP/1.1 200 OK
        {
            "__v": 0,
            "_id": "5aa59832aa1c5a1c53c70056",
            "email": "higordiegoti@gmail.com",
            "name": "higor",
            "password": "e10adc3949ba59abbe56e057f20f883e"
        }
    * @apiErrorExample {json} Empty Body
    *    HTTP/1.1 404 Bad Request
    [
        {
            "location": "params",
            "param": "email",
            "msg": {
                "title": "Email",
                "message": "Email é requerido!"
            }
        },
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
    * @apiErrorExample {json} Create User error
    *    HTTP/1.1 500 Internal Server Error
**/

/**
   * @api {get} /api/v1/user Find All User
   * @apiGroup User
   * @apiHeader {String}  token Users unique access-key.
   * @apiVersion 1.0.0
   * @apiExample {curl} Example:
    curl  http://localhost:4000/api/v1/user
    -H 'Cache-Control: no-cache' \
    -H 'Content-Type: application/x-www-form-urlencoded' \
    -H 'token: seu token aqui'
   * @apiSuccessExample {json} Success
   *    HTTP/1.1 200 OK
   [
        {
            "__v": 0,
            "_id": "5aa59832aa1c5a1c53c70056",
            "email": "higordiegoti@gmail.com",
            "name": "higor",
            "password": "e10adc3949ba59abbe56e057f20f883e"
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
   * @api {get} /api/v1/user/:_id Find One User
   * @apiParam {_id} _id User _id
   * @apiHeader {String}  token Users unique access-key.
   * @apiVersion 1.0.0
   * @apiGroup User
   * @apiExample {curl} Example:
    curl  http://localhost:4000/api/v1/user/5aa59832aa1c5a1c53c70056 \
    -H 'Cache-Control: no-cache' \
    -H 'Content-Type: application/x-www-form-urlencoded' \
    -H 'token: seu token aqui'
   * @apiSuccessExample {json} Success
   *    HTTP/1.1 200 OK
    {
        "__v": 0,
        "_id": "5aa59832aa1c5a1c53c70056",
        "email": "higordiegoti@gmail.com",
        "name": "higor",
        "password": "e10adc3949ba59abbe56e057f20f883e"
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
    * @api {put} /api/v1/user/:_id Update User
    * @apiGroup User
    * @apiHeader {String}  token Users unique access-key.
    * @apiVersion 1.0.0
    * @apiParam {_id} _id User _id
    * @apiSuccess {String} name User name Optional
    * @apiSuccess {String} email User email Optional
    * @apiSuccess {String} password User password Optional
    * @apiExample {curl} Example:
        curl -X PUT  http://localhost:4000/api/v1/user/5aa59832aa1c5a1c53c70056 \
        -H 'Cache-Control: no-cache' \
        -H 'Content-Type: application/x-www-form-urlencoded' \
        -H 'token: seu token aqui' \
        -d 'name=higor2'

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
    * @apiErrorExample {json} Update User error
    *    HTTP/1.1 500 Internal Server Error
**/

/**
    * @api {delete} /api/v1/user/:_id Delete User
    * @apiGroup User
    * @apiVersion 1.0.0
    * @apiHeader {String}  token Users unique access-key.
    * @apiParam {_id} _id User _id
    * @apiExample {curl} Example:
        curl -X DELETE  http://localhost:4000/api/v1/user/5aa59832aa1c5a1c53c70056 \
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