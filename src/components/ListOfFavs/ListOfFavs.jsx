import React from 'react';
import { gql, useQuery } from '@apollo/client';
import { Grid, Link, Image } from './style';

const GET_FAVORITES = gql`
  query getFavs {
    favs {
      id
      categoryId
      src
      likes
      userId
    }
  }
`;

const ListOfFavs = () => {
  const { data, loading, error } = useQuery(GET_FAVORITES, {
    fetchPolicy: 'network-only',
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  const { favs } = data;

  return (
    <Grid>
      {favs.map((fav) => (
        <Link to={`/detail/${fav.id}`} key={fav.id}>
          <Image src={fav.src} alt="My Favorites images" />
        </Link>
      ))}
    </Grid>
  );
};

export default ListOfFavs;
