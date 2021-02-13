import React from 'react';
import Layout from '../components/Layout/Layout';
import PhotoCardQuery from '../container/PhotoCardQuery';

const Details = ({ detailID }) => {
  return (
    <Layout title={`Fotografiá ${detailID}`}>
      <PhotoCardQuery id={detailID} />
    </Layout>
  );
};

export default Details;
