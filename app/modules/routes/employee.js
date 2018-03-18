module.exports = app => {
    const url = `${process.env.API_VERSION}/employee`
    const Controller = require('../controllers/employee')(app)
    const Validate = require('../validates/employee')(app)

    app.route(url)
        .get(app.jwt, Controller.listAll)
        .post(Validate.create, Controller.create)

    app.route(`${url}/validate`)
        .post(Validate.isEmployee, Controller.isEmployee)

    app.route(`${url}/:_id`)
        .get(app.jwt, Validate.isId, Controller.listOne)
        .put(app.jwt, Validate.isId, Validate.update, Controller.update)
        .delete(app.jwt, Validate.isId, Controller.delete)
}
