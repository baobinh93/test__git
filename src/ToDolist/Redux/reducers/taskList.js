import { act } from "react-dom/test-utils";
import { ADD_TASK, DELL_TASK, EDIT_TASK } from "../contants";

export const taskList = (state = [], action) => {
  const generateID = new Date().getTime();
  switch (action.type) {
    case ADD_TASK: {
      return [...state, { id: generateID, task: action.task }];
    }
    case DELL_TASK: {
      let cloneState = [...state];
      let indexTask = cloneState.findIndex(
        (task) => task.id === action.id && task.task === action.task
      );
      cloneState.splice(indexTask, 1);
      return [...cloneState];
    }
    case EDIT_TASK: {
      let cloneState = [...state];
      let indexTask = cloneState.findIndex(
        (task) => task.id === action.id && task.task === action.task
      );
      cloneState[indexTask].task = action.newTask;
      return cloneState;
    }
    default: {
      return [...state];
    }
  }
};
