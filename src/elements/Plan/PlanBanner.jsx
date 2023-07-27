import { useEffect, useState } from "react";

export function PlanBanner() {
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
    <>
      <div
        className="plan-banner"
        style={
          isXL
            ? {
                backgroundImage:
                  "url(/assets/plan/desktop/image-hero-blackcup.jpg)",
              }
            : isLG || isMD
            ? {
                backgroundImage:
                  "url(/assets/plan/tablet/image-hero-blackcup.jpg)",
              }
            : isSM || isXS
            ? {
                backgroundImage:
                  "url(/assets/plan/mobile/image-hero-blackcup.jpg)",
              }
            : null
        }
      >
        <div className="plan-banner-wrapper">
          <p className="plan-banner-title">Create plan</p>
          <p className="plan-banner-body">
            Coffee the way you wanted it to be. For coffee delivered tomorrow,
            or next week. For whatever brew method you use. For choice, for
            convenience, for quality.
          </p>
        </div>
      </div>
    </>
  );
}
