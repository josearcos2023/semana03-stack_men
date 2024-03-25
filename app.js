const express = require('express')
const app = express()

const db = require('./db')

app.set('view engine', 'ejs')

app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use(express.static('public'))

app.get('/', (req,res)=>{
    res.send('Hello World!')
})

app.listen(4000, ()=>{
    console.log('Server running on http://localhost:4000')
})