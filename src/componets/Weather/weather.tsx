import React,{useState,useEffect} from 'react';
import Box from "./Box/Box";
import Grid from "./Grid/Grid";
import GridRuler from "./GridRuler/GridRuler";
import  {WeatherDataGet, defaultparam, DefaultWetherApi} from '../API/weather_query';
import Row from '../request/test';
import styles from "./weather.module.scss";


function Weather() {
  let [status,response] = WeatherDataGet()
  if(status){
  return (
    <div   className={styles.style}  >
      <Box >
        Loading....
      </Box>
    </div>
  );
  }else{let linker ='https:'+response.current.condition.icon;
    return (
      <div   className={styles.style}  >
        <Box >
          <Grid justifyContent='space-between'       
                container
                spacing="sm"
                alignItems="center"
                sm={4} >
          <div>
            {response.location.region}
          </div>
          <div>
            <img src={linker}></img>
          </div>  
          </Grid>
       </Box>

        <Box >
         <h2 >Welcome to my Weather</h2>
            <Box >
              <ul>
                <li> Condition : {response.current.condition.text}</li>
                <li> Wind  : {response.current.wind_kph}</li>
                <li> Wind Direction : {response.current.wind_dir}</li>
                <li> Humidity : {response.current.humidity}</li>
                
              </ul>
            </Box>
         
        </Box>
      </div>
    )
  }
}
export default Weather;