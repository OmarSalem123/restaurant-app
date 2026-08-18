import MenuCard from "./MenuCard";
import { menuItems } from "../data/menuItems";

function Menu({ addToCart, cart, decrementItem }) {
  return (
    <section id="items" className="menu-section">
      <div className="section-heading">
        <p className="eyebrow">Our menu</p>
        <h2>Pick today's favourites</h2>
      </div>
      <div className="menu-grid">
        {menuItems.map((i) => (
          <MenuCard
            key={i.id}
            i={i}
            addToCart={addToCart}
            decrementItem={decrementItem}
            qty={cart[i.id]}
          />
        ))}
      </div>
    </section>
  );
}

export default Menu;
