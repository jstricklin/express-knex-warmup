const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const queries = require('./queries')


app.listen(port, ()=> {
    console.log(`Port Party on port: ${port}`)
})

app.get('/', (req, res)=> {
    queries.getAll()
        .then(response => res.send(response))
})
app.get('/:firstName', (req, res)=>{
    queries.read(req.params.firstName)
        .then(response => res.send(response))
})
