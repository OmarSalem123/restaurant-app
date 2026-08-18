import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import { menuItems } from "./data/menuItems";
import CartDrawer from "./components/CartDrawer";

function App() {
  const [cart, setCart] = useState({});
  const [viewCart, setViewCart] = useState(false);

  console.log("Our Items", cart);

  function addToCart(id) {
    setCart((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
  }

  function decrementItem(id) {
    setCart((prev) => {
      const nextQty = (prev[id] || 0) - 1;
      const next = { ...prev };

      if (nextQty <= 0) {
        delete next[id];
      } else {
        next[id] = nextQty;
      }

      return next;
    });
  }

  const cartItems = Object.entries(cart).map(([id, qty]) => ({
    item: menuItems.find((item) => item.id === id),
    qty,
  }));
  const cartCount = cartItems.reduce((sum, item) => sum + item.qty, 0);
  return (
    <div className="app">
      <Header cartCount={cartCount} setViewCart={setViewCart} />
      <main>
        <Hero />
        <Menu addToCart={addToCart} decrementItem={decrementItem} cart={cart} />
        <CartDrawer viewCart={viewCart} setViewCart={setViewCart} />
      </main>
    </div>
  );
}

export default App;
