module.exports = app => {
    const Authorization = require('../models/authorization')
    const Persistence = require('../../helpers/persistence')(Authorization)
    const Validate = require('../../helpers/validate')
    return {
        create: (req, res) => {
            const body = {}
            Validate.validateBody(req.body, 'status', 'avatar')(body)
            Persistence.create(res)(body)
        },
        update: (req, res) => {
            const body = {}
            Validate.validateBody(req.body, 'status', 'avatar')(body)
            Persistence.update(res)(req.params)(body)
        },
        listAll: (req, res) => Persistence.findAll(res)(req.params, req.body),
        listOne: (req, res) => Persistence.findOne(res)(req.params, req.body),
        delete: (req, res) => Persistence.remove(res)(req.params)
    }
}
