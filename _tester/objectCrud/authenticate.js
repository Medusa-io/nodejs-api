const Crypto = require('./../../app/helpers/crypto')
const passwordMd5 = Crypto.md5('123456')
module.exports = ({
    auth: {
        email: 'higordiegoti@gmail.com',
        password: '123456'
    },
    create: {
        name: 'Higor',
        email: 'higordiegoti@gmail.com',
        password: passwordMd5
    }
})