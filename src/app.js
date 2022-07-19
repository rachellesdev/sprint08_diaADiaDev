import express from 'express'

import dicaDoDev from './controller/dica-controller.js'

const app = express()
const port = 3007

dicaDoDev(app)

app.listen(port, () => {
    console.log((`http://localhost:${port}/`));
})