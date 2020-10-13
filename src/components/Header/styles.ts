import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  padding: 15px 60px 0 60px;
  justify-content: space-between;
  align-items: center;
  background: var(--color-primary);
`;

export const LogoContainer = styled.div`
  img {
    max-width: 90px;
  }
`;

export const ActionContainer = styled.div`
  display: flex;
  align-items: center;

  span {
    color: var(--color-text-title);
    text-transform: uppercase;
    font-size: 12px;
    line-height: 8px;
  }

  a {
    color: var(--color-text-title);
    text-transform: uppercase;
    font-size: 12px;
    line-height: 8px;
    text-decoration: none;
    transition: 0.3s;
  }

  a:hover {
    color: var(--color-line-in-white);
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--color-text-complement);
    border-radius: 8px;
    height: 35px;
    width: 35px;
    margin-left: 20px;
    border: 0;
    padding: 0;
    font-size: 100%;
    font-family: inherit;
    cursor: pointer;
  }
`;
