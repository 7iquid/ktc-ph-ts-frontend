import React,{useState,useEffect} from 'react';
import Box from "./Box/Box";
import Grid from "./Grid/Grid";
import GridRuler from "./GridRuler/GridRuler";
import  {WeatherDataGet, defaultparam,TestingHooks, DefaultWetherApi} from '../API/weather_query';
import Row from '../request/test';
import styles from "./weather.module.scss";


function Weather() {
  let [status,response] = WeatherDataGet()
  if(status){
  return (
    <div   className={styles.style}  >
      <Box >
      Loading
      </Box>
    </div>
  );
  }else{let linker ='https:'+response.current.condition.icon;
    return (
      <div   className={styles.style}  >

        <Box justifyContent='center'>
        {response.location.region}
        
        <img src={linker}></img>
       </Box>

        <Box >
          <TestingHooks params={'asda'}>
          
          tamina 
            <Box >
            pogi
            </Box>
          </TestingHooks>
        </Box>
      </div>
    )
  }
}
export default Weather;