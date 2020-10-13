import React, { useCallback, useRef } from 'react';

import { FormHandles } from '@unform/core';
import * as Yup from 'yup';

import { useDispatch } from 'react-redux';
import { FiMail, FiLock } from 'react-icons/fi';
import { sign_in_request } from '../../store/ducks/auth/actions';

import Button from '../../components/Button';
import Input from '../../components/Input';

import { Container, Form } from './styles';
import getValidationErrors from '../../utils/getValidationErrors';

interface ISignInFormData {
  email: string;
  password: string;
}

const Landing: React.FC = () => {
  const dispatch = useDispatch();
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(
    async (data: ISignInFormData) => {
      try {
        if (formRef.current) formRef.current.setErrors({});

        const schema = Yup.object().shape({
          email: Yup.string()
            .required('E-mail obrigatório')
            .email('Digite um email válido'),
          password: Yup.string().required('Preencha a senha'),
        });

        await schema.validate(data, { abortEarly: false });

        dispatch(sign_in_request(data.email, data.password));
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          if (formRef.current) formRef.current.setErrors(errors);
        }
      }
    },
    [dispatch],
  );

  return (
    <Container>
      <h1>Efetue login para acessar.</h1>
      <Form onSubmit={handleSubmit} ref={formRef}>
        <Input name="email" icon={FiMail} type="text" placeholder="E-mail" />
        <Input
          name="password"
          icon={FiLock}
          type="password"
          placeholder="Senha"
        />
        <Button type="submit">Entrar</Button>
      </Form>
    </Container>
  );
};

export default Landing;
