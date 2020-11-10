import './App.css';
import HomePage from './pages/home/HomePage';
import {Route,Switch} from 'react-router-dom'
import Shop from './pages/shop/Shop';
import Header from './components/header/Header';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={Shop} />
      </Switch>
    </div>
  );
}

export default App;
