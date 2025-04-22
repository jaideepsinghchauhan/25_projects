import React from "react";
import useFetch from ".";

const UseFetchTest = () => {
  const [data, errorMsg, loading] = useFetch({
    url: "https://dummyjson.com/products",
    options: {},
  });
  return (
    <>
      <h1> Use Fetch Hook</h1>
      <div>
        {loading && "Pending..."}
        <br />
        {errorMsg && `Error: ${errorMsg}`}
      </div>
      <div>
        {data?.products?.map((product) => (
          <p>{product.title}</p>
        ))}
      </div>
    </>
  );
};

export default UseFetchTest;
