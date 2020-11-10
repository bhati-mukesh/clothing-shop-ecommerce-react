import './App.css';
import HomePage from './pages/home/HomePage';
import {Route,Switch} from 'react-router-dom'
import Shop from './pages/shop/Shop';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={Shop} />
      </Switch>
    </div>
  );
}

export default App;
