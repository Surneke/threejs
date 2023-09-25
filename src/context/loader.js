import { createContext, useContext, useState } from "react";

const Loader = createContext();

export const LoaderProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <Loader.Provider value={(isLoading, setIsLoading)}>
      {children}
    </Loader.Provider>
  );
};

export const useLoader = () => useContext(Loader);
