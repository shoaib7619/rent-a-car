import { createContext, useState } from "react";
import { carsData } from "../data/CarData";


export const MyContext = createContext("")

function MyContextProvider({children}) {
  let [car,setCar] =  useState(carsData);


  return (
    <>
      <MyContext.Provider  value={{car, setCar }}>
        {children}
      </MyContext.Provider>
    </>
  )
}

export default MyContextProvider
