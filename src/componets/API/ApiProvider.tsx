import React,{useState, useEffect, FC, ReactNode ,  createContext} from "react";
import { useGetWetherUrl, useAxiosKo} from "./AxiosCrud";
import { saveToLocal,getFromLocal } from './LocalStorageApi';
// import { memoryUsage } from 'node:process';

export const ApiContext = createContext<any>(undefined);
const urlNewsfeeds = 'https://ktc-ph-api.herokuapp.com/api/'

export const ApiProvider:FC<{children:ReactNode;}> = ({children}) => {
    let WetherUrl:any = useGetWetherUrl('location')
    let weeatherResponse:any =useAxiosKo(WetherUrl ,'WeatherData', 'POST')
    let newsfeed = useAxiosKo(urlNewsfeeds, 'newsfeed')
   
    
    // const [weather , setWeather] = useState('')

    const context:any={
        weather: weeatherResponse,
        newsfeed: newsfeed,
        urlNewsfeeds:urlNewsfeeds,
     }

    // useEffect(()=>{
    //   setWeather(context)
    // },[weeatherResponse, WetherUrl, newsfeed])
    // console.log(weeatherResponse , authresponse)
    return (<>  
                <ApiContext.Provider value={context} >{children} </ApiContext.Provider>

        </>
    )
};



// const ServerModStatus = (()=>{
//     if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
//     // dev code
//     return true
//     } else {
//     // production code
//     return false
// }
// })



// export function useGetAxiom(key:string){
//     // const [loc, setLoc]:any = useState()    
//     const locationloc = useLoc()
//     const response:any = useAxiomKo(locationloc, 'response')
//     const [response2, setResponse] = useState(getFromLocal('response'))  


//     useEffect(()=>{
//         // setLoc(locationloc)
//         setResponse(response)
//     },[locationloc, response])
// return response2
// }
