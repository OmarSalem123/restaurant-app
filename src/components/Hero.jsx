import DishIcon from "./icons/DishIcon";

function Hero() {
  return (
    <section id="#hero" className="hero">
      <div className="hero_text">
        <p className="eyebrow">Fresh · Local · Made with love</p>
        <h1>Good food, good mood.</h1>
        <p className="hero_lead">
          From wood-fired pizza to hand-tossed pasta, every dish on our menu is
          cooked to order and ready to be delivered straight to your door.
        </p>
        <div className="hero_actions">
          <a href="#menu" className="btn btn--primary">
            View Menu
          </a>
          <a href="#about" className="btn btn--ghost">
            Our Story
          </a>
        </div>
      </div>

      <div className="hero_art">
        <div className="hero_plate hero_plate--lg cat-mains">
          <DishIcon id="pizza" />
        </div>
        <div className="hero_plate hero_plate--md cat-desserts">
          <DishIcon id="cupcake" />
        </div>
        <div className="hero_plate hero_plate--sm cat-drinks">
          <DishIcon id="mojito" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
