import React, { Component } from "react";
import { connect } from "react-redux";
import { actionAddTask } from "../Redux/actions";
import ReactDom from "react-dom";
class InputAddTask extends Component {
  constructor(props) {
    super(props);
  }

  getInputValue = () => {
    let inputEL = document.getElementById("addTask");
    return ReactDom.findDOMNode(inputEL).value;
  };
  resetInput = () => {
    let inputEL = document.getElementById("addTask");
    ReactDom.findDOMNode(inputEL).value = "";
  };
  render() {
    return (
      <div className="input-group mb-3">
        <input
          id="addTask"
          type="text"
          className="form-control"
          placeholder="Task name..."
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <div className="input-group-append">
          <button
            className="btn btn-outline-secondary"
            type="button"
            onClick={() => {
              let inputValue = this.getInputValue();
              if (inputValue.trim() !== "") {
                this.props.addTask(inputValue);
                this.resetInput();
              } else {
                this.resetInput();
              }
            }}
          >
            + Add task
          </button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addTask: (_task) => {
      return dispatch(actionAddTask(_task));
    },
  };
};

export default connect(null, mapDispatchToProps)(InputAddTask);
