const Crypto = require('./../../app/helpers/crypto')
const passwordMd5 = Crypto.md5('123456')
module.exports = ({
    name: 'Higor',
    email: 'higordiegoti@gmail.com',
    password: '123456',
    passwordCreate: passwordMd5
})