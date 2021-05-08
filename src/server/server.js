const express = require('express')
const path = require('path');
const app = express()
const port = 3000


app.use('/', express.static(path.join(__dirname, '../../build')))
/*app.get('/', (req, res) => {
    res.send('Hello World!')
})*/

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

