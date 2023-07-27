import { useEffect, useState } from "react";

export function PlanSecOne() {
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
      className="plan-sec-one"
      style={
        isXL
          ? {
              backgroundImage: "url(/assets/plan/desktop/bg-steps.png)",
            }
          : isLG || isMD
          ? {
              backgroundImage: "url(/assets/plan/tablet/bg-steps.png)",
            }
          : isSM || isXS
          ? {
              backgroundImage: "url(/assets/plan/mobile/bg-steps.png)",
            }
          : null
      }
    >
      <div className="plan-how-wrapper">
        <div className="plan-how-card">
          <p className="plan-how-number">01</p>
          <p className="plan-how-step">Pick your coffee</p>
          <p className="plan-how-description">
            Select from our evolving range of artisan coffees. Our beans are
            ethically sourced and we pay fair prices for them. There are new
            coffees in all profiles every month for you to try out.
          </p>
        </div>

        <div className="plan-how-card">
          <p className="plan-how-number">02</p>
          <p className="plan-how-step">Choose the frequency</p>
          <p className="plan-how-description">
            Customize your order frequency, quantity, even your roast style and
            grind type. Pause, skip or cancel your subscription with no
            commitment through our online portal.
          </p>
        </div>

        <div className="plan-how-card" id="third-line">
          <p className="plan-how-number">03</p>
          <p className="plan-how-step">Receive and enjoy!</p>
          <p className="plan-how-description">
            We ship your package within 48 hours, freshly roasted. Sit back and
            enjoy award-winning world-class coffees curated to provide a
            distinct tasting experience.
          </p>
        </div>
      </div>
    </div>
  );
}
