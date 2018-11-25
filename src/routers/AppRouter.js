
import React from 'react';
import AddExpensePage from '../components/AddExpensePage.js';
import EditPage from '../components/EditPage';
import Header from '../components/Header';
import HelpPage from '../components/HelpPage';
import ExpenseDashBoardPage from '../components/ExpenseDashBoardPage';
import NotFoundPage from '../components/NotFoundPage';
import { BrowserRouter, Route, Switch }
 from 'react-router-dom';

 const AppRouter = () => (
  <BrowserRouter>
  <div>
   <Header />
   <Switch>
     <Route path="/" component={ ExpenseDashBoardPage } exact={true}/>
     <Route path='/create' component={ AddExpensePage } />
     <Route path="/edit" component={ EditPage } />
     <Route path='/help' component={ HelpPage }  />
     <Route component={ NotFoundPage } />
   </Switch>
   </div>
 </BrowserRouter>
);

export default AppRouter;