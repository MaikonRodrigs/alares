import { createContext, useState } from "react";

export const GlobalContext = createContext();

export const UseDataContext = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState(false);
  const [authenticated, setAuthenticated] = useState(false);
  const [cart, setCart] = useState(false);
  const [adminArea, setAdminArea] = useState(false);
  const [isFinishSale, setIsFinishSale] = useState(false);
  const [userDados, setUserDados] = useState({ nome: '', email: '' })


  return (
    <GlobalContext.Provider
      value={{
        loading, setLoading,
        modal, setModal,
        authenticated, setAuthenticated,
        cart, setCart,
        isFinishSale, setIsFinishSale,
        userDados, setUserDados,
        adminArea, setAdminArea
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
