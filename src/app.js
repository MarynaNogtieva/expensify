import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch} from 'react-router-dom'

import 'normalize.css/normalize.css';
import './styles/styles.scss';

const ExpenseDashBoardPage = () => {
 return(
  <div>
   this is from my ExpenseDashBoardPage component
  </div>
 );
};

const AddExpensePage = () => {
  return(
    <div>
    this is from my AddExpensePage  component
   </div>
  )
};

const EditPage = () => {
  return(
    <div>
    this is from my EditPage component
   </div>
  )
};

const HelpPage = () => {
  return(
    <div>
    this is from my HelpPage component
   </div>
  )
};

const NotFoundPage = () => {
  return(
    <div>
      404!
    </div>
  )
}

const routes = (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={ ExpenseDashBoardPage } exact={true}/>
      <Route path='/create' component={ AddExpensePage } />
      <Route path="/edit" component={ EditPage } />
      <Route path='/help' component={ HelpPage }  />
      <Route component={ NotFoundPage } />
    </Switch>
  </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'));
