import { Method } from "axios";
import React,{useState, useEffect, FC, ReactNode ,  createContext} from "react";
import { useGetWetherUrl, useAxiosKo} from "./AxiosCrud";
import { saveToLocal,getFromLocal } from './LocalStorageApi';
// import { memoryUsage } from 'node:process';

export const ApiContext = createContext<any>(undefined);

export const ApiProvider:FC<{children:ReactNode}> = ({children}) => {
    const weatherArgs={
        url:useGetWetherUrl('location') ,
        localstoragekey:'WeatherData', 
        method:'POST' , 
        datelocalExpiration:1*60,
    }
    const newsfeedArgs={
        url: 'https://ktc-ph-api.herokuapp.com/api/' ,
        localstoragekey:'newsfeed', 
        method:'GET' , 
        datelocalExpiration:5*60,
    }

    const context:any={
        weather: useAxiosKo(weatherArgs),
        newsfeed: useAxiosKo(newsfeedArgs),
        urlNewsfeeds:useGetWetherUrl('location'),
     }

    return (<>  
                <ApiContext.Provider value={context} >{children} </ApiContext.Provider>

        </>
    )
};

