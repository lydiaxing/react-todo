import React from 'react';
import Todo from './Todo';

class TodoList extends React.Component {
  render() {
    return (<ul className="list-group-flush">
      {this.props.todos.map((task) => <Todo task={task.taskText} completed={task.completed}/>)}
    </ul>);
  }
}

export default TodoList;
