import './App.css';
import HomePage from './pages/home/HomePage';
import {Route,Switch} from 'react-router-dom'
import Shop from './pages/shop/Shop';
import Header from './components/header/Header';
import SignInUp from './pages/sign-in-and-sign-up/SignInUp';
import {auth} from './firebase/firebase.utils';
import { useEffect, useState } from 'react';

function App() {
  const [currentUser,setCurrentUser] = useState(null);
  let unSubscribeFormAuth = null
  useEffect(()=>{
    unSubscribeFormAuth = auth.onAuthStateChanged(user=>{
      setCurrentUser(user);
      console.log(user)
    })

    return ()=>{
      unSubscribeFormAuth()
    }
  },[])
  return (
    <div>
      <Header currentUser={currentUser} />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={Shop} />
        <Route exact path="/signin" component={SignInUp} />
      </Switch>
    </div>
  );
}

export default App;
