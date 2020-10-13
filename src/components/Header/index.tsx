import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import { FaPowerOff } from 'react-icons/fa';

import { useSelector, useDispatch } from 'react-redux';
import { ApplicationState } from '../../store';
import { sign_out } from '../../store/ducks/auth/actions';

import logo from '../../assets/images/logo.png';
import { Container, LogoContainer, ActionContainer } from './styles';

const Header: React.FC = () => {
  const user = useSelector((state: ApplicationState) => state.user.profile);
  const dispatch = useDispatch();

  const handleLogOut = useCallback(() => {
    dispatch(sign_out());
  }, [dispatch]);

  return (
    <Container>
      <LogoContainer>
        <Link to="/">
          <img src={logo} alt="Tasks" />
        </Link>
      </LogoContainer>

      <ActionContainer>
        {user ? (
          <>
            <span>{user.name}</span>
            <button type="button" onClick={handleLogOut}>
              <FaPowerOff size={18} color="#FFF" />
            </button>
          </>
        ) : (
          <Link to="/signin">Fazer Login</Link>
        )}
      </ActionContainer>
    </Container>
  );
};

export default Header;
