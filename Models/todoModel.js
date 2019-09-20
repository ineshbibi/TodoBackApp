var mongoose = require("mongoose");
var todoSchema = new mongoose.Schema({
  text: { type: String, required: true, minlength: 1 },
  completed: { type: Boolean, default: false },
  completedAt: { type: String, default: null }
});

module.exports = mongoose.model("Todo", todoSchema);
