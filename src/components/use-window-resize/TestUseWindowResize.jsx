import useWindowResizeHook from ".";
const TestUseWindowResize = () => {
  const windowSize = useWindowResizeHook();
  const { width, height } = windowSize;
  return (
    <div>
      <h2>Window Resize</h2>
      <span>
        Height is {height} and width is {width}
      </span>
    </div>
  );
};

export default TestUseWindowResize;
