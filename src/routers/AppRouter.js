
import React from 'react';

import createHistory from 'history/createBrowserHistory';
import AddExpensePage from '../components/AddExpensePage.js';
import EditPage from '../components/EditPage';
import Header from '../components/Header';
import HelpPage from '../components/HelpPage';
import ExpenseDashBoardPage from '../components/ExpenseDashBoardPage';
import NotFoundPage from '../components/NotFoundPage';
import  LoginPage from '../components/LoginPage';
import { Router, Route, Switch }
 from 'react-router-dom';


 export const history = createHistory();
 const AppRouter = () => (
  <Router history={history}>
  <div>
   <Header />
   <Switch>
     <Route path="/" component={ LoginPage } exact={true}/>
     < Route path="/dashboard" component={ ExpenseDashBoardPage } />
     <Route path='/create' component={ AddExpensePage } />
     <Route path="/edit/:id" component={ EditPage } />
     <Route path='/help' component={ HelpPage }  />
     <Route component={ NotFoundPage } />
   </Switch>
   </div>
 </Router>
);

export default AppRouter;