import React from 'react';
import ReactDOM from 'react-dom/client';

import { Layout } from './Layout';
import { Provider } from './hooks/context';

import GlobalStyle from './styles/global';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider>
      <Layout />
      <GlobalStyle />
    </Provider>
  </React.StrictMode>
);
