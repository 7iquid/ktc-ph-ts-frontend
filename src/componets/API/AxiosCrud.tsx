import axios from 'axios'
import { useGeolocated } from "react-geolocated";

import useAxios from "axios-hooks";
import { useState } from 'react';



export function useGetAxiom(key:string){
    
const defaultparam ={
    api_key :    '9f5846a3a7984c789b0105235220508&q=',
    weather_url : 'https://api.weatherapi.com/v1/current.json?key=',
    json_path :   '/current.json',
}

const { coords, isGeolocationAvailable, isGeolocationEnabled }:any =
        useGeolocated({
            positionOptions: {
                enableHighAccuracy: false,
            },
            userDecisionTimeout: 5000,     
    });

const url =  defaultparam.weather_url + defaultparam.api_key +coords?.latitude +' '+coords?.longitude+ '&aqi=no'
const  [data, setData] = useAxios(url)   

console.log('useGetAxiom ====')
return[data , setData]        

}
