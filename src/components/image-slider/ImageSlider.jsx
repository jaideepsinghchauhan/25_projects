import React, { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import "./styles.css";
const ImageSlider = ({ url, limit = 5, page = 1 }) => {
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(false);

  async function fetchImages(getUrl) {
    try {
      setLoading(true);
      const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
      const data = await response.json();
      if (data) {
        console.log("data", data);
        setImages(data);
        setLoading(false);
      }
    } catch (e) {
      setErrorMsg(e.message);
      setLoading(false);
    }
  }
  useEffect(() => {
    if (url !== "") {
      fetchImages(url);
    }
  }, [url]);

  function handleLeft() {
    if (currentSlide === 0) {
      setCurrentSlide(images.length - 1);
      return;
    }
    setCurrentSlide((currentSlide) => currentSlide - 1);
  }
  function handleRight() {
    if (currentSlide === images.length - 1) {
      setCurrentSlide(0);
      return;
    }
    setCurrentSlide((currentSlide) => currentSlide + 1);
  }

  if (loading) {
    return <div>Loading...!</div>;
  }
  if (errorMsg !== null) {
    return <div>Error Occurred : {errorMsg}</div>;
  }
  return (
    <div className="container">
      <BsArrowLeftCircleFill
        onClick={handleLeft}
        className="arrow arrow-left"
      />
      {images?.length
        ? images.map((image, index) => (
            <img
              key={image.id}
              alt={image.download_url}
              src={image.download_url}
              className={
                currentSlide === index ? "current-image" : "current-image hide"
              }
            />
          ))
        : null}
      <BsArrowRightCircleFill
        onClick={handleRight}
        className="arrow arrow-right"
      />
      <span className="circle-indicators">
        {images?.length
          ? images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={
                  currentSlide === index
                    ? "circle-indicator active"
                    : "circle-indicator"
                }
              ></button>
            ))
          : null}
      </span>
    </div>
  );
};
export default ImageSlider;
