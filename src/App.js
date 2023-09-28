import React from "react";
import Homepage from "./components/Homepage";
import ProductPage from "./ProductPage/ProductPage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route path="/products" component={ProductPage} />
      </Switch>
    </Router>
  );
}

export default App;
