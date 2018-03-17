describe('Routes Authenticate', () => {
    const User = require('../app/modules/models/user')
    const rotaUrl = `${process.env.API_VERSION}/authenticate`
    let defaultObject = objectAuthenticate.create
    let defaultCredencial = objectAuthenticate.auth

    beforeEach((done) => {
        User.remove({})
            .then(() => User.create(defaultObject))
            .then(() => done())
            .catch(err => console.log('estou aqui', err))
    })

    describe(`Route Authenticate ${rotaUrl}`, () => {
        it('Should Authenticate a User', (done) => {
            requestAux.defaultAuthenticate(done, request, defaultCredencial, `${rotaUrl}`)
        })
    })

})