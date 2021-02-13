import React, { useEffect, useState } from 'react';
import usePets from '../../hooks/usePets';
import Category from '../Category/Category';
import { List, Item } from './style';

const API = 'https://petgram-server-amber.vercel.app/categories#';

const ListCategories = () => {
  const [showFixed, setShowFixed] = useState(false);

  const { categories, loading } = usePets(API);

  useEffect(() => {
    const onScroll = (e) => {
      const newShowFixed = window.scrollY > 200;
      showFixed !== newShowFixed && setShowFixed(newShowFixed);
    };

    document.addEventListener('scroll', onScroll);

    return () => document.removeEventListener('scroll', onScroll);
  }, [showFixed]);

  const renderList = (fixed) => (
    <List fixed={fixed}>
      {loading ? (
        <Item key="loading">
          <Category />
        </Item>
      ) : (
        categories.map((category) => (
          <Item key={category.id}>
            <Category {...category} path={`/pet/${category.id}`} />
          </Item>
        ))
      )}
    </List>
  );

  return (
    <>
      {renderList()}
      {showFixed && renderList(true)}
    </>
  );
};

export default ListCategories;
