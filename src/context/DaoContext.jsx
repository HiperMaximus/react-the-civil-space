import React, { createContext, useState, useEffect } from "react";
import {daos as data} from '../data/daos'

export const DaosContext = createContext();

export function DaosContextProvider(props) {
    const [daos, setDaos] = useState([]);
   
    useEffect(() => {
        setDaos(data);
    }, []);
  
    return (
      <DaosContext.Provider value={{
        daos,
      }}>{props.children}</DaosContext.Provider>
    );
  }