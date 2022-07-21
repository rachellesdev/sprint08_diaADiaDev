import bdDicas from '../database/bd.js'

const dicaDoDev = (app, dbDicas) =>{
    app.get('/tips', (req, res) => {
        res.json({
            "dicas": bdDicas.dicas[Math.floor(Math.random() * bdDicas.dicas.length)]
        })
    })

    app.post('/create', (req, res) => {
        const body = req.body
        bdDicas.dicas.push(body.dicas)
        res.json(body)
    })
}

export default dicaDoDev