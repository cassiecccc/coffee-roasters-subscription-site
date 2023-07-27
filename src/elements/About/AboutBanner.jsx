import { useEffect, useState } from "react";

export function AboutBanner() {
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
        className="about-banner"
        style={
          isXL
            ? {
                backgroundImage:
                  "url(/assets/about/desktop/image-hero-whitecup.jpg)",
              }
            : isLG || isMD
            ? {
                backgroundImage:
                  "url(/assets/about/tablet/image-hero-whitecup.jpg)",
              }
            : isSM || isXS
            ? {
                backgroundImage:
                  "url(/assets/about/mobile/image-hero-whitecup.jpg)",
              }
            : null
        }
      >
        <div className="about-banner-wrapper">
          <p className="about-banner-title">About Us</p>
          <p className="about-banner-body">
            Coffeeroasters began its journey of exotic discovery in 1999,
            highlighting stories of coffee from around the world. We have since
            been dedicated to bring the perfect cup - from bean to brew - in
            every shipment.
          </p>
        </div>
      </div>
    </>
  );
}
