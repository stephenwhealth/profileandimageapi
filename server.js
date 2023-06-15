require('./config/curveDB')
const express = require('express')

const studentRouter = require('./routes/studentRouter')
const port = 3030
const mongoose = require('mongoose')
const app = express()
app.use(express.json())

app.use('/uploads', express.static("uploads"));

app.use('/api', studentRouter)
app.get('/api', studentRouter)



app.listen(port, ()=>{
    console.log(`server is listen to port: ${port}`)
})