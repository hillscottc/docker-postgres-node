const express = require('express')
const app = express()


app.get('/', (req, res) => res.send('Hello World!'))

// needs path to a dist dir. I should copy from build to dist, maybe? Or serve build?
// app.use(express.static(__dirname +'./../../'));

app.listen(3010, () => console.log('Example app listening on port 3010!'))