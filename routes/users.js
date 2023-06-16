const express = require('express')
const router = express.Router();

router.get("/", (req, res) => {
    
    res.send('Users list')
})
router.get("/new", (req,res)=>{
    res.send("User new form")
})

router.post('/', (req,res)=>{
    res.send("Created a new user")
})


router.get('/:id', (req,res)=>{
    console.log(req.user5)
     res.send(`Get user with id ${req.params.id}`)
})
router.post('/:id', (req,res)=>{
    res.send(`Update user with id ${req.params.id}`)
})
router.delete('/:id', (req,res)=>{
    res.send(`Delete user with id ${req.params.id}`)
})
const users1 = [{name: "cory"}, {name: "lisa"}]
router.param("id", (req,res,next,id)=>{
    req.user5 = users1[id]
    next()
})



module.exports = router;