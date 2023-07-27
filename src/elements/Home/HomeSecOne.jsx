export function HomeSecOne() {
  return (
    <div className="home-sec-one">
      <p className="collection-title">our collection</p>
      <div className="home-collection">
        <div className="home-collection-card ">
          <img
            className="home-collection-image"
            src="/assets/home/desktop/image-gran-espresso.png"
            alt="gran espresso coffee bag"
          />
          <div className="home-collection-words-wrapper">
            <p className="home-collection-title">Gran Espresso</p>
            <p className="home-collection-body">
              Light and flavorful blend with cocoa and black pepper for an
              intense experience.
            </p>
          </div>
        </div>

        <div className="home-collection-card">
          <img
            className="home-collection-image"
            src="/assets/home/desktop/image-planalto.png"
            alt="planalto coffee bag"
          />
          <div className="home-collection-words-wrapper">
            <p className="home-collection-title">Planalto</p>
            <p className="home-collection-body">
              Brazilian dark roast with rich and velvety body, and hints of
              fruits and nuts.
            </p>
          </div>
        </div>

        <div className="home-collection-card">
          <img
            className="home-collection-image"
            src="/assets/home/desktop/image-piccollo.png"
            alt="piccollo coffee bag"
          />
          <div className="home-collection-words-wrapper">
            <p className="home-collection-title">Piccollo</p>
            <p className="home-collection-body">
              Mild and smooth blend featuring notes of toasted almond and dried
              cherry.
            </p>
          </div>
        </div>

        <div className="home-collection-card">
          <img
            className="home-collection-image"
            src="/assets/home/desktop/image-danche.png"
            alt="danche coffee bag"
          />
          <div className="home-collection-words-wrapper">
            <p className="home-collection-title">Danche</p>
            <p className="home-collection-body">
              Ethiopian hand-harvested blend densely packed with vibrant fruit
              notes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
