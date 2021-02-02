import React from 'react';
import ListCategories from './components/ListCategories/ListCategories';
import ListPhotoCard from './components/ListPhotoCard/ListPhotoCard';
import Logo from './components/Logo/Logo';

import { GlobalStyle } from './styles/GlobalStyle';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Logo />
      <ListCategories />
      <ListPhotoCard />
    </>
  );
};

export default App;
