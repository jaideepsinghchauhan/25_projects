import { useLayoutEffect, useState } from "react";

export default function useWindowResizeHook() {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });

  function listener() {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });
  }

  useLayoutEffect(() => {
    listener(); // calling this function inside as well so it show the initial height( imp trick)
    window.addEventListener("resize", listener);

    return () => {
      return window.removeEventListener("resize", listener);
    };
  }, []);

  return windowSize;
}
