import React from "react";
import { useState } from "react";

export const HabitsListContext = React.createContext({});

export const HabitsListProvider = (props) => {

    const [habitsList, setHabitsList] = useState([]);

    return (
        <HabitsListContext.Provider value={{habitsList, setHabitsList}}>
            {props.children}
        </HabitsListContext.Provider>
    );
};