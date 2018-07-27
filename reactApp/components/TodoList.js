import React from 'react';
import Todo from './Todo';

class TodoList extends React.Component {
  render() {
    return (<ul className="list-group-flush">
      {this.props.todos.map((todo) =>
        <Todo
          task={todo.task}
          completed={todo.completed}
          toggleClick={(id) => this.props.toggleClick(id)}
          key={todo._id}
          id={todo._id}
          deleteClick={(id) => this.props.deleteClick(id)}
        />
      )}
    </ul>);
  }
}

export default TodoList;
