const express = require("express");
const tasksRoutes = require("./routes/tasks");
const errorHandler = require("./middleware/errorHandler");
const fs = require("fs");

fs.writeFileSync("test.txt", "File system module is working!", "utf-8");
console.log("Test file created: test.txt");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use("/api/tasks", tasksRoutes);

// Error handling middleware
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on http://0.0.0.0:${PORT}`);
});
