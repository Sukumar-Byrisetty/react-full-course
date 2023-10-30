import React from "react";

const initialState = [
    {
        firstName: 'Sukumar',
        lastName: 'Byrisetty',
        email: 'Sukumar@gmail.com'
    },
    {
        firstName: 'Prabhas',
        lastName: 'Uppalapati',
        email: 'Prabhas@gmail.com'
    }
];
export const MainDataContext = React.createContext();

export const MainDataContextProvider = ({ children }) => {
    return <MainDataContext.Provider value={initialState}>{children}</MainDataContext.Provider>
 };