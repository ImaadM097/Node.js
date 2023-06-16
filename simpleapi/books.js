const express = require('express')
const router = express.Router()
const books = require('./books.json')

router.get('/', (req,res)=>{
    res.json(books)
})

router.get('/:id', (req, res)=>{
    const {id} = req.params
    res.json(books.filter((item)=>item.id === parseInt(id)))

})

router.put('/:id', (req, res)=>{
    const {id} = req.params
    const reqBody = req.body
    books.forEach((item, index)=>{
        if(item.id === parseInt(id)) {
            books[index] = reqBody
        }
    })
    res.json({ message: `The book with id ${id} has been updated`})
})

module.exports = router