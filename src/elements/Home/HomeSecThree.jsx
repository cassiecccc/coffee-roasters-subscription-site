import { useNavigate } from "react-router-dom";

export function HomeSecThree() {
  let navigate = useNavigate();
  const routeChange = () => {
    let path = "./plan";
    navigate(path);
  };

  return (
    <div className="home-sec-three">
      <p className="home-how-title">How it works</p>
      <div className="home-how-wrapper">
        <div className="home-how-card">
          <p className="home-how-number">01</p>
          <p className="home-how-step">Pick your coffee</p>
          <p className="home-how-description">
            Select from our evolving range of artisan coffees. Our beans are
            ethically sourced and we pay fair prices for them. There are new
            coffees in all profiles every month for you to try out.
          </p>
        </div>

        <div className="home-how-card">
          <p className="home-how-number">02</p>
          <p className="home-how-step">Choose the frequency</p>
          <p className="home-how-description">
            Customize your order frequency, quantity, even your roast style and
            grind type. Pause, skip or cancel your subscription with no
            commitment through our online portal.
          </p>
        </div>

        <div className="home-how-card" id="third-line">
          <p className="home-how-number">03</p>
          <p className="home-how-step">Receive and enjoy!</p>
          <p className="home-how-description">
            We ship your package within 48 hours, freshly roasted. Sit back and
            enjoy award-winning world-class coffees curated to provide a
            distinct tasting experience.
          </p>
        </div>
      </div>
      <button onClick={routeChange} className="button-home-how">
        Create your plan
      </button>
    </div>
  );
}
