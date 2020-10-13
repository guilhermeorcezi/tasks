import { Reducer } from 'redux';
import { TaskState, TasksTypes } from './types';

const INITIAL_STATE: TaskState = {
  data: [],
};

const reducer: Reducer<TaskState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TasksTypes.ADD_TASK_REQUEST:
      return state;
    case TasksTypes.ADD_TASK_SUCCESS:
      return { ...state, data: [...state.data, action.payload] };
    case TasksTypes.ADD_TASK_FAILURE:
      return state;

    case TasksTypes.ALTER_TASK_STATUS:
      return {
        ...state,
        data: state.data.map(task =>
          task.id === action.payload.id ? { ...task, status: true } : task,
        ),
      };

    case TasksTypes.EDIT_TASK_REQUEST:
      return state;
    case TasksTypes.EDIT_TASK_SUCCESS:
      return {
        ...state,
        data: state.data.map(task =>
          task.id === action.payload.id
            ? {
                ...task,
                title: action.payload.title,
                description: action.payload.description,
                taskDate: action.payload.taskDate,
              }
            : task,
        ),
      };
    case TasksTypes.EDIT_TASK_FAILURE:
      return state;

    case TasksTypes.REMOVE_TASK:
      return {
        ...state,
        data: state.data.filter(task => task.id !== action.payload.id),
      };

    case TasksTypes.GET_ALL_TASKS:
      return { ...state };

    case TasksTypes.GET_FINISHED_TASKS:
      const finishedData = {
        data: state.data.filter(task => task.status),
      };

      return finishedData;

    case TasksTypes.GET_UNFINISHED_TASKS:
      const unfinishedData = {
        data: state.data.filter(task => !task.status),
      };

      return unfinishedData;
    default:
      return state;
  }
};

export default reducer;
