import React from 'react';
import { createServer, Model } from 'miragejs'
import ReactDOM from 'react-dom';
import { App } from './App';

createServer({
  models: {
    transaction: Model,
  },

  seeds(server){
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: "Ignite",
          type: "deposit",
          amount: 1998,
          category: "Educação",
          createAt: new Date('2021-07-20, 21:02:00'),
        },
        {
          id: 2,
          title: "UiBoost",
          type: "withdraw",
          amount: 1400,
          category: "Educação",
          createAt: new Date('2021-07-14, 21:02:00'),
        }
      ]
    })
},

  routes() {
    this.namespace = 'api';
    
    this.get('/transactions', () => {
      return this.schema.all('transaction');
    });

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody); 

      return schema.create('transaction', data);
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
