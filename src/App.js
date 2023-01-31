import { useState, useContext } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import CartProvider from "./store/CartProvider";

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const showCart = () => {
    setIsCartOpen(true);
  };

  const hideCart = () => {
    setIsCartOpen(false);
  };

  return (
    <CartProvider>
      {isCartOpen && <Cart closeCart={hideCart} />}
      <Header handleCart={showCart} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
