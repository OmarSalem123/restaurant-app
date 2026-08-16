import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Menu from "./components/Menu";

function App() {
  const [cart, setCart] = useState({});

  console.log("Our Items", cart);

  function addToCart(id) {
    setCart((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
  }

  return (
    <div className="app">
      <Header />
      <Hero />
      <Menu addToCart={addToCart} cart={cart} />
    </div>
  );
}

export default App;
