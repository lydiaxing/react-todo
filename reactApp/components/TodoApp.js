import React from 'react';
import InputLine from './InputLine';
import TodoList from './TodoList';
import axios from 'axios';

const dbUrl = "http://localhost:3000/db";

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
  }

  componentDidMount() {
    axios.get(dbUrl + '/all')
    .then((response) => {
      console.log(response.data);
      this.setState({
        todos: response.data
      });
    }).catch(function(error) {
      console.log(error);
    });
  }

  addTodo(task) {
    axios.post(dbUrl + '/add', {
      taskText: task,
      completed: false
    }).then((response) => {
      this.setState({
        todos: this.state.todos.concat(response.data)
      });
    }).catch(function(error) {
      console.log(error);
    });
  }

  removeTodo(index) {
    console.log('index', index);
  }

  render() {
    return (<div>
      <InputLine submit={(text) => this.addTodo(text)}/>
      <TodoList todos={this.state.todos} todoXClick={(index) => this.removeTodo(index)}/>
    </div>);
  }
}

export default TodoApp;
