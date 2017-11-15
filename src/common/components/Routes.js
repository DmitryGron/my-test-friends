import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './App';
import UsersPage from '../../pages/users/page';
import HomePage from '../../pages/home/page';


export default (
  <Route path="/" component={App}>
    <IndexRoute component={UsersPage} />
    <Route path="home" component={HomePage} />
  </Route>
);
