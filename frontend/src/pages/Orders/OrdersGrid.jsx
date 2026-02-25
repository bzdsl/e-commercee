import React from "react";
import dayjs from "dayjs";
import OrderDetails from "./OrderDetails";
import { formatMoney } from "../../utils/money";
import axios from "axios";
const OrdersGrid = ({ orders, loadCart }) => {
  if (!orders || orders.length === 0) {
    return <div>Loading orders...</div>;
  }
  return (
    <div>
      {" "}
      <div className="orders-grid">
        {orders.map((orderProduct) => {
          const addToCart = async (productId) => {
            await axios.post("/api/cart-items", {
              productId: productId,
              quantity: 1,
            });
            await loadCart();
          };
          return (
            <div key={orderProduct.id} className="order-container">
              <div className="order-header">
                <div className="order-header-left-section">
                  <div className="order-date">
                    <div className="order-header-label">Order Placed:</div>
                    <div>
                      {dayjs(orderProduct.orderTimeMs).format("MMMM D")}
                    </div>
                  </div>
                  <div className="order-total">
                    <div className="order-header-label">Total:</div>
                    <div>{formatMoney(orderProduct.totalCostCents)}</div>
                  </div>
                </div>

                <div className="order-header-right-section">
                  <div className="order-header-label">Order ID:</div>
                  <div>{orderProduct.id}</div>
                </div>
              </div>

              <OrderDetails
                order={orderProduct}
                loadCart={loadCart}
                addToCart={addToCart}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OrdersGrid;
