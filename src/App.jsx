import React, { useContext } from 'react';
import { Router } from '@reach/router';
import Home from './pages/Home';
import Details from './pages/Details';
import Logo from './components/Logo/Logo';
import NavBar from './components/NavBar/NavBar';
import Favs from './pages/Favs';
import User from './pages/User';
import { GlobalStyle } from './styles/GlobalStyle';
import AppContext from './context/AppContext';
import NotRegisteredUser from './pages/NotRegisterUser';

const App = () => {
  /*   const urlParams = new URLSearchParams(
    location.search
  );  Enrutamiento dinámico 
	const detailID = urlParams.get('detail'); */

  return (
    <>
      <GlobalStyle />
      <Logo />
      <Router>
        <Home path="/" />
        <Home path="/pet/:id" />
        <Details path="/detail/:detailID" />
      </Router>
      <AppContext.Consumer>
        {({ isAuth }) =>
          isAuth ? (
            <Router>
              <Favs path="/favs" />
              <User path="/user" />
            </Router>
          ) : (
            <Router>
              <NotRegisteredUser path="/favs" />
              <NotRegisteredUser path="/user" />
            </Router>
          )
        }
      </AppContext.Consumer>
      <NavBar />
    </>
  );
};

export default App;
