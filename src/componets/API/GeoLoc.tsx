import { useGeolocated } from "react-geolocated";
import React,{useState, useEffect, FC, ReactNode , useContext, createContext} from "react";
import { saveToLocal, getFromLocal, removeFromLocal } from "./LocalStorageApi";

export const LocationContext = createContext<any>(undefined);

const defaultparam ={
    api_key :    '8daf2b94b0ef4115bde152002222506&q=',
    weather_url : 'https://api.weatherapi.com/v1/current.json?key=',
    json_path :   '/current.json',
}

// interface data{
// 	latitude	: number,
//     longitude	: number,
// }

function Getloc(){
	const { coords, isGeolocationAvailable, isGeolocationEnabled }:any =
        useGeolocated({
            positionOptions: {
                enableHighAccuracy: true,
            },
            userDecisionTimeout: 5000,     
    });
	const data ={
		latitude	: coords?.latitude,
	    longitude	: coords?.longitude,
	}

    // localStorage.setItem('devicelocation', JSON.stringify([coords, isGeolocationAvailable, isGeolocationEnabled]));  
    if(coords == undefined){}else{saveToLocal('devicelocation',coords)}
    
    try{coords.latitude}{}// 
    // console.log(coords)
    // localStorage.setItem('devicelocation', coords)
}


export const DeviceLocation:FC<{children:ReactNode;}> = ({children}) => {
	
	let data = getFromLocal('devicelocation')

	if(data){console.log(data)}else{Getloc()}

	// if(){data = localStorage.getItem('WeatherUrl')}else{
	// 	let a:any, b, c = Getloc()
		// let d =  defaultparam.weather_url + defaultparam.api_key +a?.latitude +' '+a?.longitude+ '&aqi=no'
		// console.log(d)
		// localStorage.getItem('WeatherUrl')
	
   	
   	return( <>
    	<LocationContext.Provider value={data} >  
            {children} 
    	</LocationContext.Provider>
   </>
   )
 }
