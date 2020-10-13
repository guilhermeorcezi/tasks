import styled, { css } from 'styled-components';

import Tooltip from '../Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  hasError: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: var(--color-input-background);
  border-radius: 10px;
  padding: 10px 16px;
  width: 100%;

  border: 2px solid var(--color-input-background);
  color: #666360;

  display: flex;
  align-items: center;

  & + div {
    margin-top: 16px;
  }

  ${props =>
    props.isFocused &&
    css`
      color: var(--color-primary);
      border-color: var(--color-primary);
    `}

  ${props =>
    props.isFilled &&
    css`
      border-color: var(--color-primary);
      color: var(--color-primary);
    `}

  ${props =>
    props.hasError &&
    css`
      border-color: #c53030;
      color: #c53030;
    `}

  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: var(--color-text-complement);

    &::placeholder {
      color: '#666360';
    }
  }

  svg {
    margin-right: 16px;
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;

  svg {
    margin: 0;
  }

  span {
    background: #c53030;
    color: #fff;

    &::before {
      border-color: #c53030 transparent;
    }
  }
`;
