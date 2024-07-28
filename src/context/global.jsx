import React, { useContext, useEffect } from "react";


const apiKey = process.env.VITE_GIPHY_API_KEY;
const baseUrl = "https://api.giphy.com/v1/gifs"


const GlobalContext = React.createContext()


export const GlobalProvider = ({children}) => {

    //initial renders
    useEffect(() => {
        getTrending()
        randomGiff()
        getFromLocalStorage()
    }, [])

    return (
        <GlobalContext.Provider value={{
            ...state,
            randomGiff,
            searchGiffs,
            saveToFavourites,
            removeFromLocalStorage
        }}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobal = () => {
    return useContext(GlobalContext)
}