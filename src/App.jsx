import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Footer } from './footer/footer';
import { Menu } from './menu/menu';
import { Contact } from './pages/contact';
import { About } from './pages/about';
import { Blog } from './pages/blog';
import { NotFound } from './components/notfound';


import "./App.css"

export const App = () => {
  return (
    <BrowserRouter>
      <main>
        <Switch>
          <Route path="/" exact>
            <Menu />
          </Route>
          <Route path="/footer">
            <Footer />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
           <Route path="/about">
            <About />
          </Route>
          <Route path="/blog">
            <Blog />
          </Route>
          <Route component={NotFound} />
        </Switch>
        <div>
          <h1>Welcome to my blog website!</h1>
          {/* Закоментований код, який вибиває помилку */}
          {/* <div className="posts">
            {posts.map((post, index) => (
              <Post
                key={index}
                username={post.username}
                message={post.message}
                timestamp={post.timestamp}
              />
            ))}
          </div> */}
          <br />
          <br />
          <div>
            <p>Copyright © 2023</p>
          </div>
        </div>
      </main>
    </BrowserRouter>
  );
};