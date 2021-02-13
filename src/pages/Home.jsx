import React from 'react';
import ListCategories from '../components/ListCategories/ListCategories';
import ListPhotoCard from '../components/ListPhotoCard/ListPhotoCard';
import { Helmet } from 'react-helmet';

const Home = ({ id }) => {
  return (
    <>
      <Helmet>
        <title>Tu app de fotos de mascotas | Petgram</title>
        <meta
          name="description"
          content="Podrás encontrar fotos de animales domésticos y muy bonitos"
        />
      </Helmet>

      <ListCategories />
      <ListPhotoCard categoryId={id} />
    </>
  );
};

export default Home;
