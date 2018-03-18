module.exports = app => {
    const Authorization = require('../models/authorization')
    const Persistence = require('../../helpers/persistence')(Authorization)
    const Validate = require('../../helpers/validate')
    const Business = require('../business/user')(app)
    return {
        create: (req, res) => {
            const body = {}
            Validate.validateBody(req.body, 'status', 'avatar')(body)
            Business.authorization(req.user)(body)
                .then(Persistence.create(res))
                .catch(err => res.status(500).json(err))
        },
        update: (req, res) => {
            const body = {}
            Validate.validateBody(req.body, 'status', 'avatar')(body)
            Persistence.update(res)(req.params)(body)
        },
        listAll: (req, res) => Persistence.findAll(res)(req.params, req.body),
        listOne: (req, res) => Persistence.findOne(res)(req.params, req.body),
        delete: (req, res) => Persistence.remove(res)(req.params),
        report: async (req, res) => {
            const notAuthorizate = await Authorization.count({status: false}).exec()
            const acceptAuthorizate = await Authorization.count({status: true}).exec()
            res.status(200).json([{
                notAuthorizate: notAuthorizate,
                acceptAuthorizate: acceptAuthorizate
            }])
        }
    }
}
