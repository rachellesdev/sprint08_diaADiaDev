import express from 'express'

import dicaDoDev from './controller/dica-controller.js'

import bdDicas from './database/bd.js'

const app = express()
const port = 3007

app.use(express.json())
dicaDoDev(app, bdDicas)

app.listen(port, () => {
    console.log((`http://localhost:${port}/`));
})