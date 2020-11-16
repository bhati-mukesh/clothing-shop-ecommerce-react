import './App.css';
import HomePage from './pages/home/HomePage';
import {Route,Switch,Redirect} from 'react-router-dom'
import Shop from './pages/shop/Shop';
import Header from './components/header/Header';
import SignInUp from './pages/sign-in-and-sign-up/SignInUp';
import {auth,createUserProfileDocument} from './firebase/firebase.utils';
import { useEffect } from 'react';
import { connect } from 'react-redux'
import { setCurrentUser } from './redux/user/userAction'

function App({setCurrentUser,currentUser}) {
  let unSubscribeFormAuth = null
  useEffect(()=>{
    unSubscribeFormAuth = auth.onAuthStateChanged(async userAuth=>{
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapshot =>{
          console.log('snapshot',snapshot.id)
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data()
          })
        })

      }
      setCurrentUser(userAuth)
    })

    return ()=>{
      unSubscribeFormAuth()
    }
  },[])
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={Shop} />
        <Route exact path="/signin"  render={
          ()=> currentUser ? (<Redirect to="/" />) : <SignInUp /> } />
      </Switch>
    </div>
  );
}

const mapStateToProps = ({user})=>({
  currentUser : user.currentUser
})

const mapDispatchToProps = (dispatch)=>({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps,mapDispatchToProps)(App);
