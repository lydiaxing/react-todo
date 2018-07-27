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

  refresh() {
    axios.get(dbUrl + '/all')
    .then((response) => {
      this.setState({
        todos: response.data
      });
    }).catch(function(error) {
      console.log(error);
    });
  }

  componentDidMount() {
    this.refresh();
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

  removeTodo(id) {
    axios.delete(dbUrl + '/delete/' + id)
    .then((resp) => {
      this.refresh();
    })
    .catch(function(error) {
      console.log(error);
    });
  }

  toggleTodo(id) {
    axios.post(dbUrl + '/toggle/' + id)
    .then((resp) => {
      this.refresh();
    }).catch(function(error) {
      console.log(error);
    });
  }

  render() {
    return (<div>
      <InputLine submit={(text) => this.addTodo(text)}/>
      <TodoList
        todos={this.state.todos}
        toggleClick={(id) => this.toggleTodo(id)}
        deleteClick={(id) => this.removeTodo(id)}
      />
    </div>);
  }
}

export default TodoApp;
