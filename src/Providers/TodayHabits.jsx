import React from "react";
import { useState } from "react";

export const TodayHabitsContext = React.createContext({});

export const TodayHabitsProvider = (props) => {

    const [todayHabits, setTodayHabits] = useState([]);

    return (
        <TodayHabitsContext.Provider value={{todayHabits, setTodayHabits}}>
            {props.children}
        </TodayHabitsContext.Provider>
    );
};