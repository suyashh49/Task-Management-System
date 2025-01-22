const {
  connectToDb,
  getTasks,
  createTask,
  getTaskById,
  updateTask,
  deleteTask,
} = require("../models");

connectToDb();
//let nextTaskId = tasks.length + 1;
exports.getAllTasks = async (req, res) => {
  try {
    const tasks = await getTasks();
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: "Error getting tasks" });
  }
};

exports.getTaskById = async (req, res) => {
  try {
    const task = await getTaskById(req.params.id);
    if (!task) return res.status(404).json({ message: "Task not found" });
    res.json(task);
  } catch (error) {
    res.status(500).json({ message: "Error getting task" });
  }
};

exports.createTask = async (req, res) => {
  try {
    const { title, description, status } = req.body;
    if (!title || !description || !status) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const newTask = {
      id: `${Date.now()}`,
      title,
      description,
      status,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    };

    const createdTask = await createTask(newTask);
    res.status(201).json(createdTask);
  } catch (error) {
    res.status(500).json({ message: "Error creating task" });
  }
};

exports.updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, status } = req.body;
    const updatedTask = { title, description, status };

    const result = await updateTask(id, updatedTask);
    if (result.matchedCount === 0)
      return res.status(404).json({ message: "Task not found" });

    res.json(updatedTask);
  } catch (error) {
    res.status(500).json({ message: "Error updating task" });
  }
};

exports.deleteTask = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await deleteTask(id);
    if (result.deletedCount === 0)
      return res.status(404).json({ message: "Task not found" });

    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: "Error deleting task" });
  }
};
