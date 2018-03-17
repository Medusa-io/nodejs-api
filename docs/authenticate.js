/**
    * @api {post} /api/v1/authenticate Authenticate
    * @apiGroup Authenticate
    * @apiVersion 1.0.0
    * @apiSuccess {String} email Authenticate email
    * @apiSuccess {String} password Authenticate password
    * @apiExample {curl} Example:
        curl -X POST  http://localhost:3000/api/v1/authenticate \
        -H 'Cache-Control: no-cache' \
        -H 'Content-Type: application/x-www-form-urlencoded' \
        -d 'email=higordiegoti@gmail.com&password=123456'
    * @apiSuccessExample {json} Success
    *    HTTP/1.1 200 OK
        {
            "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YWFkMzU1YTg0ODlkNDZkODE2ODU4MmMiLCJuYW1lIjoiY29kZWN1cCIsImVtYWlsIjoiY29kZWN1cEBnbWFpbC5jb20iLCJpYXQiOjE1MjEzMDY1Njl9.4zHwdSuyz9qvNXPsusZIcv6vGGKqAgFnUvDSRimRCdk"
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
        }
    ]
    * @apiErrorExample {json} Authenticate Internal error
    *    HTTP/1.1 500 Internal Server Error
**/

/**
    * @api {get} /api/v1/me Authenticate Me
    * @apiGroup Authenticate
    * @apiVersion 1.0.0
    * @apiHeader {String}  token Users unique access-key.
    * @apiExample {curl} Example:
        curl http://localhost:3000/api/v1/me \
        -H 'Cache-Control: no-cache' \
        -H 'Content-Type: application/x-www-form-urlencoded' \
        -d 'email=higordiegoti@gmail.com&password=123456'
    * @apiSuccessExample {json} Success
    *    HTTP/1.1 200 OK
      {
        "_id": "5aad355a8489d46d8168582c",
        "name": "codecup",
        "email": "codecup@gmail.com",
        "password": "e10adc3949ba59abbe56e057f20f883e",
        "__v": 0,
        "updatedAt": "2018-03-17T17:09:29.974Z",
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YWFkMzU1YTg0ODlkNDZkODE2ODU4MmMiLCJuYW1lIjoiY29kZWN1cCIsImVtYWlsIjoiY29kZWN1cEBnbWFpbC5jb20iLCJpYXQiOjE1MjEzMDY1Njl9.4zHwdSuyz9qvNXPsusZIcv6vGGKqAgFnUvDSRimRCdk",
        "gcm": "",
        "avatar": ""
    }
    * @apiErrorExample {json} Token Invalid
    *    HTTP/1.1 404 Bad Request
   [
        {
            "title": "Token do Usuário",
            "message": "Erro no token do usuário"
        }
    ]
    * @apiErrorExample {json} Authenticate Internal error
    *    HTTP/1.1 500 Internal Server Error
**/


/**
    * @api {get} /api/v1/logout Authenticate Logout
    * @apiGroup Authenticate
    * @apiVersion 1.0.0
    * @apiHeader {String}  token Users unique access-key.
    * @apiExample {curl} Example:
        curl http://localhost:3000/api/v1/logout \
        -H 'Cache-Control: no-cache' \
        -H 'Content-Type: application/x-www-form-urlencoded' \
    * @apiSuccessExample {json} Success
    *    HTTP/1.1 200 OK
     [
        {
            "title": "Alterado com sucesso!",
            "message": "Conseguimos alterar o seu registro com sucesso!"
        }
    ]
    * @apiErrorExample {json} Token Invalid
    *    HTTP/1.1 404 Bad Request
   [
        {
            "title": "Token do Usuário",
            "message": "Erro no token do usuário"
        }
    ]
    * @apiErrorExample {json} Authenticate Internal error
    *    HTTP/1.1 500 Internal Server Error
**/
