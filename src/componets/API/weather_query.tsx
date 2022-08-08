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

// export default function Appss() {


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



// function MyComponent() {
//   const [data, setData] = useState();
//   const isMounted = useRef(false);

//   // An effect to fetch the data
//   useEffect(() => {
//     fetch('/api/some-api')
//       .then((res) => res.json())
//       .then((d) => {
//         setData(d);
//       });
//   }, []);

//   // Do something else with the data
//   useEffect(() => {
//     if (isMounted.current) {
//       // doSomething(data);
//     } else {
//       isMounted.current = true;
//     }
//   }, [data]);
// }