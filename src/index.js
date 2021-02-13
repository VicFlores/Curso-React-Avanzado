import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from '@apollo/client';
import App from './App';
import AppContext from './context/AppContext';
import client from '../config/apollo';

ReactDOM.render(
  <AppContext.Provider>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </AppContext.Provider>,
  document.getElementById('App')
);
