import React, { Component } from "react";
import { connect } from "react-redux";
import { actionDellTaskCompleted } from "../Redux/actions";
class TaskCompleted extends Component {
  render() {
    return (
      <div>
        <h3 className="h4"> Task completed</h3>
        <ul className="list-group">
          {this.props.taskCompleted?.map((task) => {
            return (
              <li className="list-group-item" key={task.completedId}>
                {task.task}
                <div className="float-right">
                  <button
                    type="button"
                    className="btn btn-outline-secondary mr-2"
                    onClick={() => {
                      this.props.dellTaskComplete(task.task, task.id);
                    }}
                  >
                    <i class="fa-solid fa-trash-can"></i>
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
const mapStateToProps = (state) => {
  return {
    taskCompleted: state.taskCompleted,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    dellTaskComplete: (_task, _id) => {
      return dispatch(actionDellTaskCompleted(_task, _id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskCompleted);
