import React from "react";
import { createContext,useContext } from "react";

export const ThemeContext= createContext({
    themeMode: 'light',
    darkTheme :()=>{},
    lightTheme: ()=>{},

})

export const ThemeProvider = ThemeContext.Provider;

//creating a custom Hook here to access context.
export default function useTheme(){
   return useContext(ThemeContext)
}

//method 2 of contexts.
