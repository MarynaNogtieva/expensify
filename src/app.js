import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route} from 'react-router-dom'

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

const routes = (
  <BrowserRouter>
    <div>
      <Route path="/" component={ ExpenseDashBoardPage } exact={true}/>
      <Route path='/create' component={ AddExpensePage } />
      <Route path="/edit" component={ EditPage } />
      <Route path='/help' component={ HelpPage }  />
    </div>
  </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'));
