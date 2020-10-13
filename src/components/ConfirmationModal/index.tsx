import React, { useCallback } from 'react';

import { useDispatch } from 'react-redux';
import { alter_task_status } from '../../store/ducks/tasks/actions';
import { ITask } from '../../store/ducks/tasks/types';

import {
  Container,
  Content,
  OkButton,
  CancelButton,
  ButtonGroup,
} from './styles';

interface IConfirmationModalProps {
  setConfirmationModal: React.Dispatch<React.SetStateAction<boolean>>;
  task: ITask;
}

const ConfirmationModal: React.FC<IConfirmationModalProps> = ({
  setConfirmationModal,
  task,
}) => {
  const dispatch = useDispatch();

  const handleAlterTaskStatus = useCallback(
    (id: string) => {
      dispatch(alter_task_status(id));
      setConfirmationModal(false);
    },
    [dispatch, setConfirmationModal],
  );

  return (
    <Container>
      <Content>
        <h1>Finalizar tarefa</h1>
        <h2>Tem certeza que gostaria de finalizar a tarefa?</h2>

        <ButtonGroup>
          <OkButton
            type="button"
            onClick={() => handleAlterTaskStatus(task.id)}
          >
            Finalizar
          </OkButton>
          <CancelButton
            type="button"
            onClick={() => setConfirmationModal(false)}
          >
            Cancelar
          </CancelButton>
        </ButtonGroup>
      </Content>
    </Container>
  );
};

export default ConfirmationModal;
