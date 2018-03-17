module.exports = app => {
    const url = `${process.env.API_VERSION}/authorization`
    const Controller = require('../controllers/authorization')(app)
    const Validate = require('../validates/authorization')(app)

    app.route(url)
        .get(app.jwt, Controller.listAll)
        .post(app.jwt, Validate.create, Controller.create)

    app.route(`${url}/:_id`)
        .get(Validate.isId, Controller.listOne)
        .put(Validate.isId, Validate.update, Controller.update)
        .delete(Validate.isId, Controller.delete)
}
