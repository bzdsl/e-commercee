import { Fragment } from "react";
import "./Orders.css";
import Headers from "../../components/Header";
import axios from "axios";
import { useState, useEffect } from "react";
import OrdersGrid from "./OrdersGrid";

const Orders = ({ cart }) => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      const response = await axios.get("/api/orders?expand=products");
      setOrders(response.data);
    };
    fetchOrders();
  }, []);
  return (
    <>
      <title>Orders</title>
      <Headers cart={cart} />

      <div className="orders-page">
        <div className="page-title">Your Orders</div>
        <OrdersGrid orders={orders} />
      </div>
    </>
  );
};

export default Orders;
