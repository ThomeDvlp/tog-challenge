/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable import/extensions */
import { createServer } from 'miragejs';
import { render } from 'react-dom';

import { App } from './App';

createServer({
  routes() {
    this.namespace = 'api';
    this.get('/transactions', () => {
      return [
        {
          id: 1,
          title: 'Transection 1',
          amount: 400,
        },
      ];
    });
  },
});

const rootElement = document.getElementById('root');

render(<App />, rootElement);
