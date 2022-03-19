import React, { Component } from "react";
import { connect } from "react-redux";
import {
  actionAddTaskCompleted,
  actionDelTask,
  actionEditTask,
} from "../Redux/actions/index";
import ReactDom from "react-dom";
class TaskToDo extends Component {
  editableTask = (_id) => {
    let spanTask = document.getElementById(_id);
    ReactDom.findDOMNode(spanTask).contentEditable = "true";
    ReactDom.findDOMNode(spanTask).focus();
  };
  notEditableTask = (_id) => {
    let spanTask = document.getElementById(_id);
    ReactDom.findDOMNode(spanTask).contentEditable = "false";
  };
  changeColorBtn = (_id) => {
    let btn = document.getElementById(_id);
    ReactDom.findDOMNode(btn).style.backgroundColor = "#6c757d";
    ReactDom.findDOMNode(btn).style.color = "#fff";
  };
  resetColorBtn = (_id) => {
    let btn = document.getElementById(_id);
    ReactDom.findDOMNode(btn).style.backgroundColor = "";
    ReactDom.findDOMNode(btn).style.color = "#6c757d";
  };
  getValueToState(_id) {
    let span = document.getElementById(_id);
    let value = ReactDom.findDOMNode(span).innerText;
    return value;
  }
  render() {
    return (
      <div className="my-5">
        <h3 className="h4"> Task to do</h3>

        <ul className="list-group">
          {this.props.taskList?.map((task) => {
            return (
              <li className="list-group-item" key={task.id}>
                <span
                  contentEditable="false"
                  id={"task" + task.id}
                  onBlur={() => {
                    let newTask = this.getValueToState("task" + task.id);
                    this.notEditableTask("task" + task.id);
                    this.resetColorBtn("btn" + task.id);
                    this.props.editTask(task.task, task.id, newTask);
                  }}
                >
                  {task.task}
                </span>
                <div className="float-right">
                  <button
                    type="button"
                    className="btn btn-outline-secondary mr-2"
                    onClick={() => {
                      return this.props.dellTask(task.task, task.id);
                    }}
                  >
                    <i class="fa-solid fa-trash-can"></i>
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-secondary mr-2"
                    id={"btn" + task.id}
                    onClick={() => {
                      this.editableTask("task" + task.id);
                      this.changeColorBtn("btn" + task.id);
                    }}
                  >
                    <i class="fa-solid fa-pen-to-square"></i>
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-secondary"
                    onClick={() => {
                      this.props.addTaskComplete(task);
                      this.props.dellTask(task.task, task.id);
                    }}
                  >
                    <i className="fa-solid fa-check"></i>
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addTaskComplete: (_taskComplete) => {
      return dispatch(actionAddTaskCompleted(_taskComplete));
    },
    dellTask: (_task, _id) => {
      return dispatch(actionDelTask(_task, _id));
    },
    editTask: (_task, _id, _newTask) => {
      return dispatch(actionEditTask(_task, _id, _newTask));
    },
  };
};
const mapStateToProps = (state) => {
  return {
    taskList: state.taskList,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(TaskToDo);
