import React from 'react';
import { BrowserRouter, Route, Switch, } from "react-router-dom";
import { ProductList } from "./components/list";
import { ProductInfo } from "./components/info";


import "./App.css"



export const App = () => {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={ProductList} />
          <Route path="/products/:id" component={ProductInfo} />
        </Switch>
    </BrowserRouter>
  );
};

