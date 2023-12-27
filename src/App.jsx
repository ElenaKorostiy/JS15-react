import { Provider } from "react-redux";
import { ProductList } from './pages/productslist';
import { store } from "./store/store";
import { UserList } from "./pages/userslist";
import { UserInfo } from "./store/usersinfo";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


export const App = () => {
  return (
      <Router>
      <Provider store={store}>
        <Switch>

          <Route path="/" exact component={ProductList} />
          <Route path="/users" exact component={UserList} />
          <Route path="/users/:id" component={UserInfo} />
        </Switch>
      </Provider>
    </Router>
  );
};

