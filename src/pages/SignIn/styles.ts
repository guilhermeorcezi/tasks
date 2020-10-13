import styled from 'styled-components';
import { Form as Unform } from '@unform/web';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: var(--color-primary);

  h1 {
    font-size: 28px;
    color: var(--color-line-in-white);
    margin-bottom: 12px;
  }
`;

export const Form = styled(Unform)`
  background: var(--color-box-footer);
  border-radius: 6px;
  padding: 30px;
  width: 400px;

  h2 {
    font-size: 24px;
    color: var(--color-primary);
    margin-bottom: 12px;
  }
`;
