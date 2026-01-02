import { useEffect, useState } from "react";
import axios from "axios";
import "./HomePage.css";
import Headers from "../../components/Header";
import ProductGrid from "./ProductGrid";

const HomePage = ({ cart }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("/api/products").then((response) => {
      setProducts(response.data);
    });
  }, []);

  return (
    <>
      <title>Home</title>
      <Headers cart={cart} />

      <div className="home-page">
        <ProductGrid products={products} />
      </div>
    </>
  );
};

export default HomePage;
