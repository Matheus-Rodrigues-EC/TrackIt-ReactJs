import React from "react";
import { useState } from "react";

export const TokenContext = React.createContext({});

export const TokenProvider = (props) => {

    const [token, setToken] = useState("Esse é só mais um teste");

    return (
        <TokenContext.Provider value={{token, setToken}}>
            {props.children}
        </TokenContext.Provider>
    );
};