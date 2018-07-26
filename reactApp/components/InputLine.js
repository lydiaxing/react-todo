import React from 'react';

class InputLine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      typedText: ''
    };
  }

  handleTyping(typedText) {
    this.setState({
      typedText
    });
  }

  handleSubmit() {
    this.props.submit(this.state.typedText);
    this.setState({
      typedText: ''
    })
  }

  render() {
    return (
      <div className="input-group mb-3">
        <input
          className="form-control"
          type="text"
          placeholder="task"
          onChange={(event) => this.handleTyping(event.target.value)}
          value={this.state.typedText}
        />

        <div className="input-group-append">
          <button onClick={() => this.handleSubmit()} className="btn btn-primary">
            Add todo
          </button>
        </div>
      </div>
    );
  }
}

export default InputLine;
