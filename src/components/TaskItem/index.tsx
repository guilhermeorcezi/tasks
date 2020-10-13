import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { remove_task } from '../../store/ducks/tasks/actions';

import TaskDetail from '../TaskDetail';
import { ITask } from '../../store/ducks/tasks/types';

import {
  Container,
  TaskHeader,
  DeleteIcon,
  EditIcon,
  TaskFooter,
} from './styles';
import TaskForm from '../TaskForm';

interface IProps {
  task: ITask;
}

const TaskItem: React.FC<IProps> = ({ task }) => {
  const [openDetails, setOpenDetails] = useState(false);
  const [openFormTask, setOpenFormTask] = useState(false);
  const [editMode, setEditMode] = useState(false);

  const dispatch = useDispatch();

  const handleDeleteTask = useCallback(
    (id: string) => {
      dispatch(remove_task(id));
    },
    [dispatch],
  );

  const handleEditTask = useCallback(() => {
    setEditMode(true);
    setOpenFormTask(true);
  }, []);

  return (
    <>
      <Container>
        <TaskHeader>
          <span>{task.title}</span>
          <DeleteIcon onClick={() => handleDeleteTask(task.id)} />
          <EditIcon onClick={() => handleEditTask()} />
        </TaskHeader>

        <TaskFooter status={task.status}>
          <span>
            Status:
            <strong>{task.status ? ' Concluída' : ' Em andamento'}</strong>
          </span>
          <button type="button" onClick={e => setOpenDetails(true)}>
            Detalhes
          </button>
        </TaskFooter>
      </Container>

      {openDetails && (
        <TaskDetail setOpenDetails={setOpenDetails} task={task} />
      )}
      {editMode && (
        <TaskForm setOpenFormTask={setEditMode} editMode task={task} />
      )}
    </>
  );
};

export default TaskItem;
