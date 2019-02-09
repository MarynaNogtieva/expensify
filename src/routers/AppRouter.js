
import React from 'react';

import createHistory from 'history/createBrowserHistory';
import AddExpensePage from '../components/AddExpensePage.js';
import EditPage from '../components/EditPage';

import HelpPage from '../components/HelpPage';
import ExpenseDashBoardPage from '../components/ExpenseDashBoardPage';
import NotFoundPage from '../components/NotFoundPage';
import  LoginPage from '../components/LoginPage';
import { Router, Route, Switch }
 from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

 export const history = createHistory();
 const AppRouter = () => (
  <Router history={history}>
  <div>
   <Switch>
     <PublicRoute path="/" component={ LoginPage } exact={true}/>
     <PrivateRoute path="/dashboard" component={ ExpenseDashBoardPage } />
     <PrivateRoute path='/create' component={ AddExpensePage } />
     <PrivateRoute path="/edit/:id" component={ EditPage } />
     {/* <Route path='/help' component={ HelpPage }  /> */}
     <Route component={ NotFoundPage } />
   </Switch>
   </div>
 </Router>
);

export default AppRouter;