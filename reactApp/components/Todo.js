import React from 'react';

class Todo extends React.Component {
  render() {
    var task = this.props.completed ? (<strike>{this.props.task}</strike>) : (this.props.task);
    return (<li className="list-group-item">
      <button
        className="btn btn-light"
        onClick={() => this.props.toggleClick(this.props.id)}
      >
        <i className="fa fa-check"></i>
      </button>

      <div className="task">{task}</div>
      <button
        className="btn btn-light float-right"
        onClick={() => this.props.deleteClick(this.props.id)}
      >
        <i className="fa fa-times"></i>
      </button>
    </li>);
  }
}

export default Todo;
