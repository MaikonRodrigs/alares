import React, { createContext, useState } from "react";

export const GlobalContext = createContext();

export const UseDataContext = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState(false)
  const [project, setProject] = useState(1);



  return (
    <GlobalContext.Provider value={{
      setLoading, loading,
      setModal, modal,
      project, setProject
    }}>
      {children}
    </GlobalContext.Provider>
  );
};
