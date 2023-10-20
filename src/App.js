import React from "react";
import Homepage from "./components/Homepage";
import ProductPage from "./ProductPage/ProductPage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Products from "./components/Products";
import Contact from "./components/Contact";
import Team from "./components/Team";
import About from "./components/About";
import Loginpage from "./LoginPage/Loginpage";

import LoginPage2 from "./LoginPage/LoginPage2";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route path="/products" component={ProductPage} />
        <Route path="/product" component={Products} />
        <Route path="/contact" component={Contact} />
        <Route path="/team" component={Team} />
        <Route path="/about" component={About} />
        <Route path="/login" component={LoginPage2} />
        <Route path="/register" component={Loginpage} />
      </Switch>
    </Router>
  );
}

export default App;
