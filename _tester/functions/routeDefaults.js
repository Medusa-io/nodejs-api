module.exports = ({
    defaultGet: (done, request, defaultObject, ROTA) => {
        request
            .get(ROTA)
            .expect(200)
            .end((err, res) => {
                const fields = Object.keys(res.body[0])
                const doTest = elemento => {
                    if (defaultObject[elemento]) {
                        expect(res.body[0][elemento]).to.be.eql(defaultObject[elemento])
                    }
                }
                fields.map(doTest)
                done(err)
            })
    },
    defaultGetOne: (done, request, defaultObject, ROTA) => {
        request
            .get(ROTA)
            .expect(200)
            .end((err, res) => {
                const fields = Object.keys(res.body)
                const doTest = (elemento) => {
                    if (defaultObject[elemento]) {
                        expect(res.body[elemento]).to.be.eql(defaultObject[elemento])
                    }
                }
                fields.map(doTest)
                done(err)
            })
    },
    defaultPost: (done, request, defaultObject, ROTA) => {
        request
            .post(ROTA)
            .send(defaultObject)
            .expect(201)
            .end((err, res) => {
                const fields = Object.keys(res.body)
                defaultObject._id = res.body._id
                const doTest = (elemento) => {
                    if (defaultObject[elemento]) {
                        expect(res.body[elemento]).to.be.eql(defaultObject[elemento])
                    }
                }
                fields.map(doTest)
                done(err)
            })
    },
    defaultPut: (done, request, defaultObject, ROTA) => {
        request
            .put(ROTA)
            .send(defaultObject)
            .expect(200)
            .end((err, res) => {
                done(err)
            })
    },
    defaultDelete: (done, request, ROTA) => {
        request
            .delete(ROTA)
            .expect(200)
            .end((err, res) => {
                done(err)
            })
    },
    defaultAuthenticate: (done, request, userCredentials, ROTA) => {
        Request
            .post(ROTA)
            .send(userCredentials)
            .expect(200)
            .end((err, res) => {
                done(err)
        })
    }
})