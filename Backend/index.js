import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const app = express();
const port = 3000;


app.use(cors());
app.use(express.json());

mongoose
  .connect(
    "mongodb+srv://erisonkaua:g4flex@tasks-api.3f78b.mongodb.net/?retryWrites=true&w=majority&appName=tasks-api",
  )
  .then(() => {
    console.log("Conectado ao MongoDB");
  })
  .catch((error) => {
    console.error("Erro ao conectar ao MongoDB", error);
  });


const taskSchema = new mongoose.Schema(
  {
    name: String,
    description: String,
  },
  {
    timestamps: true,
  }
);

const Task = mongoose.model("Task", taskSchema);


const formatDate = (date) => {
  return `${date.toLocaleDateString("pt-BR")} ${date.toLocaleTimeString(
    "pt-BR"
  )}`;
};


app.get("/tasks", async (req, res) => {
  try {
    const tasks = await Task.find();
    const formattedTasks = tasks.map((task) => ({
      ...task._doc,
      createdAt: formatDate(task.createdAt),
      updatedAt: formatDate(task.updatedAt),
    }));
    res.json(formattedTasks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.post("/tasks", async (req, res) => {
  const task = new Task({
    name: req.body.name,
    description: req.body.description,
  });
  try {
    const newTask = await task.save();
    res.status(201).json({
      ...newTask._doc,
      createdAt: formatDate(newTask.createdAt),
      updatedAt: formatDate(newTask.updatedAt),
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
