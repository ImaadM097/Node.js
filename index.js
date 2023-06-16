const express = require('express')
const app = express();
const userRouter = require('./routes/users')

app.use(logger)

app.get("/", (req,res)=>{
    res.send("Hello Hello Here we go")

})
app.use("/users", userRouter)


function logger(req, res, next) {
    console.log(req.originalUrl)
    next()
}

app.listen(3000)