module.exports = app => {
    const Crypto = require('./../../helpers/crypto')
    const PushNotification = require('../../helpers/pushNotification')
    const errorSistem = require('../../errors/system/error')
    const cryptoPassword = password => Crypto.md5(password)
    const isPassword = object => object.password ? cryptoPassword(object.password) : null

    return {
        create: user => new Promise((resolve, reject) => {
            try {
                user.name = user.name
                user.password = isPassword(user)
                resolve(user)
            } catch (err) {
                reject(errorSistem.dataProcessing)
            }
        }),
        update: user => new Promise((resolve, reject) => {
            try {
                if (user.password) user.password = cryptoPassword(user.password)
                resolve(user)
            } catch (err) {
                reject(errorSistem.dataProcessing)
            }
        }),
        authorization: user => object => new Promise((resolve, reject) => {
            try {
                if (user.gcm) {
                    PushNotification.sendPush(user)(object)
                        .then(() => resolve(object))
                        .catch(reject)
                }
                resolve(object)
            } catch (err) {
                reject(err)
            }
        })
    }
}
