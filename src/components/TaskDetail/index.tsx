import React, { useState } from 'react';
import { FiX } from 'react-icons/fi';
import moment from 'moment';

import Button from '../Button';
import { ITask } from '../../store/ducks/tasks/types';

import {
  Container,
  Content,
  InfoBlock,
  InfoTitle,
  InfoText,
  TaskFinished,
} from './styles';
import ConfirmationModal from '../ConfirmationModal';

interface ITaskDetailProps {
  setOpenDetails: React.Dispatch<React.SetStateAction<boolean>>;
  task: ITask;
}

const TaskDetail: React.FC<ITaskDetailProps> = ({ setOpenDetails, task }) => {
  const [confirmationModal, setConfirmationModal] = useState(false);

  return (
    <>
      <Container>
        <Content>
          <FiX onClick={() => setOpenDetails(false)} className="close-icon" />
          <h1>Detalhes</h1>
          <h2>{task.title}</h2>

          <InfoBlock>
            <InfoTitle>Data de entrega</InfoTitle>
            <span>{task.description}</span>
          </InfoBlock>

          <InfoBlock>
            <InfoTitle>Data de entrega</InfoTitle>
            <InfoText>{moment(task.taskDate).format('DD/MM/yyyy')}</InfoText>
          </InfoBlock>

          <InfoBlock>
            <InfoTitle>Status</InfoTitle>
            <InfoText>{task.status ? 'Concluído' : 'Em andamento'}</InfoText>
          </InfoBlock>

          {!task.status ? (
            <>
              <Button type="button" onClick={() => setConfirmationModal(true)}>
                Finalizar tarefa
              </Button>
            </>
          ) : (
            <InfoBlock>
              <TaskFinished>Tarefa concluída</TaskFinished>
            </InfoBlock>
          )}
        </Content>
      </Container>
      {confirmationModal && (
        <ConfirmationModal
          task={task}
          setConfirmationModal={setConfirmationModal}
        />
      )}
    </>
  );
};

export default TaskDetail;
