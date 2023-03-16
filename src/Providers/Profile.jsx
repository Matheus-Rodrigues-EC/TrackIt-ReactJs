import React from "react";
import { useState } from "react";

export const ProfileContext = React.createContext({});

export const TokenProvider = (props) => {

    const [profile, setProfile] = useState("Esse é só mais um teste");

    return (
        <ProfileContext.Provider value={{profile, setProfile}}>
            {props.children}
        </ProfileContext.Provider>
    );
};