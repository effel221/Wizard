const express = require('express')
const path = require('path');
const app = express();
const cors = require('cors');
const port = 3000

app.use(cors());
app.use('/', express.static(path.join(__dirname, '../../build')));

app.post('/api', (req, res) => {
    console.log(req);
    res.send('Ok!')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

