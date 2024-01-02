import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Menu } from './menu/menu';
import { Contact } from './pages/contact/contact';
import { AddBlog } from './pages/about';
import { Blog } from './pages/blog/blog';
import { NotFound } from './components/notfound';
import { PostList } from './pages/blog/postlist';
import { Provider } from "react-redux";
import { store } from "./store/store";

import "./App.css";

export const App = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
      <main >
        <Switch>
          <Route path="/" exact>
            <Menu />
          </Route>
          <Route path="/blog" exact>
            <Blog />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/about">
            <AddBlog />
          </Route>
          <Route path="/blog">
            <PostList />
          </Route>
          <Route component={NotFound} />
        </Switch>
          <div className='main-cover'>
            <h1>Welcome to my blog website!</h1>
          <br />
          <br />
          <div>
            <p>Copyright © 2023</p>
          </div>
        </div>
        </main>
        </Provider>
    </BrowserRouter>
  );
};