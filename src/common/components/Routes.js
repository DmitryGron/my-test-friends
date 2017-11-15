import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './App';
import UsersPage from '../../pages/users/page';
import UserPage from '../../pages/user/page';


export default (
  <Route path="/" component={App}>
    <IndexRoute component={UsersPage} />
    <Route path="user/:id" component={UserPage} />
  </Route>
);
