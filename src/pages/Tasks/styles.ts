import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: var(--color-primary);
  padding: 20px 30px;
`;

export const ActionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0 20px;

  button {
    background: none;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--color-line-in-white);
    border-radius: 8px;
    height: 35px;
    width: 100px;
    border: 0;
    padding: 0;
    font-size: 100%;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  button:hover {
    color: ${shade(0.2, '#FFF')};
  }

  @media (max-width: 1100px) {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-direction: column;

    > div {
      margin-left: 0px;
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;
      flex-direction: column;

      button {
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
      }
    }
  }

  > div {
    margin-left: 30px;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    button:first-child {
      width: 120px;
    }

    button {
      width: 190px;
    }
  }
`;

export const TasksContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Nothing = styled.div`
  flex-wrap: none;
  display: flex;
  justify-content: center;
  font-size: 14px;
  padding-top: 100px;
  color: var(--color-line-in-white);
`;
