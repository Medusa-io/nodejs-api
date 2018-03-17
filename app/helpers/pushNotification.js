const Exponent = require('exponent-server-sdk')

const exponent = new Exponent()

const sendPush = user => object => new Promise((resolve, reject) => {
    console.log('estou aqui')
    try {
        exponent.sendPushNotificationsAsync([{
            to: user.gcm,
            sound: 'default',
            body: `Entrada foi ${object.status ? 'Autorizado' : 'Não Autorizado'}`,
            data: object.data
        }], (response, err) => {
            console.log(err)
            console.log(response)
        })
    } catch (error) {
        console.log(error)
        reject(error)
    }
})

module.exports = {
    sendPush
}
