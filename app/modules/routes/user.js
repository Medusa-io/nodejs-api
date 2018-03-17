module.exports = app => {
    const url = `${process.env.API_VERSION}/user`
    const Controller = require('../controllers/user')(app)
    const Validate = require('../validates/user')(app)

    app.route(url)
        .get(app.jwt, Controller.listAll)
        .post(app.jwt, Validate.create, Controller.create)

    app.route(`${url}/:_id`)
        .get(app.jwt, Validate.isId, Controller.listOne)
        .put(app.jwt, Validate.isId, Validate.update, Controller.update)
        .delete(app.jwt, Validate.isId, Controller.delete)
}
