const mongoose = require("mongoose")
const express = require("express")

const app = express()

mongoose.connect("mongodb://localhost:27017/registration")
.then(() => console.log("Connected successfully...."))
.catch((err) => console.log(err))

app.use(express.json())

// const signupRouter = require("./routers/signup")
const UserApi = require('./routers/signup')
// app.use('/signup',signupRouter)
app.use('/userapi',UserApi)

app.listen(3000,() => {
    console.log("Server started....")
})