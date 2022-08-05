import React,{useState, useEffect, FC, ReactNode , useContext, createContext} from "react";
import axios from "axios";
import { useGeolocated } from "react-geolocated";
import { LocationContext,DeviceLocation } from "./GeoLoc";


const ApiContext = createContext<any>(undefined);
export const ApiProvider:FC<{children:ReactNode;}> = ({children}) => {
    // let value = useContext(LocationContext);
    const value = useContext(LocationContext);
    // console.log(value)
    return (<>  
                <ApiContext.Provider value={value} >
                   {children}  
                </ApiContext.Provider>

        </>
    )
};

// export const useApi = ({ children }:any) => {
//   const context = useContext(ApiContext);
//   if (context === undefined) {
//     throw new Error("useAuth can only be used inside AuthProvider");
//   }
//   return context;
// };

// export const useLocation = ({ children }:any) => {
//   const context = useContext(LocationContext);
//   if (context === undefined) {
//     throw new Error("useLocation can only be used inside AuthProvider");
//   }
//   return context;
// };





// export function CheckLocation(){
//     // const [locator, setlocator] = useState<any>([19.6,100.98]);
//     const [locator, setlocator] = useState<any>()
//     let maploc:any =''
//     useEffect(() =>{
//         navigator.geolocation.getCurrentPosition((position)=> {
//         maploc =defaultparam.weather_url + defaultparam.api_key +position.coords.latitude +' '+position.coords.longitude+ '&aqi=no'
//         setlocator(maploc)
//         // console.log(3, 'CheckLocation', locator)
//         });
//     },[maploc]);
//     return locator
// }

// export function WeatherDataGet(){
//     const [response, setresponse] = useState<any>()
//     let url =  CheckLocation()
//     async function testt(){
//         await fetch(url)
//         .then((res)=>res.json())
//         .then(data=> {
//             setresponse(data)
//         })
//         .catch((err)=> {            
//         }) 
//     }
//     useEffect(()=>{
//         testt();
//     },[url])
//     return response
    
// }


// type loc = {
//   lon: number,
//   lat: number,
//   children?: ReactNode;
// }
// let loc1 = {
//     lon: 19.6,
//     lat: 100.98
// }



// export const Card: FC<loc> = (loco =loc1) => {
//     const [response, setresponse] = useState<any>(); 
//     let maploc:any =defaultparam.weather_url + defaultparam.api_key +loco.lat +' '+loco.lon+ '&aqi=no'
//     useEffect(() =>{
//         axios 
//         // .get('https://ktc-ph-api.herokuapp.com/?format=json')
//         .get(maploc)
//         .then(res =>{
//             setresponse(res.data)
//         })
//         .catch(err =>{
//         });
//     },[]);
//     return <>
//         {response}
//     </>
// };


