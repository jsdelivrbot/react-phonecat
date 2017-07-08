import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
import promise from "redux-promise";

import List from './components/list';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
     <div>
      <Switch>
        <Route path="/" component={List} />
      </Switch>
     </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
