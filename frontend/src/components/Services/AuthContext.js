

import { createContext, useContext, useState } from "react";

const globalContext = createContext();

export const GlobalProvider = ({children}) => {

  const [theme, setTheme] = useState("light");

  return (
    <globalContext.Provider value={{theme , setTheme}}>
      {children}
    </globalContext.Provider>
  )
}

export const useGlobalContext = () => { 
  const context = useContext(globalContext);

  if(!context){
    throw new Error("useGlobalContext within GlobalProvider");
  }

  return context;
}

