export function HomeSecTwo() {
  return (
    <div className="home-sec-two">
      <div className="home-why">
        <p className="home-why-title">Why choose us?</p>
        <p className="home-why-body">
          A large part of our role is choosing which particular coffees will be
          featured in our range. This means working closely with the best coffee
          growers to give you a more impactful experience on every level.
        </p>
      </div>
      <div className="home-why-card-wrapper">
        <div className="home-why-card">
          <img
            className="home-why-card-image"
            src="/assets/home/desktop/icon-coffee-bean.svg"
            alt="coffee bean icon"
          />
          <div className="home-why-words-wrapper">
            <p className="home-why-card-title">Best quality</p>
            <p className="home-why-card-body">
              Discover an endless variety of the world’s best artisan coffee
              from each of our roasters.
            </p>
          </div>
        </div>

        <div className="home-why-card">
          <img
            className="home-why-card-image"
            src="/assets/home/desktop/icon-gift.svg"
            alt="coffee bean icon"
          />
          <div className="home-why-words-wrapper">
            <p className="home-why-card-title"> Exclusive benefits</p>
            <p className="home-why-card-body">
              Special offers and swag when you subscribe, including 30% off your
              first shipment.
            </p>
          </div>
        </div>

        <div className="home-why-card">
          <img
            className="home-why-card-image"
            id="truck-image"
            src="/assets/home/desktop/icon-truck.svg"
            alt="coffee bean icon"
          />
          <div className="home-why-words-wrapper">
            <p className="home-why-card-title"> Free shipping </p>
            <p className="home-why-card-body">
              We cover the cost and coffee is delivered fast. Peak freshness:
              guaranteed.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
