import React from "react";
import { useState } from "react";

export const PercentHabitsContext = React.createContext({});

export const PercentHabitsProvider = (props) => {

    const [percent, setPercent] = useState(0);

    return (
        <PercentHabitsContext.Provider value={{percent, setPercent}}>
            {props.children}
        </PercentHabitsContext.Provider>
    );
};