import React, { useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import "./style/main.module.css";

function App() {
  const [isCArtShown, setCartShown] = useState(false);
  const showCartHandler = () => {
    setCartShown(true);
  };

  const hideCartHandler = () => {
    setCartShown(false);
  };
  return (
    <>
      {isCArtShown && <Cart onClose={hideCartHandler} />}

      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </>
  );
}

export default App;
