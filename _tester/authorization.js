describe('Routes Authorization', () => {
    const Authorization = require('../app/modules/models/authorization')
    const rotaUrl = `${process.env.API_VERSION}/authorization`
    let defaultObject = objectAuthorization

    beforeEach((done) => {
        Authorization.remove({})
            .then(() => Authorization.create(defaultObject))
            .then(response => {
                defaultObject._id = `${response._id}`
                done()
            })
            .catch(err => console.log('estou aqui', err))
    })

    describe(`Route get ${rotaUrl}`, (done) => {
        it('should list a Authorization', (done) => {
            requestAux.defaultGet(done, request, defaultObject, rotaUrl)
        })
    })

    describe(`Route get ${rotaUrl}{_id}`, () => {
        it('should return a one of Authorization', (done) => {
            requestAux.defaultGetOne(done, request, defaultObject, `${rotaUrl}/${defaultObject._id}`)
        })
    })

    describe(`Route put ${rotaUrl}{id}`, () => {
        it('should update a Authorization', (done) => {
            defaultObject.status = false
            requestAux.defaultPut(done, request, defaultObject, `${rotaUrl}/${defaultObject._id}`)
        })
    })

    describe(`Route delete ${rotaUrl}{id}`, () => {
        it('should delete a Authorization', (done) => {
            requestAux.defaultDelete(done, request, `${rotaUrl}/${defaultObject._id}`)
        })
    })

})