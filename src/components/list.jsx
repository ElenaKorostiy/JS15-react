import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import "./list.css";

export const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products");
        if (!response.ok) {
          throw new Error("Error");
        }
        const data = await response.json();
        setProducts(data.products);
      } catch (error) {
        console.error(error.message);
      }
    };
    fetchData();
  }, []);

    return (
      
    <div className="list">
      {products.map((product) => (
        <div className="card" key={product.id}>
          <img className="box" src={product.images[0]} alt="img" />
          <h3>{product.title}</h3>
          <p>Price: ${product.price}</p>
              <Link to={`/products/${product.id}`}>
                  <button>Details</button>
              </Link>
        </div>
      ))}
    </div>
  );
};
