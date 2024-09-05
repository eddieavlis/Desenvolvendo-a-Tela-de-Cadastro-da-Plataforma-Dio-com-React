import React from 'react';
import { useNavigate } from 'react-router-dom'; // Importando useNavigate
import logo from '../../assets/logo-dio.png';
import { Button } from '../Button';
import { Container, Wrapper, BuscarInputContainer, Input, Row, Menu, MenuRight, UserPicture } from './styles';

const Header = ({ autenticado }) => {
  const navigate = useNavigate(); // Inicializando useNavigate

  const handleLoginClick = () => {
    navigate('/login'); // Redireciona para a página de login
  };

  const handleRegisterClick = () => {
    navigate('/register'); // Redireciona para a página de registro
  };

  return (
    <Wrapper>
      <Container>
        <Row>
          <img src={logo} alt="Logo da dio" />
          {autenticado ? (
            <>
              <BuscarInputContainer>
                <Input placeholder='Buscar...' />
              </BuscarInputContainer>
              <Menu>Live Code</Menu>
              <Menu>Global</Menu>
            </>
          ) : null}
        </Row>
        <Row>
          {autenticado ? (
            <UserPicture src="https://avatars.githubusercontent.com/u/45184516?v=4" />
          ) : (
            <>
              <MenuRight href="/">Home</MenuRight>
              <Button title="Entrar" onClick={handleLoginClick} />
              <Button title="Cadastrar" onClick={handleRegisterClick} /> {/* Adicionando o onClick */}
            </>
          )}
        </Row>
      </Container>
    </Wrapper>
  );
};

export { Header };
