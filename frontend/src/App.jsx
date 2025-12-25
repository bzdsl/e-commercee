import { Routes, Route } from "react-router";
import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import Checkout from "./pages/Checkout/Checkout";
import Orders from "./pages/Orders/Orders";
import Tracking from "./pages/Tracking/Tracking";
function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/orders" element={<Orders />} />
      <Route path="/tracking" element={<Tracking />} />
    </Routes>
  );
}

export default App;
