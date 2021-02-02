import React from 'react';
import PhotoCard from '../PhotoCard/PhotoCard';
import { photos } from '../../../api/db.json';

const ListPhotoCard = () => {
  return (
    <div>
      <ul>
        {photos.map((photo) => (
          <PhotoCard key={photo.id} {...photo} />
        ))}
      </ul>
    </div>
  );
};

export default ListPhotoCard;
