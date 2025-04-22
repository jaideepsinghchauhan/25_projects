import React, { useEffect, useState } from "react";
import "./styles.css";

const LoadMore = () => {
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);

  async function fetchData() {
    try {
      setLoading(true);
      setErrorMsg(null);
      const data = await fetch(
        `https://dummyjson.com/products?limit=10&skip=${
          count === 0 ? 0 : count * 20
        }`
      );
      const jsonData = await data.json();
      if (jsonData?.products?.length) {
        setProducts((prev) => [...prev, ...jsonData.products]);
        setLoading(false);
        console.log("jsonData", jsonData.products);
      }
    } catch (error) {
      setErrorMsg(error.message);
      setLoading(false);
    }
  }
  useEffect(() => {
    fetchData();
  }, [count]);

  if (loading) {
    return <div>Loading data...</div>;
  }
  if (errorMsg) {
    return <div> Error message : {errorMsg}</div>;
  }
  return (
    <div className="container">
      <div className="product-container">
        {products?.map((product) => {
          return (
            <div className="product" key={product.id}>
              <img src={product.thumbnail} alt={product.title} />
              <p>{product.title}</p>
            </div>
          );
        })}
      </div>
      <div className="button-container">
        <button
          disabled={products?.length >= 100}
          onClick={() => setCount(count + 1)}
        >
          Load More Product
        </button>
        <span>
          {products?.length >= 100 ? "Max number of product reached." : null}
        </span>
      </div>
    </div>
  );
};

export default LoadMore;
