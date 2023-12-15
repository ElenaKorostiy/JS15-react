import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

import "./info.css";

export const ProductInfo = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProductInfo = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/products/${id}`);
        if (!response.ok) {
          throw new Error("Error");
        }
          const data = await response.json();
          
        setProduct(data);
      } catch (error) {
        console.error(error.message);
      }
    };
    fetchProductInfo();
  }, [id]);

  return (
    <div className="all">
      <h2>Product Info</h2>
      {product ? (
        <div>
          <img src={product.thumbnail} alt={product.title} />
          <h3>{product.title}</h3>
          <p>Price: ${product.price}</p>
          <Link to="/">
                <button>Go back to List</button>
          </Link>
          <div>
            <h4>All Properties:</h4>
            {Object.keys(product).map((key) => (
              <p key={key}>
                {key}: {product[key]}
              </p>
            ))}
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};