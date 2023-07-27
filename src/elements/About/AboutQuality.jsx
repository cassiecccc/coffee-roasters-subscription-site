import { useEffect, useState } from "react";

export function AboutQuality() {
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
        className="about-quality"
        style={
          isXL
            ? {
                backgroundImage: "url(/assets/about/desktop/bg-quality.png)",
              }
            : isLG || isMD
            ? {
                backgroundImage: "url(/assets/about/tablet/bg-quality.png)",
              }
            : isSM || isXS
            ? {
                backgroundImage: "url(/assets/about/mobile/bg-quality.png)",
              }
            : null
        }
      >
        <div className="about-quality-wrapper">
          <div className="about-quality-left">
            <p className="about-quality-title">Uncompromising quality</p>
            <p className="about-quality-body">
              Although we work with growers who pay close attention to all
              stages of harvest and processing, we employ, on our end, a
              rigorous quality control program to avoid over-roasting or baking
              the coffee dry. Every bag of coffee is tagged with a roast date
              and batch number. Our goal is to roast consistent, user-friendly
              coffee, so that brewing is easy and enjoyable.
            </p>
          </div>
          <div
            className="about-quality-right"
            style={
              isXL
                ? {
                    backgroundImage:
                      "url(/assets/about/desktop/image-quality.jpg)",
                  }
                : isLG || isMD
                ? {
                    backgroundImage:
                      "url(/assets/about/tablet/image-quality.jpg)",
                  }
                : isSM || isXS
                ? {
                    backgroundImage:
                      "url(/assets/about/mobile/image-quality.jpg)",
                  }
                : null
            }
          ></div>
        </div>
      </div>
    </>
  );
}
