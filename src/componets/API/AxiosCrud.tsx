import axios from 'axios'
import { useGeolocated } from "react-geolocated";
import useAxios from "axios-hooks";
import { useEffect, useState } from 'react';
import { saveToLocal,getFromLocal } from './LocalStorageApi';



const defaultparam ={
    api_key :    '9f5846a3a7984c789b0105235220508&q=',
    weather_url : 'https://api.weatherapi.com/v1/current.json?key=',
    json_path :   '/current.json',
}

function useLoc(){
    const [loc2, setLoc]:any = useState(getFromLocal('location'))   
    let loc
    let pos
    if (!getFromLocal('location')){
        navigator.geolocation.getCurrentPosition(function(position) {
            pos = position
            loc =  defaultparam.weather_url + defaultparam.api_key +pos?.coords.latitude +' '+pos?.coords.longitude+ '&aqi=no'
             
            // 
            if(loc){
                saveToLocal('location',loc)
                // console.log(loc ,11231231232)
            }
            console.log('navigator 222 ====' ,loc)
            setLoc(loc)

        });
    }

    // useEffect(()=>{saveToLocal('location',loc2)},[loc2])
    return loc2
}

function useAxiomKo(url:string){
    const [loc2, setLoc]:any = useState(getFromLocal('response'))   

    if (!getFromLocal('response')){

        axios.get(url)
            .then(function (response) {
            // handle success
            setLoc(response.data)
            saveToLocal('response', response.data)
            // console.log(response.data);
            })
            .catch(function (error) {
            // handle error
            console.log(error);
            })
            .then(function () {
            // always executed
            });

    }

   return loc2
}


export function useGetAxiom(key:string){
const [loc, setLoc]:any = useState()    
const locationloc = useLoc()
const response:any = useAxiomKo(locationloc)
const [response2, setResponse] = useState(getFromLocal('response'))  


useEffect(()=>{
    setLoc(locationloc)
    setResponse(response)
},[locationloc, response])

// useEffect(()=>{
//     // setLoc(locationloc)
//     setResponse(getFromLocal('response'))
// },[response])

// console.log('useGetAxiom ====' ,response )
return response2
}
