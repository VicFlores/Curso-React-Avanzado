import React, { createContext, useState } from 'react';

export const AppContext = createContext({});

const Provider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(() => {
    return sessionStorage.getItem('token');
  });

  const value = {
    isAuth,
    activateAuth: (token) => {
      setIsAuth(true);
      sessionStorage.setItem('token', token);
    },
    removeAuth: () => {
      setIsAuth(false);
      sessionStorage.removeItem('token');
    },
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default { Provider };
