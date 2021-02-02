import React from 'react';
import { MdFavoriteBorder } from 'react-icons/md';
import { Button, Img, ImgWrapper } from './style';

const DEFAULT_IMG =
  'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60';

const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMG }) => {
  return (
    <div>
      <article>
        <a href={`/detail/${id}`}>
          <ImgWrapper>
            <Img src={src} alt="Photo Card" />
          </ImgWrapper>
        </a>
        <Button>
          <MdFavoriteBorder size="32px" />
          {`${likes} me gusta!`}
        </Button>
      </article>
    </div>
  );
};

export default PhotoCard;
