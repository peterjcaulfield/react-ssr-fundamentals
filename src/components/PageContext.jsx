import React, { useContext, useState } from "react";

const PageContext = React.createContext();

export const PageProvider = ({ children, initialState }) => {
  const [data, setData] = useState(initialState);
  const ctx = { data, setData };
  return <PageContext.Provider value={ctx}>{children}</PageContext.Provider>;
};

export const usePageContext = () => useContext(PageContext);
