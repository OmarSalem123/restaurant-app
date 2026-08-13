import DishIcon from "./icons/DishIcon";
import Icon from "./icons/Icon";

const MenuCard = ({ item }) => {
  return (
    <div className="menu-card">
      <div className="menu-card_image">
        <DishIcon id={item.icon} />
        {item.tags.includes("popular") && (
          <span className="badge badge--popular">
            <Icon id="flame-icon" /> Popular
          </span>
        )}
        {item.tags.includes("veg") && (
          <span className="badge badge--veg">
            <Icon id="leaf-icon" /> Veg
          </span>
        )}
      </div>

      <div className="menu-card_body">
        <div className="menu-card_heading">
          <h3>{item.name}</h3>
          <span className="menu-card_price">{item.price} SAR</span>
        </div>
        <p>{item.description}</p>
      </div>

      <div className="menu-card_footer">
        <button className="btn btn--add" type="button">
          <Icon id="plus-icon" /> Add to Cart
        </button>
      </div>
    </div>
  );
};

export default MenuCard;
