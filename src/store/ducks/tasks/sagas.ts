import { put } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { ITask } from './types';

import {
  add_task_success,
  add_task_failure,
  remove_task,
  alter_task_status,
  edit_task_success,
  edit_task_failure,
} from './actions';

interface TaskInterface {
  type: string;
  payload: ITask;
}
interface ITaskId {
  type: string;
  payload: {
    id: string;
  };
}

export function* addTask({ payload }: TaskInterface): any {
  try {
    yield put(add_task_success(payload));
    toast.success('Task cadastrada');
  } catch (err) {
    toast.error('Erro inesperado. Tente novamente');
    yield add_task_failure();
  }
}

export function* editTask({ payload }: TaskInterface): any {
  try {
    yield put(edit_task_success(payload));
    toast.success('A tarefa foi editada');
  } catch (err) {
    toast.error('Erro inesperado. Tente novamente');
    edit_task_failure();
  }
}

export function alterTaskStatus({ payload }: ITaskId): any {
  try {
    put(alter_task_status(payload.id));
    toast.success('Tarefa concluída');
  } catch (err) {
    toast.error('Erro inesperado. Tente novamente');
  }
}

export function removeTask({ payload }: ITaskId): any {
  try {
    put(remove_task(payload.id));
    toast.success('Tarefa removida');
  } catch (err) {
    toast.error('Erro inesperado. Tente novamente');
  }
}
