import {
  ADD_TASK,
  ADD_TASK_COMPLETED,
  DELL_TASK,
  DELL_TASK_COMPLETED,
  EDIT_TASK,
} from "../contants";

export const actionAddTask = (task) => {
  return {
    type: ADD_TASK,
    task,
  };
};
export const actionDelTask = (task, id) => {
  return {
    type: DELL_TASK,
    task,
    id,
  };
};

export const actionAddTaskCompleted = (taskCompleted) => {
  return {
    type: ADD_TASK_COMPLETED,
    taskCompleted,
  };
};

export const actionDellTaskCompleted = (task, id) => {
  return {
    type: DELL_TASK_COMPLETED,
    task,
    id,
  };
};

export const actionEditTask = (task, id, newTask) => {
  return { type: EDIT_TASK, task, id, newTask };
};
