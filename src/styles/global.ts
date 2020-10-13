import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root{
    height: 100vh;
    background: var(--color-primary);
}

  body {
    background: #F0F2F5 ;
    -webkit-font-smoothing: antialiased
  }

  body, input, button {
    font: 16px "Poppins", sans-serif;
  }

  button {
    cursor: pointer;
    outline:none;
  }

  :root{
    --color-primary: #2b3137;
    --color-secundary: #2ebc4f;
    --color-text-complement: #24292e;
    --color-text-title: #fff;
    --color-text-base: #a9abae;
    --color-box-base: #fff;
    --color-line-in-white: #e6e6f0;
    --color-input-background: #f8f8fc;
    --color-button-text: #ffffff;
    --color-box-footer: #fafafc;
    --color-background-primary:#E5E5E5;
    --color-error:#c53030;

	  font-size: 60%;
}

.Toastify__toast--success {
	background-color: var(--color-text-complement);
  color: var(--color-line-in-white);
  }

  .Toastify__toast--error {
	background-color: var(--color-error);
  color: var(--color-line-in-white);
  }
`;
