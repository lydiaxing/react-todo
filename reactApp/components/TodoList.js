import React from 'react';
import Todo from './Todo';

class TodoList extends React.Component {
  render() {
    return (<ul className="list-group-flush">
      {this.props.todos.map((todo) =>
        <Todo
          task={todo.task}
          completed={todo.completed}
          xClick={(index) => this.props.todoXClick(index)}
          key={todo._id}
        />
      )}
    </ul>);
  }
}

export default TodoList;
