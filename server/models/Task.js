const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  title: String,
  description: String,
  status: String,
  dueDate: Date,
  createdBy: String,
  sharedWith: [String],
});

module.exports = mongoose.model("Task", taskSchema);
