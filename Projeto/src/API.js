import express from "express";
import mongoose from "mongoose";
import autoIncrementFactory from "mongoose-sequence";
mongoose.set("debug", true);

const app = express();
app.use(express.json());

const port = 3000;

mongoose.connect(
  "mongodb+srv://erisonkaua:Su1zmIjBD8yFMCHI@tasks-api.3f78b.mongodb.net/?retryWrites=true&w=majority&appName=tasks-api"
);
const AutoIncrement = autoIncrementFactory(mongoose);
// Definindo o esquema com timestamps habilitados
const taskSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
  },
  {
    timestamps: true, // Habilitando timestamps para adicionar createdAt e updatedAt
  }
);

taskSchema.plugin(AutoIncrement, { inc_field: "taskId" });

const Task = mongoose.model("Task", taskSchema);

app.get("/", async (req, res) => {
  const task = await Task.find();
  res.send(task);
});

app.post("/", async (req, res) => {
  try {
    const task = new Task({
      name: req.body.name,
      description: req.body.description,
    });
    await task.save();
    res.status(201).send(task); // Envia a tarefa criada como resposta
  } catch (err) {
    res.status(400).send(err.message); // Envia a mensagem de erro em caso de falha
  }
});

app.listen(port, () => {
  console.log("ta rodando");
});
