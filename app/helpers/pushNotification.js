const Expo = require('exponent-server-sdk')

let expo = new Expo()

module.exports = ({
    pushNotification: object => new Promise((resolve, reject) => {
        try {
            expo.sendPushNotificationsAsync([{
                to: object.gcm,
                sound: 'default',
                body: object.message,
                data: object.data
            }])
                .then(resolve)
                .catch(reject)
        } catch (error) {
            reject(error)
        }
    })
})
