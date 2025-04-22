import { useEffect } from "react";

export default function useOutsideClickHook(ref, handler) {
  useEffect(() => {
    function listener(event) {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }

      handler(event);
    }
    window.addEventListener("mousedown", listener);
    window.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedwon", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
}
