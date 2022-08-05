import React,{useState,useEffect} from 'react';
// import  {WeatherDataGet} from '../API/weather_query';
import styles from "./weather.module.scss";

import CircularProgress from '@mui/material/CircularProgress';

function Weather() {
  // let response = WeatherDataGet();
  let response:any
  useEffect(()=>{},[response])
  let linker ='https:'+response?.current?.condition?.icon;
    return (
      <div   className={styles.style}  >
        <div >
          <div>
            <img src={linker}></img>
          </div>  
          <div >
            {response?.location.region}
          </div>
        </div>
        <div >
              <ul>
                <li> Condition : {response?.current.condition.text}</li>
                <li> Wind  : {response?.current?.wind_kph}</li>
                <li> Wind Direction : {response?.current?.wind_dir}</li>
                <li> Humidity : {response?.current?.humidity}</li>
                <li> TempC : {response?.current.feelslike_c}</li>
                <li> Date/Time : {response?.location.localtime}</li>
              </ul>
        </div>

      </div>
    )
}
export default Weather;

export const Teshook =(props:any)=>{
  const [response, setresponse] = useState<any>(); 
  return(
    <>
       <div   className={styles.style}  >
       awdcawrawrf {props.data}
       </div>
    </>
    )
}

export function SingleWeather(){
  // let response = WeatherDataGet();
  let response:any
  // let response:any
  let data = <></>
  useEffect(()=>{},[response])
  let linker ='https:'+response?.current?.condition?.icon;
  if (!response){data = <CircularProgress />}
  else{data= 
      <div className={styles.weatherBox}>
        <div> <img className={styles.weathericon} src={linker}></img></div>
        <div className={styles.weathertext} > {response?.location.country}</div>
      </div>}  
  return(<>{data}</>
  )
}
