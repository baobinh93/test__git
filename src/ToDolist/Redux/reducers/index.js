import { combineReducers } from "redux";
import { taskCompleted } from "./taskCompleted";
import { taskList } from "./taskList";
export let rootReducer = combineReducers({
  taskCompleted,
  taskList,
});
