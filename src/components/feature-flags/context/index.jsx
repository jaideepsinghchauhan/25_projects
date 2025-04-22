import { createContext, useEffect, useState } from "react";
import featureFlagsDataServiceCalls from "../data";

export const FeatureFlagsContext = createContext(null);

export default function FeatureFlagsGlobalState({ children }) {
  const [loading, setLoading] = useState(false);
  const [enabledFlags, setEnabledFlags] = useState(null);

  async function fetchFeatureAPIData() {
    try {
      setLoading(true);
      const data = await featureFlagsDataServiceCalls();
      setEnabledFlags(data);
      setLoading(false);
    } catch (error) {
      setLoading(true);
      throw new Error(error);
    }
  }
  useEffect(() => {
    fetchFeatureAPIData();
  }, []);
  return (
    <FeatureFlagsContext.Provider value={{ loading, enabledFlags }}>
      {children}
    </FeatureFlagsContext.Provider>
  );
}
