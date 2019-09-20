var express = require("express");
var router = express.Router();
var Todo = require("../Models/todoModel");

//Get List todo
router.get("/", function(req, res) {
  Todo.find(function(err, todos) {
    if (err) {
      res.status(505).send(err);
    } else res.status(200).json(todos);
  });
});

//Get item todo
router.get("/:id", function(req, res) {
  var id = req.params.id;
  Todo.findById(id).exec(function(err, todo) {
    if (err) res.status(505).send(err);
    if (!todo) res.status(404).send();
    else res.json(todo);
  });
});

//Add todo
router.post("/", function(req, res) {
  var todo = new Todo(req.body);
  todo.save(function(err, todo) {
    if (err) res.send(err);
    else res.send(todo);
  });
});

//Update todo

router.put("/:id", function(req, res) {
  var id = req.params.id;
  Todo.findOne({ _id: id }, function(err, todo) {
    if (err) {
      return res.status(500).json({
        message: "error when getting todo"
      });
    }
    if (!todo) {
      return res.status(404).json({
        message: "todo doesnt exist"
      });
    } else {
      todo.text = req.body.text ? req.body.text : todo.text;
      todo.completedAt = req.body.completedAt
        ? req.body.completedAt
        : todo.completedAt;
      todo.completed = req.body.completed ? req.body.completed : todo.completed;
      todo.save(function(err, todo) {
        if (err) {
          return res.status(505).json({
            message: "error while updating",
            error: err
          });
        }
        return res.json(todo);
      });
    }
  });
});

//Delete todo
router.delete("/:id", function(req, res) {
  var id = req.params.id;
  Todo.findByIdAndDelete(id, function(err, todo) {
    if (err) {
      return res.status(505).json({
        message: "error while deleting",
        error: err
      });
    } else res.send();
  });
});
module.exports = router;
