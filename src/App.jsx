import { BrowserRouter as Router, Route, Link, Switch  } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { Home } from './Home/Home';
import { Contact } from './Contact/Contact';
import { Sports } from './posts/sports';
import { Travel } from './posts/travel';
import { Shopping } from './posts/shopping';
import { Food } from './posts/food';
import { City } from './posts/city';
import { Adventure } from './posts/adventure';
import { NotFound } from './components/notfound';

import './App.css';



export const App = () => {
  return (
    <Router>
      <Provider store={store}>
        <div>
          <nav className='menu'>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </nav> 
          <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/posts/adventure" component={Adventure} />
        <Route path="/posts/city" component={City} />
        <Route path="/posts/food" component={Food} />
        <Route path="/posts/shopping" component={Shopping} />
        <Route path="/posts/sports" component={Sports} />
        <Route path="/posts/travel" component={Travel} />      
       
          <Route path="*" component={NotFound} />
          </Switch>
        </div>
      </Provider>
    </Router>
  );
};
