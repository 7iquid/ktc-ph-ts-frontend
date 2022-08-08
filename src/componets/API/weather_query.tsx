import React,{useState, useEffect, useRef, FC, ReactNode , useContext, createContext} from "react";
import axios from "axios";
import { useGeolocated } from "react-geolocated";
import { LocationContext,DeviceLocation } from "./GeoLoc";
import useAxios from "axios-hooks";
import { saveToLocal, getFromLocal, removeFromLocal } from "./LocalStorageApi";
import { defaultparam } from "./GeoLoc";
import CircularProgress from '@mui/material/CircularProgress';
import { useGetAxiom } from "./AxiosCrud";


const datajson = require('./defaultwheaterapi.json')
export const ApiContext = createContext<any>(undefined);

export const ApiProvider:FC<{children:ReactNode;}> = ({children}) => {
        const data:any = useGetAxiom('WeatherData')
        const [response, setResponse]= useState()

    useEffect(()=>{
      setResponse(data)
    },[data])
    return (<>  
                <ApiContext.Provider value={response} >{children} </ApiContext.Provider>

        </>
    )
};

