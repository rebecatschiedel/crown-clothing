import React from 'react';
import { Route, Switch } from "react-router-dom";
import './App.css';
import Header from './components/Header';
import Homepage from "./pages/Homepage.jsx";
import Shop from "./pages/Shop.jsx";
import SignInAndSignUp from './pages/SignInAndSignUp';
import { auth } from "./firebase/firebase.utils";


class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });
    });
  }
  
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  
  render () {
    return (
      <div>
      <Header currentUser = { this.state.currentUser }/>
      <Switch>
        <Route exact path="/" component={ Homepage } />
        <Route exact path="/signin" component={ SignInAndSignUp } />
        <Route exact path="/shop" component={ Shop } />
      </Switch>
      </div>
    );
  }
}

export default App;
