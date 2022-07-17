import React,{useState,useEffect} from 'react';
import Box from "./Box/Box";
import Grid from "./Grid/Grid";
import GridRuler from "./GridRuler/GridRuler";
import {WeatherDataGet, defaultparam} from '../API/weather_query';
import Row from '../request/test';
import styles from "./weather.module.scss";


function Weather() {
  const [WeatherDataGetresponse, setWeatherDataGetresponse] = useState<any>();
  let a = WeatherDataGet()
  let name = 'name'
  try{name = a.location.name}catch{}
  // console.log(name);
  // console.log(1);
  
  return (
    <div   className={styles.style}  >
      <Box >
        {name}
      </Box>
      <Box >
        
        asdwasd
    
      </Box>

    </div>
  );
}

export default Weather;