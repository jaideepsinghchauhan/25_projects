import React, { useEffect, useState } from "react";

const useFetch = ({ url, options = {} }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);

  async function fetchData(url) {
    try {
      setLoading(true);
      const res = await fetch(url, options);
      const json_data = await res.json();
      console.log("data", res);
      if (json_data) {
        setData(json_data);
        setLoading(false);
        setErrorMsg(null);
      }
    } catch (error) {
      setLoading(false);
      setErrorMsg(error.message);
    }
  }
  useEffect(() => {
    fetchData(url);
  }, [url]);
  return [data, errorMsg, loading];
};

export default useFetch;
