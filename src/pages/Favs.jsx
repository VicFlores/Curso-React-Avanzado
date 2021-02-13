import React from 'react';
import ListOfFavs from '../components/ListOfFavs/ListOfFavs';
import Layout from '../components/Layout/Layout';

const Favs = () => {
  return (
    <Layout title="Tus favoritos" subtitle="Tu lista de mascotas favoritas">
      <ListOfFavs />
    </Layout>
  );
};

export default Favs;
