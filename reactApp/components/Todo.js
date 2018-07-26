import React from 'react';

class Todo extends React.Component {
  render() {
    var task = this.props.completed ? (<strike>{this.props.task}</strike>) : (this.props.task);
    return (<li className="list-group-item">
      <button
        className="btn btn-light"
        onClick={() => this.props.xClick()}
      >
        <i className="fa fa-check"></i>
      </button>
      {task}
    </li>);
  }
}

export default Todo;
