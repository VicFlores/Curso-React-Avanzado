import { gql, useQuery } from '@apollo/client';
import React from 'react';
import PhotoCard from '../PhotoCard/PhotoCard';

const withPhotos = gql`
  query getPhotos($categoryID: ID) {
    photos(categoryId: $categoryID) {
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`;

const ListPhotoCard = () => {
  const { loading, error, data } = useQuery(withPhotos, {
    variables: { categoryID: 1 },
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
