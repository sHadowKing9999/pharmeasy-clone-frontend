import React from "react";
import Home from "./Pages/Home";
import Checkout from "./Pages/Checkout";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Signin from "./Pages/Signin";
import Signup from "./Pages/Signup";
function App() {
  return (
    <div className="app bg-gray-100">
      <Router>
        <Switch>
          <Route exact path="/checkout">
            <Checkout />
          </Route>
          <Route exact path="/login">
            <Signin />
          </Route>
          <Route exact path="/signup">
            <Signup />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
