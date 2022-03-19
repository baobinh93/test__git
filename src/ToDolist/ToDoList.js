import React, { Component } from "react";
import TaskToDo from "./Components/TaskToDo";
import TaskCompleted from "./Components/TaskCompleted";
import InputAddTask from "./Components/InputAddTask";
export default class ToDoList extends Component {
  render() {
    return (
      <div className="container" style={{ width: "50%" }}>
        <h1 className="h1"> To Do List</h1>
        <InputAddTask />

        <TaskToDo />
        <TaskCompleted />
      </div>
    );
  }
}
