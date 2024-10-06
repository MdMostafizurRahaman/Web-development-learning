const express = require('express')

const app = express()

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

const users = ['Rakib', 'sakib', 'eshan', 'zim', 'Asif']

app.get('/users/:id', (req, res) =>{
    const userId = req.params.id
    const name = users[userId]
    res.send(name)
})
app.listen(3000, () => console.log("Listening to port 3000"))