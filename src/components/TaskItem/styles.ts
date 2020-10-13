import styled, { css } from 'styled-components';
import { shade } from 'polished';
import { FiX, FiEdit } from 'react-icons/fi';

interface TaskFooterProps {
  status: boolean;
}

export const Container = styled.div`
  width: 304px;
  height: 100px;
  background: var(--color-text-complement);
  padding: 10px 20px;
  border-radius: 8px;
  margin: 20px 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const TaskHeader = styled.div`
  position: relative;

  span {
    color: var(--color-line-in-white);
    text-transform: uppercase;
    font-size: 14px;
  }
`;

export const DeleteIcon = styled(FiX)`
  color: var(--color-text-title);
  position: absolute;
  cursor: pointer;
  top: 0px;
  right: 0px;

  &:hover {
    color: ${shade(0.2, '#fff')};
  }
`;

export const EditIcon = styled(FiEdit)`
  color: var(--color-text-title);
  position: absolute;
  cursor: pointer;
  top: 0px;
  right: 30px;

  &:hover {
    color: ${shade(0.2, '#fff')};
  }
`;

export const TaskFooter = styled.div<TaskFooterProps>`
  color: var(--color-line-in-white);
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${props =>
    props.status
      ? css`
          font-size: 16px;
        `
      : css`
          font-size: 15px;
        `}

  button {
    border: none;
    padding: 3px;
    border-radius: 4px;
  }

  button:hover {
    background: ${shade(0.2, '#fff')};
  }
`;
