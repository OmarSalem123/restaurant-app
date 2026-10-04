import { menuItems } from "../data/menuItems";
import MenuCard from "./MenuCard";


function Menu({ addToCart, cart, decrementItem, products, isLoading }) {

  return (
    <section id="items" className="menu-section">
      <div className="section-heading">
        <p className="eyebrow">Our menu</p>
        <h2>Pick today's favourites</h2>
      </div>
      <div className="menu-grid">
        {isLoading ? (<div>Loading...</div>) : (
        products?.map((i) => (
          <MenuCard
            key={i.id}
            i={i}
            addToCart={addToCart}
            decrementItem={decrementItem}
            qty={cart[i.id]}
          />)
        ))}
      </div>
    </section>
  );
}

export default Menu;
