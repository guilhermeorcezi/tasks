import { action } from 'typesafe-actions';
import { TasksTypes, ITask } from './types';

export const add_task_request = (Task: ITask) =>
  action(TasksTypes.ADD_TASK_REQUEST, Task);

export const add_task_success = (Task: ITask) =>
  action(TasksTypes.ADD_TASK_SUCCESS, Task);

export const add_task_failure = () => action(TasksTypes.ADD_TASK_FAILURE);

export const edit_task_request = (Task: ITask) =>
  action(TasksTypes.EDIT_TASK_REQUEST, Task);

export const edit_task_success = (Task: ITask) =>
  action(TasksTypes.EDIT_TASK_SUCCESS, Task);

export const edit_task_failure = () => action(TasksTypes.EDIT_TASK_FAILURE);

export const remove_task = (id: string) =>
  action(TasksTypes.REMOVE_TASK, { id });

export const alter_task_status = (id: string) =>
  action(TasksTypes.ALTER_TASK_STATUS, { id });

export const get_all_tasks = () => action(TasksTypes.GET_ALL_TASKS);

export const get_finished_tasks = () => action(TasksTypes.GET_FINISHED_TASKS);

export const get_unfinished_tasks = () => action(TasksTypes.GET_UNFINISHED_TASKS);
