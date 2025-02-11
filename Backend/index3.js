import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors';

const app = express()
const port = '3002'

app.use(cors())
app.use(express.json())
mongoose.connect('mongodb+srv://erisonkaua:g4flex@tasks-api.3f78b.mongodb.net/?retryWrites=true&w=majority&appName=tasks-api')


const taskSchema = mongoose.Schema({
    name: String,
    description: String
})

const Task = new mongoose.model('Task', taskSchema)

app.get( '/task', async (req, res) =>{
    const task = await Task.find() 
    res.send(task)
    console.log(task)
})


app.listen(port)