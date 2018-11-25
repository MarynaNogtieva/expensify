import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link} from 'react-router-dom'

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
      404! - <Link to='/'>Go home</Link>
    </div>
  )
}

const Header = () => (
  <header>
    <h1> Expensify</h1>
    <Link to='/'> Home </Link>
    <Link to='/create'> Create</Link>
    <Link to='/edit'> Edit</Link>
    <Link to='/help'> Help</Link>
  </header>
);

const routes = (
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

ReactDOM.render(routes, document.getElementById('app'));
