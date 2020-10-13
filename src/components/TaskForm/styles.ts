import styled from 'styled-components';
import { Form as Unform } from '@unform/web';

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
  width: 400px;
  height: 450px;
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
    font-size: 18px;
    margin-bottom: 12px;
  }
`;

export const Form = styled(Unform)`
  border-radius: 6px;
  padding: 20px 30px;

  h2 {
    font-size: 24px;
    color: var(--color-primary);
    margin-bottom: 12px;
  }
`;

export const InfoBlock = styled.div`
  color: var(--color-primary);
  margin-bottom: 20px;
  display: grid;
`;
