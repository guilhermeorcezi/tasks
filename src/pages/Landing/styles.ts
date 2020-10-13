import styled from 'styled-components';
import { Form as Unform } from '@unform/web';

export const Container = styled.div`
  padding: 66px 0;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background: var(--color-primary);
`;

export const AboutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 36px;
    color: var(--color-text-title);
    margin-top: 20px;
  }
`;

export const Form = styled(Unform)`
  background: var(--color-box-base);
  border-radius: 6px;
  width: 350px;
  padding: 20px;

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
