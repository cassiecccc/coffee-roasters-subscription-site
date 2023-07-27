export function OrderSummary({
  drink,
  type,
  quantity,
  grind,
  frequency,
  disabled,
}) {
  return (
    <>
      <div className="order-summary-wrapper">
        <div className="order-summary">
          <p className="order-summary-title">Order Summary</p>
          {disabled ? (
            <p className="order-summary-body">
              “I drink coffee using{" "}
              <span className="order-selection">{drink}</span> , with a{" "}
              <span className="order-selection">{type}</span> type of bean.{" "}
              <span className="order-selection">{quantity}</span>, sent to me
              <span className="order-selection">{frequency}</span>.”
            </p>
          ) : (
            <p className="order-summary-body">
              “I drink coffee using{" "}
              <span className="order-selection">{drink}</span> , with a{" "}
              <span className="order-selection">{type}</span> type of bean.{" "}
              <span className="order-selection">{quantity}</span> ground ala{" "}
              <span className="order-selection">{grind}</span>, sent to me
              <span className="order-selection">{frequency}</span>.”
            </p>
          )}
        </div>
      </div>
    </>
  );
}
