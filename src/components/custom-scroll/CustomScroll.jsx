import React, { useEffect, useState } from "react";
import "./style.css";

/**
 *
 * Calculates scroll progress as a percentage:
 *  - scrollHeight: total height of the document (including offscreen)
 *  - clientHeight: height of the visible window
 *  - scrollTop: how much the user has scrolled from the top
 *
 */

const CustomScroll = ({ url }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [scrollPercentage, setScrollPercentage] = useState(0);

  async function fetchData(url) {
    setLoading(true);
    try {
      const res = await fetch(url);
      const jsonResponse = await res.json();

      if (jsonResponse?.products?.length) {
        setData(jsonResponse.products);
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      setErrorMessage(error.message);
    }
  }
  function handleScrollChange(event) {
    const totalPercent =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    console.log("totalPercent", totalPercent);
    setScrollPercentage(
      (document.documentElement.scrollTop / totalPercent) * 100
    );
  }
  useEffect(() => {
    fetchData(url);
  }, [url]);
  useEffect(() => {
    window.addEventListener("scroll", handleScrollChange);

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  if (loading) {
    return <div>Loading data ...</div>;
  }
  if (errorMessage !== null) {
    return <div>Error Message : {errorMessage} </div>;
  }
  console.log("scrollPercent", scrollPercentage);
  return (
    <div>
      <div className="container">
        <h1>Custom Scroll Indicator</h1>
      </div>
      <div
        style={{
          width: `${scrollPercentage}%`,
        }}
        className="percent-container"
      ></div>
      <div>
        {data?.map((item) => {
          return <p> {item.title}</p>;
        })}
      </div>
    </div>
  );
};

export default CustomScroll;
