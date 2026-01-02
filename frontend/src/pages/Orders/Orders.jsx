import { Fragment } from "react";
import "./Orders.css";
import Headers from "../../components/Header";
import axios from "axios";
import { useState, useEffect } from "react";
import { formatMoney } from "../../utils/money";
import dayjs from "dayjs";
import OrderDetails from "./OrderDetails";
const Orders = ({ cart }) => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios.get("/api/orders?expand=products").then((response) => {
      setOrders(response.data);
    });
  }, []);
  return (
    <>
      <title>Orders</title>
      <Headers cart={cart} />

      <div className="orders-page">
        <div className="page-title">Your Orders</div>
        <div className="orders-grid">
          {orders.map((order) => {
            return (
              <div key={order.id} className="order-container">
                <div className="order-header">
                  <div className="order-header-left-section">
                    <div className="order-date">
                      <div className="order-header-label">Order Placed:</div>
                      <div>{dayjs(order.orderTimeMs).format("MMMM D")}</div>
                    </div>
                    <div className="order-total">
                      <div className="order-header-label">Total:</div>
                      <div>{formatMoney(order.totalCostCents)}</div>
                    </div>
                  </div>

                  <div className="order-header-right-section">
                    <div className="order-header-label">Order ID:</div>
                    <div>{order.id}</div>
                  </div>
                </div>

                <OrderDetails order={order} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Orders;
