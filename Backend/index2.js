import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'

const app = express()
const port = '3001'

app.use(cors());
app.use(express.json())

mongoose.connect('mongodb+srv://erisonkaua:g4flex@tasks-api.3f78b.mongodb.net/?retryWrites=true&w=majority&appName=tasks-api');

const taskScheme = new mongoose.Schema({
    name: String,
    description: String
})
const Task = new mongoose.model("Task", taskScheme);

  app.get("/task", async (req, res) => {
    const tasks = await Task.find();
    console.log(tasks)
    res.json(tasks)
  })

  app.post("/task", async (req, res) => {
    const tasks = new Task({
        name: req.body.name,
        description: req.body.description,
      }); await tasks.save();
      res.status(201);
;
  })


  app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
  });