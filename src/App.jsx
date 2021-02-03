import React from 'react';
import ListCategories from './components/ListCategories/ListCategories';
import ListPhotoCard from './components/ListPhotoCard/ListPhotoCard';
import Logo from './components/Logo/Logo';
import PhotoCardQuery from './container/PhotoCardQuery';

import { GlobalStyle } from './styles/GlobalStyle';

const App = () => {
  const urlParams = new URLSearchParams(
    location.search
  ); /* Enrutamiento dinámico */
  const detailID = urlParams.get('detail');

  return (
    <>
      <GlobalStyle />
      <Logo />
      {detailID ? (
        <PhotoCardQuery id={detailID} />
      ) : (
        <>
          <ListCategories />
          <ListPhotoCard />
        </>
      )}
    </>
  );
};

export default App;
