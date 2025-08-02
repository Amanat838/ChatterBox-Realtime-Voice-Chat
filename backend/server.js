require('dotenv').config()

const express = require('express')
const router = require('./routes')
const app = express()
const DbConnect = require('./database')
const PORT = process.env.PORT || 5500
DbConnect()

app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(router)
app.get('/', (req, res)=>{
    res.send('Hello from express')
})

app.listen(PORT, ()=> console.log(`Listening on port ${PORT}`))