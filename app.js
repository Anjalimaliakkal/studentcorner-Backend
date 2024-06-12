const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const student = require("./models/student")
const { studentsmodel } = require("./models/student")

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb+srv://anjali2003:anjali2003@cluster0.wy6js.mongodb.net/studentdb?retryWrites=true&w=majority&appName=Cluster0")

app.post("/", (req, res) => {
    let input = req.body
    console.log(input)
    let student = new studentsmodel(input)
    student.save()
    res.json({ "status": "success" })
})

app.listen(8081, () => {
    console.log("server started")
})