import DishIcon from "./icons/DishIcon";
import Icon from "./icons/Icon";

const CartItem = ({ item, qty, onAdd, onDec, onRemove }) => {
  return (
    <li className="cart-line">
      <div className="cart-line_image">
        <DishIcon id={item.icon} />
      </div>
      <div className="cart-line_info">
        <div className="cart-line_heading">
          <h4>{item.name}</h4>
          <button
            className="icon-btn cart-line_remove"
            type="button"
            onClick={() => onRemove(item.id)}
          >
            <Icon id="trash-icon" />
          </button>
        </div>
        <span className="cart-line_unit">{item.price} SAR each</span>

        <div className="cart-line_footer">
          <div className="stepper stepper--sm">
            <button onClick={() => onDec(item.id)}>
              <Icon id="minus-icon" />
            </button>
            <span>{qty}</span>
            <button onClick={() => onAdd(item.id)}>
              <Icon id="plus-icon" />
            </button>
          </div>
          <span className="cart-line_total">{item.price * qty} SAR</span>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
