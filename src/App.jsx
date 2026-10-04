import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import CartDrawer from "./components/CartDrawer";
import CheckOutPage from "./components/CheckOutPage";
import { useGetProductsQuery } from "./store/api";
import { menuItems } from "./data/menuItems";

function App() {
  const [cart, setCart] = useState({});
  const [viewCart, setViewCart] = useState(false);
  const [view, setView] = useState("menu");
  const { data: products, isLoading } = useGetProductsQuery();

  console.log("data", products);
  console.log("menuItems", menuItems);

  if(isLoading || !products) {
    return <div>Loading...</div>
  }

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

  function onRemove(id) {
    setCart((prev) => {
      const next = { ...prev };
      delete next[id];
      return next;
    });
  }

  const cartItems = Object.entries(cart).map(([id, qty]) => ({
    item: products?.find((item) => item.id === Number(id)),
    qty,
  }));

  const cartCount = cartItems.reduce((sum, item) => sum + item.qty, 0);
  const subTotal = cartItems.reduce((sum, i) => sum + i.item.price * i.qty, 0);

  function goToCheckout() {
    setView("checkout");
    setViewCart(false);
  }

  function goToMenu() {
    setView("menu");
    setCart({});
  }

  return (
    <div className="app">
      <Header cartCount={cartCount} setViewCart={setViewCart} />
      <main>
        {view === "menu" && (
          <>
            <Hero />
            <Menu
              addToCart={addToCart}
              decrementItem={decrementItem}
              cart={cart}
              products={products}
              isLoading={isLoading}
            />
          </>
        )}
        {view === "checkout" && <CheckOutPage onBack={goToMenu} />}

        <CartDrawer
          viewCart={viewCart}
          setViewCart={setViewCart}
          items={cartItems}
          onAdd={addToCart}
          onDec={decrementItem}
          onRemove={onRemove}
          subTotal={subTotal}
          goToCheckout={goToCheckout}
        />
      </main>
    </div>
  );
}

export default App;
