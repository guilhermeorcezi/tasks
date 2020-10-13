import React, { useCallback, useRef, useState } from 'react';
import { FormHandles } from '@unform/core';
import { differenceInYears } from 'date-fns';
import * as Yup from 'yup';
import axios from 'axios';

import { FiUser, FiClipboard, FiMail, FiLock } from 'react-icons/fi';

import { useDispatch } from 'react-redux';
import { sign_up_request } from '../../store/ducks/auth/actions';

import { Container, AboutWrapper, Form, InfoBlock } from './styles';
import Input from '../../components/Input';
import Header from '../../components/Header';
import Button from '../../components/Button';

import taskBanner from '../../assets/images/todolist.svg';
import cpfMask from '../../utils/cpfMask';
import getValidationErrors from '../../utils/getValidationErrors';

interface ISignUpFormData {
  name: string;
  email: string;
  password: string;
  birthdayDate: Date;
  cpf: string;
}

const Landing: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const [cpfMaskValue, setCpfMaskValue] = useState('');

  const dispatch = useDispatch();
  const today = new Date();

  const handleSubmit = useCallback(
    async (data: ISignUpFormData) => {
      try {
        if (formRef.current) formRef.current.setErrors({});

        const schema = Yup.object().shape({
          name: Yup.string()
            .required('Nome obrigatório')
            .min(4, 'Nome precisa ter 4 caracteres no mínimo'),
          email: Yup.string()
            .required('E-mail obrigatório')
            .email('Digite um email válido'),
          password: Yup.string().min(6, 'No mínimo 6 dígitos'),
          birthdayDate: Yup.date()
            .max(today, 'Insira uma data de nascimento válida')
            .required('Insira sua data de nascimento')
            .typeError('Escolha uma data'),
          cpf: Yup.string().test(
            'cpf',
            'Insira um CPF válido',
            cpf => cpf?.length === 14,
          ),
        });

        await schema.validate(data, { abortEarly: false });

        dispatch(sign_up_request(data));

        // history.push('/dashboard');
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);
          if (formRef.current) formRef.current.setErrors(errors);
        }
      }
    },
    [dispatch, today],
  );

  const setMaskCpf = useCallback(e => {
    setCpfMaskValue(cpfMask(e.target.value));
  }, []);

  return (
    <>
      <Header />
      <Container>
        <AboutWrapper>
          <img src={taskBanner} alt="Do a task" />
          <h1>Tasks for teams</h1>
        </AboutWrapper>

        <Form onSubmit={handleSubmit} ref={formRef}>
          <h2>Cadastre-se</h2>

          <Input
            name="name"
            icon={FiUser}
            type="text"
            placeholder="Nome de usuário"
          />

          <Input name="email" icon={FiMail} type="text" placeholder="E-mail" />

          <Input
            name="password"
            icon={FiLock}
            type="password"
            placeholder="Senha"
          />

          <Input
            name="cpf"
            icon={FiClipboard}
            type="text"
            placeholder="CPF"
            value={cpfMaskValue}
            onChange={setMaskCpf}
          />

          <InfoBlock>
            <span>Data de nascimento</span>
            <Input name="birthdayDate" type="date" />
          </InfoBlock>

          <Button type="submit">Confirmar cadastro</Button>
        </Form>
      </Container>
    </>
  );
};

export default Landing;
