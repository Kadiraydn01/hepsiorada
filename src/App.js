import React from "react";
import Homepage from "./components/Homepage";
import ProductPage from "./ProductPage/ProductPage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Products from "./components/Products";
import Contact from "./components/Contact";
import Team from "./components/Team";
import About from "./components/About";
import Loginpage from "./LoginPage/Loginpage";
import SingupPage2 from "./LoginPage/SingupPage2";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { verifyToken } from "./store/action/userAction";
import ShoppingCart from "./components/ShoppingCart";
import Order from "./components/Order";
import Card from "./components/CreditCardForm";
import LastOrders from "./components/LastOrders";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(verifyToken());
  }, [dispatch]);
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route
          path="/products/:categoryId/:productId/:productName"
          component={ProductPage}
        />
        <Route path="/product" component={Products} />
        <Route path="/contact" component={Contact} />
        <Route path="/team" component={Team} />
        <Route path="/about" component={About} />
        <Route path="/signup" component={SingupPage2} />
        <Route path="/login" component={Loginpage} />
        <Route path="/cart" component={ShoppingCart} />
        <Route path="/order" component={Order} />
        <Route path="/card" component={Card} />
        <Route path="/last" component={LastOrders} />
      </Switch>
    </Router>
  );
}

export default App;
