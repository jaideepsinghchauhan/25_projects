import React, { useRef, useState } from "react";
import useOutsideClickHook from ".";

const TestUseOutsideClickHook = () => {
  const [showContent, setShowContent] = useState(false);
  const ref = useRef();
  useOutsideClickHook(ref, () => {
    setShowContent(false);
  });

  return (
    <div>
      {showContent ? (
        <div
          ref={ref}
          style={{
            backgroundColor: "lightgrey",
            marginLeft: "5rem",
            marginRight: "5rem",
            height: "20rem",
          }}
        >
          <h3>This is some dummy content</h3>
          <p>Please click outside this block to close this content.</p>
        </div>
      ) : (
        <button onClick={() => setShowContent(true)}>Show content</button>
      )}
    </div>
  );
};

export default TestUseOutsideClickHook;
