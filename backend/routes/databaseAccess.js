const express = require('express');
const router = express.Router();
var TodoItem = require('../models/TodoItem')

router.post('/add', (req, res) => {
  console.log(req.body);
  const testTodo = new TodoItem({
    task: "change this to text from post req"
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

module.exports = router;
