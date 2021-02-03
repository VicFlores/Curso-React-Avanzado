import { useState } from 'react';

const useLocalStorage = (key, initialValue) => {
  const [storeValue, setStoreValue] = useState(() => {
    try {
      const item = localStorage.getItem(key);
      return item !== null ? JSON.parse(item) : initialValue;
    } catch (error) {
      return new Error(error);
    }
  });

  const setLocalStorage = (value) => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
      setStoreValue(value);
    } catch (error) {
      return new Error(error);
    }
  };

  return [
    storeValue,
    setLocalStorage,
  ]; /* Cuando son funciones se retorna un arreglo */
};

export default useLocalStorage;
