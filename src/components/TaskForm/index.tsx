import React, { useRef, useCallback } from 'react';
import { FormHandles } from '@unform/core';

import * as Yup from 'yup';
import { v4 } from 'uuid';

import { FiFileText, FiX } from 'react-icons/fi';

import { useDispatch, useSelector } from 'react-redux';
import { ApplicationState } from '../../store';
import {
  add_task_request,
  edit_task_request,
} from '../../store/ducks/tasks/actions';

import { Container, Content, Form, InfoBlock } from './styles';
import Button from '../Button';
import Input from '../Input';
import getValidationErrors from '../../utils/getValidationErrors';
import { ITask } from '../../store/ducks/tasks/types';

interface ITaskFormProps {
  setOpenFormTask: React.Dispatch<React.SetStateAction<boolean>>;
  editMode?: boolean;
  task?: ITask;
}

interface ITaskData {
  title: string;
  description: string;
  taskDate: Date;
}

const TaskForm: React.FC<ITaskFormProps> = ({
  setOpenFormTask,
  editMode,
  task,
}) => {
  const user = useSelector((state: ApplicationState) => state.user.profile);

  const tasks = useSelector(
    (state: ApplicationState) => state.tasks.data,
  ).filter(taskItem => task && taskItem.id === task.id);

  const dispatch = useDispatch();

  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(
    async (data: ITaskData, { reset }) => {
      try {
        if (formRef.current) formRef.current.setErrors({});

        const schema = Yup.object().shape({
          title: Yup.string().required('Título obrigatório'),
          taskDate: Yup.date()
            .required('Insira a data de entrega')
            .typeError('Escolha uma data'),
        });

        await schema.validate(data, { abortEarly: false });

        if (editMode && task) {
          dispatch(
            edit_task_request({
              id: task.id,
              user_email: task?.user_email,
              description: data.description,
              title: data.title,
              taskDate: data.taskDate,
              status: task?.status,
            }),
          );
        } else {
          const id = v4();

          dispatch(
            add_task_request({
              id,
              user_email: user?.email,
              title: data.title,
              description: data.description,
              taskDate: data.taskDate,
              status: false,
            }),
          );
        }

        reset();
        setOpenFormTask(false);
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);
          if (formRef.current) formRef.current.setErrors(errors);
        }
      }
    },
    [dispatch, editMode, user, setOpenFormTask, task],
  );

  return (
    <>
      <Container>
        <Content>
          <FiX onClick={() => setOpenFormTask(false)} className="close-icon" />
          <h1>{editMode ? 'Editar tarefa' : 'Criar tarefa'}</h1>
          <Form
            onSubmit={handleSubmit}
            ref={formRef}
            initialData={editMode ? tasks[0] : undefined}
          >
            <InfoBlock>
              <span>Título</span>
              <Input
                name="title"
                icon={FiFileText}
                type="text"
                placeholder="Título da tarefa"
              />
            </InfoBlock>

            <InfoBlock>
              <span>Descrição</span>
              <Input
                name="description"
                icon={FiFileText}
                type="text"
                placeholder="Descrição da tarefa"
              />
            </InfoBlock>

            <InfoBlock>
              <span>Data de entrega</span>
              <Input
                name="taskDate"
                type="date"
                placeholder="Data de entrega"
              />
            </InfoBlock>
            <Button type="submit">{editMode ? 'Editar' : 'Criar'}</Button>
          </Form>
        </Content>
      </Container>
    </>
  );
};

export default TaskForm;
