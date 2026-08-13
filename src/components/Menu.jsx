import MenuCard from "./MenuCard";
import { menuItems } from "../data/menuItems";

function Menu() {
  return (
    <section id="items" className="Menu-section">
      <div className="section-heading">
        <p className="eyebrow">Our menu</p>
        <h2>Pick today's favourites</h2>
      </div>
      <div className="menu-grid">
        {menuItems.map((item) => (
          <MenuCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}

export default Menu;
