import CartItem from "./CartItem";
import Icon from "./icons/Icon";

function CartDrawer({
  viewCart,
  setViewCart,
  items,
  onAdd,
  onDec,
  onRemove,
  subTotal,
  goToCheckout,
}) {
  console.log(items);
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

        {items.length <= 0 ? (
          <div className="cart-empty">
            <Icon id="cart-icon" />
            <p>You have no items selected yet</p>
            <span>Add a dish from the menu to get started</span>
          </div>
        ) : (
          <>
            <ul className="cart-lines">
              {items.map(({ item, qty }) => (
                <CartItem
                  key={item.id}
                  item={item}
                  qty={qty}
                  onAdd={onAdd}
                  onDec={onDec}
                  onRemove={onRemove}
                />
              ))}
            </ul>

            <div className="cart-drawer_footer">
              <div className="cart-drawer_subtotal">
                <span>Subtotal</span>
                <strong>{subTotal} SAR</strong>
              </div>
              <p className="cart-drawer_hint">
                Delivery Fee will be calculated in the next page
              </p>
              <button
                className="btn btn--primary btn--full"
                onClick={() => goToCheckout()}
              >
                Go To Checkout
              </button>
            </div>
          </>
        )}
      </aside>
    </>
  );
}

export default CartDrawer;
