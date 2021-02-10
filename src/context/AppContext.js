import React, { createContext, useState } from 'react';

const AppContext = createContext({});

const Provider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);

  const value = {
    isAuth,
    activateAuth: () => {
      setIsAuth(true);
    },
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default {
  Provider,
  Consumer: AppContext.Consumer,
};
