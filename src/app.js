import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route} from 'react-router-dom'

import 'normalize.css/normalize.css';
import './styles/styles.scss';

const ExpenseDashBoardPage = () => {
  <div> 
   this is from my dashboard component
  </div>
};
const routes = (
  <BrowserRouter>
    <Route path="/" component={ExpenseDashBoardPage} />
  </BrowserRouter>
);

ReactDOM.render(<p>boilerplate</p>, document.getElementById('app'));
