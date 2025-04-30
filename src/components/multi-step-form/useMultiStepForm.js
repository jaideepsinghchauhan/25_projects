import { useState } from "react";

export function useMultiStepForm(steps) {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  function next() {
    if (currentStepIndex >= steps.length - 1) return currentStepIndex;

    setCurrentStepIndex(currentStepIndex + 1);
  }
  function back() {
    if (currentStepIndex === 0) return currentStepIndex;

    setCurrentStepIndex(currentStepIndex - 1);
  }
  function goTo(index) {
    setCurrentStepIndex(index);
  }

  return {
    step: steps[currentStepIndex],
    next,
    back,
    goTo,
    currentStepIndex,
    steps,
    isFirstStep: currentStepIndex === 0,
    isLastStep: currentStepIndex === steps.length - 1,
  };
}
