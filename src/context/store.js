'use client';
import { createContext, useContext, useState } from 'react';

const StoreContext = createContext();

const StoreProvider = ({ children }) => {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <StoreContext.Provider
      value={{
        showSidebar,
        toggleSidebar,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export default StoreProvider;
export const useStoreContext = () => useContext(StoreContext);
