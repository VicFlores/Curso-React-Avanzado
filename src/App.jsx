import React, { useContext, lazy, Suspense } from 'react';
import { AppContext } from './context/AppContext';
import { Redirect, Router } from '@reach/router';
import Home from './pages/Home';
import Details from './pages/Details';
import User from './pages/User';
import NotRegisteredUser from './pages/NotRegisterUser';
import Logo from './components/Logo/Logo';
import NavBar from './components/NavBar/NavBar';
import { GlobalStyle } from './styles/GlobalStyle';
import NotFound from './pages/NotFound';

const App = () => {
  const { isAuth } = useContext(AppContext);

  const Favs = lazy(() => import('./pages/Favs'));

  /* lazy y suspense nos ayudan a evitar cargar toda la aplicación de golpe */

  return (
    <Suspense fallback={<div />}>
      <GlobalStyle />
      <Logo />
      <Router>
        <NotFound default />
        <Home path="/" />
        <Home path="/pet/:id" />
        <Details path="/detail/:detailID" />
        {!isAuth && <NotRegisteredUser path="/login" />}
        {!isAuth && <Redirect noThrow from="/favs" to="/login" />}
        {!isAuth && <Redirect noThrow from="/user" to="/login" />}
        {isAuth && <Redirect noThrow from="/login" to="/" />}
        <Favs path="/favs" />
        <User path="/user" />
      </Router>
      <NavBar />
    </Suspense>
  );
};

export default App;
