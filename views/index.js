import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import configureStore from './configure-store.js';

import Home from './components/home';
import Navbar from './components/navbar';
import Track from './components/track';

import 'antd/dist/antd.css';
import './index.css';

const store = configureStore();
ReactDOM.render(

  <Provider store={store}>
    <BrowserRouter>
      <div className='app'>
        <Switch>
          <Route exact path='/track' component={Track} />
          <Route exact path='/' component={Home} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
