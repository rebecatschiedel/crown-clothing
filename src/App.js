import React from 'react';
import { Route, Switch } from "react-router-dom";
import './App.css';
import Homepage from "./pages/Homepage.jsx";
import Shop from "./pages/Shop.jsx";

const HatsPage = () => (
<div>
  <h1>Hats</h1>
</div>
);


function App() {

  return (
    <div>
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route path="/shop/hats" component={HatsPage} />
      <Route exact path="/shop" component={Shop} />
    </Switch>
    </div>
  );
}

export default App;
