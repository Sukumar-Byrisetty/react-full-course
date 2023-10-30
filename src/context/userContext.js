import React from "react";

const initialState = {
    firstName: 'Sukumar',
    lastName: 'Byrisetty',
    email: 'Sukumar@gmail.com'
};

export const UserContext = React.createContext();

export const UserContextProvider = ({ children }) => {
    return <UserContext.Provider value={initialState}>{children}</UserContext.Provider>
 };