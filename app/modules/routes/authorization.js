module.exports = app => {
    const url = `${process.env.API_VERSION}/authorization`
    const Controller = require('../controllers/authorization')(app)
    const Validate = require('../validates/authorization')(app)

    app.route(`${url}/report`)
        .get(Controller.report)

    app.route(url)
        .get(Controller.listAll)
        .post(Validate.create, Controller.create)

    app.route(`${url}/:_id`)
        .get(Validate.isId, Controller.listOne)
        .put(Validate.isId, Validate.update, Controller.update)
        .delete(Validate.isId, Controller.delete)
}
