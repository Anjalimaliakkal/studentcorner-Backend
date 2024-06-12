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

app.post("/search", (req, res) => {
    let input = req.body
    studentsmodel.find(input).then(
        (data) => {
            res.json(data)
        }
    ).catch(
        (error) => {
            res.json(error)
        }
    )
})

app.post("/delete", (req, res) => {
    let input = req.body
    studentsmodel.findByIdAndDelete(input._id).then(
        (response) => {
            console.log("DELETE")
            res.json({ "status": "success" })
        }
    ).catch(
        (error)=> {
        res.json({"status": "error"})
    }
)
})

app.get("/ViewAll", (req, res) => {
    studentsmodel.find().then(
        (data) => {
            res.json(data)
        }
    ).catch((error) => {
        res.json(error)
    })
})

app.listen(8081, () => {
    console.log("server started")
})