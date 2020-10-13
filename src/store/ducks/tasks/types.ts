export enum TasksTypes {
  ADD_TASK_REQUEST = '@taks/ADD_TASK_REQUEST',
  ADD_TASK_SUCCESS = '@taks/ADD_TASK_SUCCESS',
  ADD_TASK_FAILURE = '@taks/ADD_TASK_FAILURE',
  ALTER_TASK_STATUS = '@taks/ALTER_TASK_STATUS',
  EDIT_TASK_REQUEST = '@taks/EDIT_TASK_REQUEST',
  EDIT_TASK_SUCCESS = '@taks/EDIT_TASK_SUCCESS',
  EDIT_TASK_FAILURE = '@taks/EDIT_TASK_FAILURE',
  REMOVE_TASK = '@taks/REMOVE_TASK_FAILURE',

  GET_ALL_TASKS = '@tasks/GET_ALL_TASKS',
  GET_FINISHED_TASKS = '@tasks/GET_FINISHED_TASKS',
  GET_UNFINISHED_TASKS = '@tasks/GET_UNFINISHED_TASKS',
}

export interface ITask {
  id: string;
  user_email: string | null | undefined;
  title: string;
  description: string;
  taskDate: Date;
  status: boolean;
}

export interface TaskState {
  readonly data: ITask[];
}
