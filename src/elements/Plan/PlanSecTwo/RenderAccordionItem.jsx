import { useEffect, useState } from "react";

export function RenderAccordionItem({
  option,
  changeWord,
  setMenuActive,
  defaultChecked,
}) {
  const [active, setActive] = useState(false);

  const toggleActive = () => {
    setActive(!active);
  };

  return (
    <div
      className={
        defaultChecked === ""
          ? "accordion-item"
          : active
          ? "accordion-item"
          : "hidden"
      }
    >
      <div className="accordion-header" onClick={toggleActive}>
        <h1>{option.title}</h1>
        <img src="src/assets/plan/desktop/icon-arrow.svg" alt="" />
      </div>
      <div className="accordion-body">
        <label className="label" htmlFor={option.optionOne.title}>
          <input
            className="radio "
            type="radio"
            name={option.id}
            id={option.optionOne.title}
            value={option.optionOne.title}
            onChange={(e) => changeWord(e.target.value)}
            checked={defaultChecked === "Capsule" ? "defaultChecked" : null}
            onClick={setMenuActive}
          />
          <div className="label-wrapper label-wrapper-one">
            <p className="label-title">{option.optionOne.title}</p>
            <p className="label-description">{option.optionOne.description}</p>
          </div>
        </label>

        <label className="label" htmlFor={option.optionTwo.title}>
          <input
            className="radio"
            type="radio"
            name={option.id}
            id={option.optionTwo.title}
            value={option.optionTwo.title}
            onChange={(e) => changeWord(e.target.value)}
            onClick={setMenuActive}
          />
          <div className="label-wrapper">
            <p className="label-title">{option.optionTwo.title}</p>
            <p className="label-description">{option.optionTwo.description}</p>
          </div>
        </label>

        <label className="label" htmlFor={option.optionThree.title}>
          <input
            className="radio"
            type="radio"
            name={option.id}
            id={option.optionThree.title}
            value={option.optionThree.title}
            onChange={(e) => changeWord(e.target.value)}
            onClick={setMenuActive}
          />
          <div className="label-wrapper">
            <p className="label-title">{option.optionThree.title}</p>
            <p className="label-description">
              {option.optionThree.description}
            </p>
          </div>
        </label>
      </div>
    </div>
  );
}
