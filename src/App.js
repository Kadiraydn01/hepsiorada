import React from "react";
import Homepage from "./components/Homepage";
import Products from "./components/Products";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route path="/products" component={Products} />
      </Switch>
    </Router>
  );
}

export default App;
