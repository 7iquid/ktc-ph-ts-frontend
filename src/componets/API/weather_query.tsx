import React,{useState, useEffect, FC, ReactNode , useContext, createContext} from "react";
import axios from "axios";
import { useGeolocated } from "react-geolocated";

const DefaultWetherApi= require('./defaultwheaterapi.json');
const ApiContext = createContext<any>(undefined);
const LocationContext = createContext<any>(undefined);

interface resp{
    location:string,
    current:string,
}

interface paramsko  {
    api_key?:string ,
    weather_url?:string ,
    json_path?:string ,
    lat?: number ,
    lon?: number ,
}

const defaultparam ={
    api_key :    '8daf2b94b0ef4115bde152002222506&q=',
    weather_url : 'https://api.weatherapi.com/v1/current.json?key=',
    json_path :   '/current.json',
}
function DeviceLocation() {
    const { coords, isGeolocationAvailable, isGeolocationEnabled } =
        useGeolocated({
            positionOptions: {
                enableHighAccuracy: true,
            },
            userDecisionTimeout: 5000,
    });
    localStorage.setItem('devicelocation', JSON.stringify([coords, isGeolocationAvailable, isGeolocationEnabled]));  
   return <LocationContext.Provider value={[131,23213]} >{}  </LocationContext.Provider>;
 }

function GetAxios(){
    const [auth, handleAuth, c] = useApi(useApi);
    let a:any
    console.log(localStorage.getItem('devicelocation'))
    
}

export const ApiProvider:FC<{children:ReactNode;}> = ({children}) => {
  let a: boolean = false
  const [auth, setAuth] = useState(false);
  console.log('AuthProvider =========1', auth, a)
  
  const handleAuth = () => {
    setAuth(!auth);
    a = !a
    console.log('AuthProvider =========2' , auth, a)
  };
  const pogi = [auth, GetAxios, a];
  return <ApiContext.Provider value={pogi} >{children}  </ApiContext.Provider>;
};

export const useApi = ({ children }:any) => {
  const context = useContext(ApiContext);
  if (context === undefined) {
    throw new Error("useAuth can only be used inside AuthProvider");
  }
  return context;
};



export function CheckLocation(){
    // const [locator, setlocator] = useState<any>([19.6,100.98]);
    const [locator, setlocator] = useState<any>()
    let maploc:any =''
    useEffect(() =>{
        navigator.geolocation.getCurrentPosition((position)=> {
        maploc =defaultparam.weather_url + defaultparam.api_key +position.coords.latitude +' '+position.coords.longitude+ '&aqi=no'
        setlocator(maploc)
        // console.log(3, 'CheckLocation', locator)
        });
    },[maploc]);
    return locator
}

export function WeatherDataGet(){
    const [response, setresponse] = useState<any>()
    let url =  CheckLocation()
    async function testt(){
        await fetch(url)
        .then((res)=>res.json())
        .then(data=> {
            setresponse(data)
        })
        .catch((err)=> {            
        }) 
    }
    useEffect(()=>{
        testt();
    },[url])
    return response
    
}


type loc = {
  lon: number,
  lat: number,
  children?: ReactNode;
}
let loc1 = {
    lon: 19.6,
    lat: 100.98
}



export const Card: FC<loc> = (loco =loc1) => {
    const [response, setresponse] = useState<any>(); 
    let maploc:any =defaultparam.weather_url + defaultparam.api_key +loco.lat +' '+loco.lon+ '&aqi=no'
    useEffect(() =>{
        axios 
        // .get('https://ktc-ph-api.herokuapp.com/?format=json')
        .get(maploc)
        .then(res =>{
            setresponse(res.data)
        })
        .catch(err =>{
        });
    },[]);
    return <>
        {response}
    </>
};


