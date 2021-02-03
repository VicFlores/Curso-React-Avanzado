import React from 'react';
import useObserver from '../../hooks/useObserver';
import { Img, ImgWrapper, Article, Button } from './style';
import { gql, useMutation } from '@apollo/client';
import useLocalStorage from '../../hooks/useLocalStorage';
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md';

const LIKE_PHOTO = gql`
  mutation likeAnonymousPhoto($input: LikePhoto!) {
    likeAnonymousPhoto(input: $input) {
      id
      liked
      likes
    }
  }
`;

const DEFAULT_IMG =
  'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60';

const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMG }) => {
  const keyLike = `like-${id}`;
  const [liked, setLiked] = useLocalStorage(keyLike, false);
  const [likeAnonymousPhoto] = useMutation(LIKE_PHOTO, {
    variables: {
      input: { id },
    },
  });

  const { show, element } = useObserver();

  const HandleFavClick = () => {
    !liked && likeAnonymousPhoto();
    setLiked(!liked);
  };

  return (
    <>
      <Article ref={element}>
        {show && (
          <>
            <a href={`?detail=${id}`}>
              <ImgWrapper>
                <Img src={src} alt="Photo Card" />
              </ImgWrapper>
            </a>

            <Button onClick={HandleFavClick}>
              {liked ? (
                <MdFavorite color="red" size="32px" />
              ) : (
                <MdFavoriteBorder size="32px" />
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
