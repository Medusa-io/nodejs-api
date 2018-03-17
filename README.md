[![Build Status](https://travis-ci.org/Medusa-io/nodejs-api.svg?branch=master)](https://travis-ci.org/Medusa-io/nodejs-api)
# Developer Api
    - Equipe Medusa
# Install dependencies

- Dependencies Application: ` npm i `
- Dependencies Docker: `npm i nodemon`
- Dependencies Doc: `npm i apidoc live-server -g`


# Generate Documentation
` apidoc -e "(node_modules|public|_tester)" -o doc-html /apidoc `

# Machine Local
### Technologies needed
- Nodejs 8.10.0 or superior
- MongoDB 3.6

### Start Documentation
`npm run doc`

### Tester
` npm run test`

### Eslint
` npm run lint:fix `

### Start Application
`npm start`

### Access
- Api: *http://localhost:3000*
- Documentation: *http://localhost:8080*

# Docker
### Tecnologies needed
- Docker 17.12.0
- Docker Compose 1.18.0

## Start Application
`docker-compose up`

### Access
- Api: *http://localhost:3000*
- Documentation: *http://localhost:8080*



