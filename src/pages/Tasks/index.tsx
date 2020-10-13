import React, { useState, useCallback } from 'react';
import { FiPlus } from 'react-icons/fi';

import { useSelector, useDispatch } from 'react-redux';
import { ApplicationState } from '../../store';
import {
  get_finished_tasks,
  get_all_tasks,
  get_unfinished_tasks,
} from '../../store/ducks/tasks/actions';

import Task from '../../components/TaskItem';
import Header from '../../components/Header';
import TaskForm from '../../components/TaskForm';

import { Container, ActionContainer, TasksContainer, Nothing } from './styles';

const Landing: React.FC = () => {
  const [openFormTask, setOpenFormTask] = useState(false);
  const dispatch = useDispatch();

  const user = useSelector((state: ApplicationState) => state.user.profile);

  const tasks = useSelector(
    (state: ApplicationState) => state.tasks.data,
  ).filter(task => task.user_email === user?.email);

  const getAllTasks = useCallback(() => {
    // dispatch(get_all_tasks());
  }, []);

  const getFinishedTasks = useCallback(() => {
    // dispatch(get_finished_tasks());
  }, []);

  const getUnfinished = useCallback(() => {
    // dispatch(get_unfinished_tasks());
  }, []);

  return (
    <>
      <Header />
      <Container>
        <ActionContainer>
          <button type="submit" onClick={() => setOpenFormTask(true)}>
            <FiPlus size={18} color="#e6e6f0" />
            TAREFA
          </button>

          <div>
            <button type="submit" onClick={() => getAllTasks()}>
              Todas tarefas
            </button>
            <button type="submit" onClick={() => getFinishedTasks()}>
              Tarefas finalizadas
            </button>
            <button type="submit" onClick={() => getUnfinished()}>
              Tarefas não finalizadas
            </button>
          </div>
        </ActionContainer>
        <TasksContainer>
          {tasks.map(task => (
            <Task task={task} key={task.id} />
          ))}
        </TasksContainer>
        {!tasks.length && <Nothing>Nenhuma tarefa cadastrada.</Nothing>}
      </Container>
      {openFormTask && <TaskForm setOpenFormTask={setOpenFormTask} />}
    </>
  );
};

export default Landing;
