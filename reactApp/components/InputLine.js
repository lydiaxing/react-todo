import React from 'react';

class InputLine extends React.Component {
  render() {
    return (
      <div className="input-group mb-3">
        <input className="form-control" type="text" placeholder="task"></input>
        <div className="input-group-append">
          <button onClick={() => this.props.submit('test')} className="btn btn-primary">
            Add todo
          </button>
        </div>
      </div>
    );
  }
}

export default InputLine;
