// import React from 'react';
// import { Provider } from 'react-redux';
// import { store } from './store/store';
import {BrowserRout} from "react-router-dom"
import { Settings } from "./pages/settings";


import "./App.css"

export const App = () => {
  return (
    <BrowserRout>
      {/* <Provider store={store}> */}
      <div>
        <Switch>
          <Route path="/" exact>
            <h1>Home</h1>
            <Link to="/setting">Settings</Link>
          </Route>
          <Route path="/setting">
            <Settings/>
          </Route>

        </Switch>
      
      </div>
      {/* </Provider> */}
      </BrowserRout>
  );
};
