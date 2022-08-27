import React,{useEffect, useContext} from 'react';
// import  {WeatherDataGet} from '../API/weather_query';
import styles from "./weather.module.scss";

import CircularProgress from '@mui/material/CircularProgress';
import {ApiContext} from './../API/ApiProvider'
const JsonFind = require("json-find");

function Weather() {
  // let response = WeatherDataGet();
  let  data =useContext(ApiContext)
  const doc = JsonFind(data);
  let current = doc.checkKey("current")
  let location = doc.checkKey("location")

  // let response = weather
  // useEffect(()=>{},[response])
  let linker ='https:'+current?.condition?.icon;
    return (
      <div   className={styles.style}  >
        <div >
          <div>
            <img src={linker}></img>
          </div>  
          <div >
            {location?.region}
          </div>
        </div>
        <div >
              <ul>
                <li> Condition : {current.condition.text}</li>
                <li> Wind  : {current?.wind_kph}</li>
                <li> Wind Direction : {current?.wind_dir}</li>
                <li> Humidity : {current?.humidity}</li>
                <li> TempC : {current.feelslike_c}</li>
                <li> Date/Time : {location.localtime}</li>
              </ul>
        </div>

      </div>
    )
}
export default Weather;


export function SingleWeather(){
  let  data =useContext(ApiContext)
  const doc = JsonFind(data);
  let current = doc.checkKey("current")
  let location = doc.checkKey("location")

  let data2 = <></>
  // useEffect(()=>{},[response])
  let linker ='https:'+current?.condition?.icon;
  if (!location){data2 = <CircularProgress />}
  else{data2= 
      <div className={styles.weatherBox}>
        <div> <img className={styles.weathericon} src={linker}></img></div>
        <div className={styles.weathertext} > {location.country}</div>
      </div>}  
  return(<>{data2}</>
  )
}
