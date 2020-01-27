import React, { Fragment } from 'react';
import Dashboard from './pages/Dashboard';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
// import LoginForm from './pages/LoginForm'
import './App.css';
import LoginForm from './pages/LoginForm';
import NotFound from './pages/NotFound';
import Register from './pages/Register';

function App() {
  return (
    <Fragment>
      <BrowserRouter>
       
        <Switch>
          <Route exact path='/' component={LoginForm}></Route>
          <Route exact path='/dashboard' component={Dashboard}/>
          <Route exact path='/register' component={Register}></Route>
          <Route component={NotFound}></Route>
        </Switch>
       
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
