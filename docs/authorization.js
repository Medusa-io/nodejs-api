/**
    * @api {post} /api/v1/authorization Create Authorization
    * @apiGroup Authorization
    * @apiVersion 1.0.0
    * @apiHeader {String}  token Users unique access-key.
    * @apiSuccess {String} status Authorization status
    * @apiSuccess {String} avatar Authorization avatar
    * @apiExample {curl} Example:
        curl -X POST  http://localhost:3000/api/v1/authorization \
        -H 'Cache-Control: no-cache' \
        -H 'Content-Type: application/x-www-form-urlencoded' \
        -H 'token: seu token aqui' \
        -d 'status=truee&avatar=123'
    * @apiSuccessExample {json} Success
    *    HTTP/1.1 200 OK
        {
            "__v": 0,
            "updatedAt": "2018-03-17T17:50:28.942Z",
            "createdAt": "2018-03-17T17:50:28.942Z",
            "status": true,
            "avatar": "123",
            "_id": "5aad5564b6ef497dfaa1174f"
        }
    * @apiErrorExample {json} Empty Body
    *    HTTP/1.1 404 Bad Request
    [
        {
            "location": "params",
            "param": "status",
            "msg": {
                "title": "Status",
                "message": "Status é requerido!"
            }
        },
        {
            "location": "params",
            "param": "avatar",
            "msg": {
                "title": "Avatar",
                "message": "Avatar é requerido!"
            }
        }
    ]
    * @apiErrorExample {json} Create Authorization error
    *    HTTP/1.1 500 Internal Server Error
**/

/**
   * @api {get} /api/v1/authorization Find All Authorization
   * @apiGroup Authorization
   * @apiHeader {String}  token Users unique access-key.
   * @apiVersion 1.0.0
   * @apiExample {curl} Example:
    curl  http://localhost:3000/api/v1/authorization
    -H 'Cache-Control: no-cache' \
    -H 'Content-Type: application/x-www-form-urlencoded' \
    -H 'token: seu token aqui'
   * @apiSuccessExample {json} Success
   *    HTTP/1.1 200 OK
   [
        {
            "__v": 0,
            "updatedAt": "2018-03-17T17:50:28.942Z",
            "createdAt": "2018-03-17T17:50:28.942Z",
            "status": true,
            "avatar": "123",
            "_id": "5aad5564b6ef497dfaa1174f"
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
   * @api {get} /api/v1/authorization/:_id Find One Authorization
   * @apiParam {_id} _id Authorization _id
   * @apiHeader {String}  token Users unique access-key.
   * @apiVersion 1.0.0
   * @apiGroup Authorization
   * @apiExample {curl} Example:
    curl  http://localhost:3000/api/v1/authorization/5aa59832aa1c5a1c53c70056 \
    -H 'Cache-Control: no-cache' \
    -H 'Content-Type: application/x-www-form-urlencoded' \
    -H 'token: seu token aqui'
   * @apiSuccessExample {json} Success
   *    HTTP/1.1 200 OK
     {
        "__v": 0,
        "updatedAt": "2018-03-17T17:50:28.942Z",
        "createdAt": "2018-03-17T17:50:28.942Z",
        "status": true,
        "avatar": "123",
        "_id": "5aad5564b6ef497dfaa1174f"
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
    * @api {put} /api/v1/authorization/:_id Update Authorization
    * @apiGroup Authorization
    * @apiHeader {String}  token Users unique access-key.
    * @apiVersion 1.0.0
    * @apiParam {_id} _id Authorization _id
    * @apiSuccess {String} status Authorization name Optional
    * @apiSuccess {String} avatar Authorization email Optional
    * @apiExample {curl} Example:
        curl -X PUT  http://localhost:3000/api/v1/authorization/5aa59832aa1c5a1c53c70056 \
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
    * @apiErrorExample {json} Update Employees error
    *    HTTP/1.1 500 Internal Server Error
**/

/**
    * @api {delete} /api/v1/authorization/:_id Delete Authorization
    * @apiGroup Authorization
    * @apiVersion 1.0.0
    * @apiHeader {String}  token Users unique access-key.
    * @apiParam {_id} _id Authorization _id
    * @apiExample {curl} Example:
        curl -X DELETE  http://localhost:3000/api/v1/authorization/5aa59832aa1c5a1c53c70056 \
        -H 'Cache-Control: no-cache' \
        -H 'token: seu token aqui' \
        -H 'Content-Type: application/x-www-form-urlencoded'
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
    * @apiErrorExample {json} Delete Authorization error
    *    HTTP/1.1 500 Internal Server Error
**/


/**
    * @api {delete} /api/v1/authorization/report Authorization Report
    * @apiGroup Authorization
    * @apiVersion 1.0.0
    * @apiHeader {String}  token Users unique access-key.
    * @apiExample {curl} Example:
        curl -X DELETE  http://localhost:3000/api/v1/authorization/report \
        -H 'Cache-Control: no-cache' \
        -H 'token: seu token aqui' \
        -H 'Content-Type: application/x-www-form-urlencoded'
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
    * @apiErrorExample {json} Delete Authorization error
    *    HTTP/1.1 500 Internal Server Error
**/
