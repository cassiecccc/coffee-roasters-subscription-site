export function AboutHQ() {
  return (
    <>
      <div className="about-hq">
        <p className="about-hq-title">Our headquarters</p>
        <div className="about-hq-card-wrapper">
          <div className="about-hq-card">
            <img
              src="/assets/about/desktop/illustration-uk.svg"
              alt="illustration of the map of United Kingdom"
            />
            <p className="about-hq-card-title">United Kingdom</p>
            <p className="about-hq-card-body">
              68 Asfordby Rd <br /> Alcaston <br /> SY6 1YA <br /> +44 1241
              918425
            </p>
          </div>

          <div className="about-hq-card">
            <img
              src="/assets/about/desktop/illustration-canada.svg"
              alt="illustration of the map of Canada"
            />
            <p className="about-hq-card-title">Canada</p>
            <p className="about-hq-card-body">
              1528 Eglinton Avenue <br /> Toronto <br /> Ontario M4P 1A6 <br />{" "}
              +1 416 485 2997
            </p>
          </div>

          <div className="about-hq-card">
            <img
              src="/assets/about/desktop/illustration-australia.svg"
              alt="illustration of the map of Australia"
            />
            <p className="about-hq-card-title">Australia</p>
            <p className="about-hq-card-body">
              36 Swanston Street <br /> Kewell <br /> Victoria <br />
              +61 4 9928 3629
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
