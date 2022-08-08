import React,{useState, useEffect, FC, ReactNode ,  createContext} from "react";
import { useGetAxiom } from "./AxiosCrud";
// import { memoryUsage } from 'node:process';

export const ApiContext = createContext<any>(undefined);

export const ApiProvider:FC<{children:ReactNode;}> = ({children}) => {
        const data:any = useGetAxiom('WeatherData')
        const [response, setResponse]= useState()
        // console.log(memoryUsage());

        
    useEffect(()=>{
      setResponse(data)
    },[data])
    return (<>  
                <ApiContext.Provider value={response} >{children} </ApiContext.Provider>

        </>
    )
};

