const dicaDoDev = (app) =>{
    app.get('/tips', (req, res) => {
        res.json({"msg": "mostrando dica aleatória"})
    })

    app.post('/create', (req, res) => {
        res.json({"msg": "recebendo dica aleatória"})
    })
}

export default dicaDoDev