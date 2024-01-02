import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Blog } from './pages/Blog/blog';
import { Home } from './pages/Home/home';
import './App.css';

6
export const App = () => {
  return (
    <div className='container'>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/blog/:id' component={Blog} />
        <Redirect to='/' />
      </Switch>
    </div>
  );
};

