import React from "react";
import dayjs from "dayjs";

const DeliveryDate = ({ selectedDeliveryOption }) => {
  return (
    <div>
      {" "}
      <div className="delivery-date">
        Delivery date:{" "}
        {dayjs(selectedDeliveryOption.estimatedDeliveryTime).format(
          "dddd, MMMM D"
        )}
      </div>
    </div>
  );
};

export default DeliveryDate;
