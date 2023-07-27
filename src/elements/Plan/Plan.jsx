import { useState, useEffect } from "react";
import { PlanBanner } from "./PlanBanner";
import { PlanSecOne } from "./PlanSecOne";
import { RenderAccordionItem } from "./PlanSecTwo/RenderAccordionItem.jsx";
import { OPTIONS } from "./PlanSecTwo/accordionCollection.js";
import { OrderSummary } from "./PlanSecTwo/OrderSummary";

export function Plan() {
  const [options] = useState(OPTIONS);
  const [isNotMobile, setNotMobile] = useState(window.innerWidth > 576);

  const [menuPref, setMenuPref] = useState(true);
  const [menuBean, setMenuBean] = useState(false);
  const [menuQuantity, setMenuQuantity] = useState(false);
  const [menuGrind, setMenuGrind] = useState(false);
  const [menuDelivery, setMenuDelivery] = useState(false);

  const [drink, setDrink] = useState("Capsule");
  const [type, setType] = useState("_____");
  const [quantity, setQuantity] = useState("_____");
  const [grind, setGrind] = useState("_____");
  const [frequency, setFrequency] = useState("_____");

  const [price, setPrice] = useState("");
  const [showModal, setShowModal] = useState(false);

  const [isGrindDisabled, setIsGrindDisabled] = useState(false);

  const [defaultChecked, setDefaultChecked] = useState("Capsule");

  const updateMobile = () => {
    setNotMobile(window.innerWidth > 576);
  };
  useEffect(() => {
    window.addEventListener("resize", updateMobile);
    return () => window.removeEventListener("resize", updateMobile);
  });

  useEffect(() => {
    setDefaultChecked("");
  }, []);

  useEffect(() => {
    if (drink === "Capsule") {
      setIsGrindDisabled(true);
    } else {
      setIsGrindDisabled(false);
    }
  }, [drink]);

  const closeModal = () => {
    setShowModal(false);
  };
  const show = () => {
    setShowModal(true);
    switch (frequency) {
      case " Every Week":
        setPrice("$14.00/mo");
        break;
      case " Every 2 Weeks":
        setPrice("$17.25/mo");
        break;
      case " Every Month":
        setPrice("$22.50/mo");
        break;
      default:
        return price;
    }
  };

  const buttonDisabled =
    drink !== "_____" &&
    type !== "_____" &&
    quantity !== "_____" &&
    frequency !== "_____"
      ? false
      : true;

  const buttonActive =
    drink !== "_____" &&
    type !== "_____" &&
    quantity !== "_____" &&
    grind !== "_____" &&
    frequency !== "_____"
      ? false
      : true;

  return (
    <>
      <div className="plan-page">
        <PlanBanner />
        <PlanSecOne />
        <div className="plan-sec-two">
          <div className="plan-sec-two-left">
            <div className="plan-menu">
              <ul>
                <li id="menu-first" className={menuPref ? "li-selected" : null}>
                  <span className="li-number">01</span>{" "}
                  <span className="li-body">Preferences</span>
                </li>
                <li className={menuBean ? "li-selected" : null}>
                  <span className="li-number">02</span>{" "}
                  <span className="li-body">Bean Type</span>
                </li>
                <li className={menuQuantity ? "li-selected" : null}>
                  <span className="li-number">03</span>{" "}
                  <span className="li-body">Quantity</span>
                </li>
                <li className={menuGrind ? "li-selected" : null}>
                  <span className="li-number">04</span>{" "}
                  <span className="li-body">Grind Option</span>
                </li>
                <li
                  id="menu-fifth"
                  className={menuDelivery ? "li-selected" : null}
                >
                  <span className="li-number">05</span>{" "}
                  <span className="li-body">Deliveries</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="plan-sec-two-right">
            <RenderAccordionItem
              defaultChecked={defaultChecked}
              option={options[0]}
              changeWord={(word) => setDrink(word)}
              setMenuActive={(item) => setMenuPref(true)}
            />
            <RenderAccordionItem
              option={options[1]}
              changeWord={(word) => setType(word)}
              setMenuActive={(item) => setMenuBean(true)}
            />
            <RenderAccordionItem
              option={options[2]}
              changeWord={(word) => setQuantity(word)}
              setMenuActive={(item) => setMenuQuantity(true)}
            />
            {isGrindDisabled ? (
              <div className="accordion-header">
                <h1 style={{ color: "#83888F", opacity: 0.5 }}>
                  Want us to grind them?
                </h1>
                <img
                  src="src/assets/plan/desktop/icon-arrow.svg"
                  style={{ transform: `rotate(0)` }}
                  alt=""
                />
              </div>
            ) : (
              <RenderAccordionItem
                option={options[3]}
                changeWord={(word) => setGrind(word)}
                setMenuActive={(item) => setMenuGrind(true)}
              />
            )}

            <RenderAccordionItem
              option={options[4]}
              changeWord={(word) => setFrequency(word)}
              setMenuActive={(item) => setMenuDelivery(true)}
            />

            <OrderSummary
              drink={drink}
              type={type}
              quantity={quantity}
              grind={grind}
              frequency={frequency}
              disabled={isGrindDisabled}
            />

            {isGrindDisabled ? (
              <button
                disabled={buttonDisabled}
                className="button-primary-activated"
                onClick={show}
              >
                Create my plan!
              </button>
            ) : (
              <button
                disabled={buttonActive}
                className="button-primary-activated"
                onClick={show}
              >
                Create my plan!
              </button>
            )}
          </div>
        </div>
        <div className={showModal ? "modal" : "modal-hidden"}>
          <div className="modal-wrapper">
            <p className="modal-title">Order Summary</p>
            <div className="modal-body">
              {isGrindDisabled ? (
                <p className="modal-body-summary">
                  “I drink coffee using{" "}
                  <span className="modal-selection">{drink}</span> , with a{" "}
                  <span className="modal-selection">{type}</span> type of bean.{" "}
                  <span className="modal-selection">{quantity}</span>, sent to
                  me <span className="modal-selection">{frequency}</span>
                  .”
                </p>
              ) : (
                <p className="modal-body-summary">
                  “I drink coffee using{" "}
                  <span className="modal-selection">{drink}</span> , with a{" "}
                  <span className="modal-selection">{type}</span> type of bean.{" "}
                  <span className="modal-selection">{quantity}</span> ground ala{" "}
                  <span className="modal-selection">{grind}</span>, sent to me{" "}
                  <span className="modal-selection">{frequency}</span>.”
                </p>
              )}

              <p className="modal-confirm">
                Is this correct? You can proceed to checkout or go back to plan
                selection if something is off. Subscription discount codes can
                also be redeemed at the checkout.
              </p>
            </div>

            {isNotMobile ? (
              <div className="modal-footer">
                <p className="modal-price">{price}</p>
                <button className="button-checkout" onClick={closeModal}>
                  Checkout
                </button>
              </div>
            ) : (
              <div className="modal-footer">
                <button className="button-checkout" onClick={closeModal}>
                  Checkout - {price}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
