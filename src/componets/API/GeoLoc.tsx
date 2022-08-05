import { useGeolocated } from "react-geolocated";
import React,{useState, useEffect, FC, ReactNode , useContext, createContext} from "react";


export const LocationContext = createContext<any>(undefined);

export const defaultparam ={
    api_key :    '9f5846a3a7984c789b0105235220508&q=',
    weather_url : 'https://api.weatherapi.com/v1/current.json?key=',
    json_path :   '/current.json',
}




export const DeviceLocation:FC<{children:ReactNode;}> = ({children}) => {
	const { coords, isGeolocationAvailable, isGeolocationEnabled }:any =
        useGeolocated({
            positionOptions: {
                enableHighAccuracy: false,
            },
            userDecisionTimeout: 5000,     
    });
	const data ={
	    url: 	defaultparam.weather_url + defaultparam.api_key +coords?.latitude +' '+coords?.longitude+ '&aqi=no',
	    LoadStatus	: true,
	}
   	return( <>
    	<LocationContext.Provider value={data} >  
            {children} 
    	</LocationContext.Provider>
   </>
   )
 }
