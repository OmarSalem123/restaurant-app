import DishIcon from "./icons/DishIcon";
import Icon from "./icons/Icon";

const MenuCard = ({ i, addToCart, qty }) => {
  return (
    <div className="menu-card">
      <div className="menu-card_image">
        <DishIcon id={i.icon} />
        {i.tags.includes("popular") && (
          <span className="badge badge--popular">
            <Icon id="flame-icon" /> Popular
          </span>
        )}
        {i.tags.includes("veg") && (
          <span className="badge badge--veg">
            <Icon id="leaf-icon" /> Veg
          </span>
        )}
      </div>

      <div className="menu-card_body">
        <div className="menu-card_heading">
          <h3>{i.name}</h3>
          <span className="menu-card_price">{i.price} SAR</span>
        </div>
        <p>{i.description}</p>
      </div>

      <div className="menu-card_footer">
        {qty > 0 ? (
          <div className="stepper">
            <button>
              <Icon id={"minus-icon"} />
            </button>
            <span>{qty}</span>
            <button type="button" onClick={() => addToCart(i.id)}>
              <Icon id={"plus-icon"} />
            </button>
          </div>
        ) : (
          <button
            className="btn btn--add"
            type="button"
            onClick={() => addToCart(i.id)}
          >
            <Icon id="plus-icon" /> Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default MenuCard;
