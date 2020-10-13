import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.8);
  height: 108%;
  z-index: 2;

  svg.close-icon {
    position: absolute;
    top: 7px;
    right: 6px;
    cursor: pointer;
  }
`;

export const Content = styled.div`
  width: 300px;
  height: 200px;
  position: relative;
  background: var(--color-button-text);
  padding: 20px 15px;
  border-radius: 8px;

  h1 {
    color: var(--color-text-complement);
    font-size: 24px;
    margin-bottom: 12px;
    text-align: center;
  }

  h2 {
    color: var(--color-primary);
    font-size: 14px;
    margin-bottom: 12px;
  }
`;

export const OkButton = styled.button`
  border: none;
  padding: 10px;
  border-radius: 8px;
  background: var(--color-primary);
  color: var(--color-line-in-white);

  &:hover {
    background: ${shade(0.2, '#2b3137')};
  }
`;

export const CancelButton = styled.button`
  border: none;
  padding: 10px;
  border-radius: 8px;
  background: var(--color-line-in-white);
  color: var(--color-primary);

  &:hover {
    background: ${shade(0.05, '#e6e6f0')};
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;
