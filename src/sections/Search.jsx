import { useEffect, useState } from "react";

export const Search = () => {
  const [value, setValue] = useState("");
  const [products, setProducts] = useState([]);
  console.log(products);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/search?q=${value}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
      });
  }, [value]);

  return (
    <div>
      <input
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      {products.length ? (
        products.map((product) => {
          return <p key={product.id}>{product.title}</p>;
        })
      ) : (
        <p>No products found</p>
      )}
    </div>
  );
};