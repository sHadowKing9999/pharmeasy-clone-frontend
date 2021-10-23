import React from "react";
import Home from "./Pages/Home";
import Checkout from "./Pages/Checkout";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Signin from "./Pages/Signin";
import Signup from "./Pages/Signup";
import { useSelector } from "react-redux";
import LoadingScreen from "./component/LoadingScreen";
function App() {
  const loading = useSelector((state) => state.basket.loading);
  return (
    <div className="app bg-gray-100">
      <LoadingScreen loading={loading} />
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
