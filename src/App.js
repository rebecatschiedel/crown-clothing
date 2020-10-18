import React from 'react';
import { Redirect, Route, Switch } from "react-router-dom";
import './App.css';
import Header from './components/Header';
import Homepage from "./pages/Homepage.jsx";
import Shop from "./pages/Shop.jsx";
import SignInAndSignUp from './pages/SignInAndSignUp';
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { connect } from 'react-redux';
import { setCurrentUser } from "./redux/user/user.actions";


class App extends React.Component {

  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
          });
        });
      } else {
        setCurrentUser(userAuth);
      }
    });
  }
  
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  
  render () {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={ Homepage } />
          <Route 
          exact path="/signin" 
          render={() => this.props.currentUser ? (<Redirect to="/" />) : (<SignInAndSignUp />)} />
          <Route exact path="/shop" component={ Shop } />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
