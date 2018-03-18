module.exports = app => {
    const url = `${process.env.API_VERSION}/authorization`
    const Controller = require('../controllers/authorization')(app)
    const Validate = require('../validates/authorization')(app)

    app.route(url)
        .get(app.jwt, Controller.listAll)
        .post(Validate.create, Controller.create)

    app.route(`${url}/:_id`)
        .get(app.jwt, Validate.isId, Controller.listOne)
        .put(app.jwt, Validate.isId, Validate.update, Controller.update)
        .delete(app.jwt, Validate.isId, Controller.delete)

    app.route(`${url}/report`)
        .get(Controller.report)
}
