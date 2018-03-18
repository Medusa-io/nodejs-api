module.exports = app => {
    const url = `${process.env.API_VERSION}/employee`
    const Controller = require('../controllers/employee')(app)
    const Validate = require('../validates/employee')(app)

    app.route(url)
        .get(Controller.listAll)
        .post(Validate.create, Controller.create)

    app.route(`${url}/validate`)
        .post(Validate.isEmployee, Controller.isEmployee)

    app.route(`${url}/:_id`)
        .get(Validate.isId, Controller.listOne)
        .put(Validate.isId, Validate.update, Controller.update)
        .delete(Validate.isId, Controller.delete)
}
