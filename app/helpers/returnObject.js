const Error = require('../errors/persistence/error')
module.exports = ({
    sucessCreate: res => data => res.status(201).json(data),
    error: res => data => res.status(500).json(data),
    returnUpdate: res => data =>
        (data.nModified)
            ? res.status(200).json(Error.sucessUpdate)
            : res.status(400).json(Error.errorUpdate),
    findSuccess: res => data =>
        (data)
            ? res.status(200).json(data)
            : res.status(400).json(Error.findOneEmpty),
    deleteSucess: res => data =>
        (data.result.n)
            ? res.status(200).json(Error.deleteSucess)
            : res.status(400).json(Error.sucessDelete),
    findAllSuccess: res => data =>
        (data.length > 0)
            ? res.status(200).json(data)
            : res.status(400).json(Error.findOneEmpty)
})
