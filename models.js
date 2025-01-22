const { MongoClient } = require("mongodb");

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
let db;

const connectToDb = async () => {
  try {
    await client.connect();
    db = client.db("task-management-db");
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

const getTasks = async () => {
  try {
    const tasks = await db.collection("tasks").find({}).toArray();
    return tasks;
  } catch (error) {
    console.error("Error getting tasks:", error);
  }
};

const createTask = async (task) => {
  try {
    const result = await db.collection("tasks").insertOne(task);
    return result.ops[0];
  } catch (error) {
    console.error("Error creating task:", error);
  }
};

const getTaskById = async (id) => {
  try {
    const task = await db.collection("tasks").findOne({ id });
    return task;
  } catch (error) {
    console.error("Error getting task by ID:", error);
  }
};

const updateTask = async (id, updatedTask) => {
  try {
    const result = await db
      .collection("tasks")
      .updateOne({ id }, { $set: updatedTask });
    return result;
  } catch (error) {
    console.error("Error updating task:", error);
  }
};

const deleteTask = async (id) => {
  try {
    const result = await db.collection("tasks").deleteOne({ id });
    return result;
  } catch (error) {
    console.error("Error deleting task:", error);
  }
};

module.exports = {
  connectToDb,
  getTasks,
  createTask,
  getTaskById,
  updateTask,
  deleteTask,
};
