import React from 'react';
import { gql, useQuery } from '@apollo/client';
import PhotoCard from '../components/PhotoCard/PhotoCard';

const GET_SINGLE_PHOTO = gql`
  query getSinglePhoto($id: ID!) {
    photo(id: $id) {
      id
      categoryId
      src
      likes
      liked
      userId
    }
  }
`;

const PhotoCardQuery = ({ id }) => {
  const { loading, error, data } = useQuery(GET_SINGLE_PHOTO, {
    variables: {
      id,
    },
  });

  if (loading) return null;

  const { photo = {} } = data;

  return <PhotoCard {...photo} />;
};

export default PhotoCardQuery;
