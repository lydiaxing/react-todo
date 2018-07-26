import React from 'react';
import InputLine from './InputLine';
import TodoList from './TodoList';

var dummyData = [{ taskText: "Catch 'em all", completed: false }];

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
  }

  componentDidMount() {
    this.setState({
      todos: dummyData
    });
  }

  addTodo(task) {
    dummyData.push({
      taskText: task,
      completed: false
    });

    console.log('task', task, 'dummyData', dummyData);

    this.setState({
      todos: dummyData
    });
  }

  render() {
    return (
      <div>
        <InputLine submit={(text) => this.addTodo(text)}/>
        <TodoList todos={this.state.todos}/>
      </div>
    );
  }
}

export default TodoApp;
