import React, { useEffect, useState } from "react";

export const WithoutSSR = ({ children }) => {
  const [isMountedInClient, setIsMountedInClient] = useState(false);

  useEffect(() => {
    setIsMountedInClient(true);
  }, []);

  return isMountedInClient ? children : null;
};
