import { ADD_TASK_COMPLETED, DELL_TASK_COMPLETED } from "../contants";

export const taskCompleted = (state = [], action) => {
  const generateID = new Date().getTime();
  switch (action.type) {
    case ADD_TASK_COMPLETED: {
      return [...state, { ...action.taskCompleted, completedId: generateID }];
    }
    case DELL_TASK_COMPLETED: {
      let cloneState = [...state];
      let indexTask = cloneState.findIndex(
        (task) => task.id === action.id && task.task === action.task
      );
      cloneState.splice(indexTask, 1);
      return [...cloneState];
    }
    default: {
      return [...state];
    }
  }
};
