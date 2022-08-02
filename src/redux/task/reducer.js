import {TASK_ACTIONS} from './actions';

const INITIAL_STATE = {
  activeTasks: [
    {
      text: 'Example Active Task',
      dateAdded: Date.now(),
    },
  ],
  completedTasks: [
    {
      text: 'Example Complete Task 1',
      dateAdded: Date.now(),
    },
    {
      text: 'Example Complete Task 2',
      dateAdded: Date.now(),
    },
  ],
};

export default (state = INITIAL_STATE, action) => {
  const {
    addTask,
    removeActiveTask,
    updateTask,
    removeCompletedTask,
    completeTask,
    uncompleteTask,
  } = TASK_ACTIONS;

  switch (action.type) {
    case addTask:
      return {
        ...state,
        activeTasks: [...state.activeTasks, action.payload],
      };

    case removeActiveTask:
      return {
        ...state,
        activeTasks: state.activeTasks.filter(
          value => value?.dateAdded !== action.payload?.dateAdded,
        ),
      };

    case updateTask:
      return {
        ...state,
        activeTasks: state.activeTasks.map(value => {
          if (action.payload?.dateAdded === value?.dateAdded) {
            return action.payload;
          } else {
            return value;
          }
        }),
      };

    case removeCompletedTask:
      return {
        ...state,
        completedTasks: state.activeTasks.filter(
          value => value?.dateAdded !== action.payload?.dateAdded,
        ),
      };

    case completeTask:
      return {
        ...state,
        activeTasks: state.activeTasks.filter(
          value => value?.dateAdded !== action.payload?.dateAdded,
        ),
        completedTasks: [...state?.completedTasks, action.payload],
      };

    case uncompleteTask:
      return {
        ...state,
        completedTasks: state.activeTasks.filter(
          value => value?.dateAdded !== action.payload?.dateAdded,
        ),
        activeTasks: [...state?.activeTasks, action.payload],
      };

    default:
      return state;
  }
};
