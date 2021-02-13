import React from 'react';
import { gql, useMutation } from '@apollo/client';
import useObserver from '../../hooks/useObserver';
import { Link } from '@reach/router';
import { Img, ImgWrapper, Article, Button } from './style';
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md';

const LIKE_PHOTO = gql`
  mutation likePhoto($input: LikePhoto!) {
    likePhoto(input: $input) {
      id
      liked
      likes
    }
  }
`;

const DEFAULT_IMG =
  'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60';

const Size = '32px';

const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMG, liked }) => {
  const [likeAnonymousPhoto] = useMutation(LIKE_PHOTO, {
    variables: {
      input: { id },
    },
  });

  const { show, element } = useObserver();

  const HandleFavClick = () => {
    likeAnonymousPhoto();
  };

  return (
    <>
      <Article ref={element}>
        {show && (
          <>
            <Link to={`/detail/${id}`}>
              <ImgWrapper>
                <Img src={src} alt="Photo Card" />
              </ImgWrapper>
            </Link>

            <Button onClick={HandleFavClick}>
              {liked ? (
                <MdFavorite color="red" size={Size} />
              ) : (
                <MdFavoriteBorder size={Size} />
              )}
              {`${likes} me gusta!`}
            </Button>
          </>
        )}
      </Article>
    </>
  );
};

export default PhotoCard;
