describe('Routes User', () => {
    const User = require('../app/modules/models/user')
    const rotaUrl = `${process.env.API_VERSION}/user`
    let defaultObject = objectUser

    beforeEach((done) => {
        Employees.remove({})
            .then(() => User.create(defaultObject))
            .then(response => {
                defaultObject._id = `${response._id}`
                done()
            })
            .catch(err => console.log('estou aqui', err))
    })

    after(function(done){
        process.exit(0)
      })

    describe(`Route get ${rotaUrl}`, (done) => {
        it('should list a User', (done) => {
            requestAux.defaultGet(done, request, defaultObject, rotaUrl)
        })
    })

    describe(`Route get ${rotaUrl}{_id}`, () => {
        it('should return a one of User', (done) => {
            requestAux.defaultGetOne(done, request, defaultObject, `${rotaUrl}/${defaultObject._id}`)
        })
    })

    describe(`Route put ${rotaUrl}{id}`, () => {
        it('should update a User', (done) => {
            defaultObject.name = 'Test'
            requestAux.defaultPut(done, request, defaultObject, `${rotaUrl}/${defaultObject._id}`)
        })
    })

    describe(`Route delete ${rotaUrl}{id}`, () => {
        it('should delete a User', (done) => {
            requestAux.defaultDelete(done, request, `${rotaUrl}/${defaultObject._id}`)
        })
    })

    describe(`Route create ${rotaUrl}`, () => {
        it('should create a User', (done) => {
            requestAux.defaultPost(done, request, object, `${rotaUrl}`)
        })
    })
})