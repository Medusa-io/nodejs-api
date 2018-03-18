module.exports = app => {
    const Crypto = require('./../../helpers/crypto')
    const PushNotification = require('../../helpers/pushNotification')
    const errorSistem = require('../../errors/system/error')
    const cryptoPassword = password => Crypto.md5(password)
    const Employee = require('../models/employee')

    return {
        create: user => new Promise((resolve, reject) => {
            try {
                user.name = user.name
                user.password = cryptoPassword(user.password)
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
        employeeOne: object => new Promise((resolve, reject) => {
            Employee.findOne({_id: object.employee_id})
                .then(employee => {
                    object.employee = employee
                    resolve(employee)
                }).catch(reject)
        }),
        authorization: user => object => new Promise((resolve, reject) => {
            try {
                if (user) {
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
