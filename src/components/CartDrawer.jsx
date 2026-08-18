import Icon from "./icons/Icon";

function CartDrawer({ viewCart, setViewCart }) {
  console.log(viewCart);
  return (
    <>
      <div
        className={`cart-backdrop ${viewCart ? "is-visible" : ""}`}
        onClick={() => setViewCart(false)}
      ></div>
      <aside className={`cart-drawer ${viewCart ? "is-open" : ""} `}>
        <div className="cart-drawer_header">
          <h2>
            <Icon id={"cart-icon"} /> Your Order
          </h2>
          <button
            type="button"
            className="icon-btn"
            onClick={() => setViewCart(false)}
          >
            <Icon id="close-icon" />
          </button>
        </div>

        <div className="cart-empty">
          <Icon id="cart-icon" />
          <p>You have no items selected yet</p>
          <span>Add a dish from the menu to get started</span>
        </div>
      </aside>
    </>
  );
}

export default CartDrawer;
