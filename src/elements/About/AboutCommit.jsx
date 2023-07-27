import { useEffect, useState } from "react";

export function AboutCommit() {
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
      <div className="about-commit">
        <div
          className="about-commit-left"
          style={
            isXL
              ? {
                  backgroundImage:
                    "url(/assets/about/desktop/image-commitment.jpg)",
                }
              : isLG || isMD
              ? {
                  backgroundImage:
                    "url(/assets/about/tablet/image-commitment.jpg)",
                }
              : isSM || isXS
              ? {
                  backgroundImage:
                    "url(/assets/about/mobile/image-commitment.jpg)",
                }
              : null
          }
        ></div>
        <div className="about-commit-right">
          <p className="about-commit-title">Our commitment</p>
          <p className="about-commit-body">
            We’re built on a simple mission and a commitment to doing good along
            the way. We want to make it easy for you to discover and brew the
            world’s best coffee at home. It all starts at the source. To locate
            the specific lots we want to purchase, we travel nearly 60 days a
            year trying to understand the challenges and opportunities in each
            of these places. We collaborate with exceptional coffee growers and
            empower a global community of farmers through with well above
            fair-trade benchmarks. We also offer training, support farm
            community initiatives, and invest in coffee plant science. Curating
            only the finest blends, we roast each lot to highlight tasting
            profiles distinctive to their native growing region.
          </p>
        </div>
      </div>
    </>
  );
}
