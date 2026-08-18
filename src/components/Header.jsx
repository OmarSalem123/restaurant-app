import Icon from "../components/icons/Icon";

const navLinks = [
  { href: "#hero", label: "Home" },
  { href: "#menu", label: "Menu" },
  { href: "#about", label: "About Us" },
];

const Header = ({ cartCount, setViewCart }) => {
  return (
    <header className="site-header">
      <div className="site-header_inner">
        <a href="#hero" className="brand">
          <Icon id="logo-mark" className="brand_mark" />
          <span>The Golden Spoon</span>
        </a>
        <nav className="main-nav">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
        <button
          className="icon-btn cart-btn"
          type="button"
          onClick={() => setViewCart(true)}
        >
          <Icon id={"cart-icon"} />
          {cartCount > 0 && <span className="cart-btn_badge">{cartCount}</span>}
        </button>
      </div>
    </header>
  );
};

export default Header;
