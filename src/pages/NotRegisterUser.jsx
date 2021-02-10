import React from 'react';
import UserForm from '../components/UserForm/UserForm';
import AppContext from '../context/AppContext';
import styled from 'styled-components';

const Figure = styled.figure`
  margin: 0 0 30px;
  padding: 25px;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
`;

const NotRegisteredUser = () => (
  <AppContext.Consumer>
    {({ isAuth, activateAuth }) => {
      return (
        <div>
          <Figure>
            <Img src="https://i.imgur.com/DuR9wz8.png" alt="NotRegisterUser" />
          </Figure>
          <UserForm title="Registrarse" onSubmit={activateAuth} />
          <UserForm title="Iniciar Sesión" onSubmit={activateAuth} />
          <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
        </div>
      );
    }}
  </AppContext.Consumer>
);

export default NotRegisteredUser;
