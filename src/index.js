import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import App from './App';
import AppContext from './context/AppContext';

const client = new ApolloClient({
  uri: 'https://petgram-server-amber.vercel.app/graphql',
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <AppContext.Provider>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </AppContext.Provider>,
  document.getElementById('App')
);
