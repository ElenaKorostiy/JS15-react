import React from 'react';
import { store } from './store/store';
import { Provider } from 'react-redux';
// import { Home } from './pages/home';
import { Products } from './pages/products';

export const App = () => {
    return (
      <Provider store={store}>
        <main>
          {/* <Home/> */}
          <Products/>
        </main>
    </Provider>
  );
};
