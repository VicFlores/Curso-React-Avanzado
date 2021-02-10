import React from 'react';
import ListCategories from '../components/ListCategories/ListCategories';
import ListPhotoCard from '../components/ListPhotoCard/ListPhotoCard';

const Home = ({ id }) => {
  return (
    <>
      <ListCategories />
      <ListPhotoCard categoryId={id} />
    </>
  );
};

export default Home;
