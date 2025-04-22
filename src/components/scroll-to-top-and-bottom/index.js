import React, { useRef } from "react";
import useFetch from "../use-fetch-hook";

const ScrollToTopAndBottom = () => {
  const bottomRef = useRef();
  const [data, errorMsg, loading] = useFetch({
    url: "https://dummyjson.com/products?limit=100",
    options: {},
  });

  function handleScrollToTop() {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }
  function handleScrollToBottom() {
    bottomRef.current.scrollIntoView({ behavior: "smooth" });
  }
  if (loading) {
    return <h3>Loading Please wait!</h3>;
  }
  if (errorMsg) {
    return <h3>Error Occurred! {errorMsg}</h3>;
  }
  return (
    <div>
      <h1>Scroll To Top and Bottom Feeature</h1>
      <h3>This is the top section</h3>
      <button onClick={handleScrollToBottom}>Scroll to Bottom</button>
      <ul>
        {data?.products?.map((product) => {
          return <li>{product.title}</li>;
        })}
      </ul>
      <h3 ref={bottomRef}>This is the Bottom section</h3>
      <button onClick={handleScrollToTop}>Scroll to Top</button>
    </div>
  );
};

export default ScrollToTopAndBottom;
