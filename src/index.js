const express = require('express')

const app = express()

app.get('/',(req, res) => {
    res.send({
        data: "Hello world",
    })
})

let port = 9000

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})