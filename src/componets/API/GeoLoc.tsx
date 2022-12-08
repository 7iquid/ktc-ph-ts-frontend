import { useGeolocated } from "react-geolocated";
import React,{useState, useEffect, FC, ReactNode ,  createContext} from "react";
import { saveToLocal, getFromLocal,  } from "./LocalStorageApi";

export const LocationContext = createContext<any>(undefined);

export const defaultparam ={
    api_key :    '9f5846a3a7984c789b0105235220508&q=',
    weather_url : 'https://api.weatherapi.com/v1/current.json?key=',
    json_path :   '/current.json',
}




export const DeviceLocation:FC<{children:ReactNode;}> = ({children}) => {
	const [location, setLocation] = useState(getFromLocal('location'))
    const { coords, }:any =
        useGeolocated({
            positionOptions: {
                enableHighAccuracy: false,
            },
            userDecisionTimeout: 5000,     
    });
	// const data ={
	//     url: 	defaultparam.weather_url + defaultparam.api_key +coords?.latitude +' '+coords?.longitude+ '&aqi=no',
	//     isGeolocationAvailable,
 //        isGeolocationEnabled
	// }
    useEffect(()=>{ 
        if(!getFromLocal('location')){saveToLocal('location',coords);setLocation(coords)}
    },[coords])
    console.log('DeviceLocation ===' , location)
   	return( <>
    	<LocationContext.Provider value={location} >  
            {children} 
    	</LocationContext.Provider>
   </>
   )
 }
