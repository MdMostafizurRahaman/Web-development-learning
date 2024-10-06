const express = require('express')
const cors = require('cors')


const app = express()
app.use(cors())


app.get('/', (req, res) =>{
    const fruits ={
        product: "ada",
        price: 123
    }
    res.send(fruits)
})

app.get('/fruits/banana', (req, res) => {
    res.send({fruits: 'banana', quantity: 1000, price: 10000})
})

const users = ['rakib', 'sakib', 'eshan', 'zim', 'Asif'];

app.get('/users/:id', (req, res) =>{
    const id = req.params.id
    const name = users[id]
    res.send({id, name})
})
app.listen(3000, () => console.log("Listening to port 3000"))