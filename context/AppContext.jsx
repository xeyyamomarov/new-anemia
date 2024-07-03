import React, { createContext, useState, useContext } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [photoData, setPhotoData] = useState(null);

  return (
    <AppContext.Provider value={{ photoData, setPhotoData }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
