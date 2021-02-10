import { gql, useQuery } from '@apollo/client';
import React from 'react';
import PhotoCard from '../PhotoCard/PhotoCard';

const withPhotos = gql`
  query getPhotos($categoryId: ID) {
    photos(categoryId: $categoryId) {
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`;

const ListPhotoCard = ({ categoryId }) => {
  const { loading, error, data } = useQuery(withPhotos, {
    variables: { categoryId },
  });

  if (error) return <h2>Internal Server Error</h2>;
  if (loading) return 'Cargando...';

  return (
    <div>
      <ul>
        {data.photos.map((photo) => (
          <PhotoCard key={photo.id} {...photo} />
        ))}
      </ul>
    </div>
  );
};

export default ListPhotoCard;
