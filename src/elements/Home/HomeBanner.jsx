import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export function HomeBanner() {
  let navigate = useNavigate();
  const routeChange = () => {
    let path = "./plan";
    navigate(path);
  };

  const [isXS, setXS] = useState(window.innerWidth <= 374);
  const [isSM, setSM] = useState(window.innerWidth <= 576);
  const [isMD, setMD] = useState(window.innerWidth <= 768);
  const [isLG, setLG] = useState(window.innerWidth <= 993);
  const [isXL, setXL] = useState(window.innerWidth > 993);

  useEffect(() => {
    window.addEventListener("resize", updateXS);
    window.addEventListener("resize", updateSM);
    window.addEventListener("resize", updateMD);
    window.addEventListener("resize", updateLG);
    window.addEventListener("resize", updateXL);

    return () => {
      window.removeEventListener("resize", updateXS);
      window.removeEventListener("resize", updateSM);
      window.removeEventListener("resize", updateMD);
      window.removeEventListener("resize", updateLG);
      window.removeEventListener("resize", updateXL);
    };
  });
  const updateXS = () => {
    setXS(window.innerWidth <= 374);
  };

  const updateSM = () => {
    setSM(window.innerWidth <= 576 && window.innerWidth > 374);
  };

  const updateMD = () => {
    setMD(window.innerWidth <= 768 && window.innerWidth > 576);
  };

  const updateLG = () => {
    setLG(window.innerWidth <= 993 && window.innerWidth > 768);
  };

  const updateXL = () => {
    setXL(window.innerWidth > 993);
  };

  return (
    <div
      className="home-banner"
      style={
        isXL
          ? {
              backgroundImage:
                "url(/assets/home/desktop/image-hero-coffeepress.jpg)",
            }
          : isLG || isMD
          ? {
              backgroundImage:
                "url(/assets/home/tablet/image-hero-coffeepress.jpg)",
            }
          : isSM || isXS
          ? {
              backgroundImage:
                "url(/assets/home/mobile/image-hero-coffeepress.jpg)",
            }
          : null
      }
    >
      <div className="home-banner-wrapper">
        <p className="home-banner-title">
          Great coffee <br /> made simple.
        </p>
        <p className="home-banner-body">
          Start your mornings with the world’s best coffees. Try our expertly
          curated artisan coffees from our best roasters delivered directly to
          your door, at your schedule.
        </p>
        <button onClick={routeChange} className="button-primary">
          Create your plan
        </button>
      </div>
    </div>
  );
}
