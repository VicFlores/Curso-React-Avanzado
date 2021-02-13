import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import { Button } from './style';

const SubmitButton = () => {
  const { removeAuth } = useContext(AppContext);

  return <Button onClick={removeAuth}>Cerrar Sesión</Button>;
};

export default SubmitButton;
