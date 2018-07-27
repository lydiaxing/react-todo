const express = require('express');
const router = express.Router();
var TodoItem = require('../models/TodoItem')

router.post('/add', (req, res) => {
  const testTodo = new TodoItem({
    task: req.body.taskText,
    completed: false
  });

  testTodo.save()
    .then(response => {
      res.send(response);
    })
    .catch(error => {
      res.send(error);
    })
});

router.get('/all', (req, res) => {
  TodoItem.find({}, (err, docs) => {
    res.send(docs);
  });
});

router.delete('/delete/:id', (req, res) => {
  TodoItem.findByIdAndDelete(req.params.id, (err, doc) => {
    res.send(doc);
  });
});

router.post('/toggle/:id', (req, res) => {
  TodoItem.findById(req.params.id)
    .then((doc) => {
      return TodoItem.findByIdAndUpdate(req.params.id, { $set: { completed: !doc.completed }})
    })
    .then((doc) => {
      res.send(doc);
    });
});

module.exports = router;
