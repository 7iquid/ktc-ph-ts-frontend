import React,{useState,useEffect} from 'react';
import Box from "./Box/Box";
import Grid from "./Grid/Grid";
import GridRuler from "./GridRuler/GridRuler";
import {WeatherDataGet} from '../API/weather_query';
import Row from '../request/test';
import styles from "./weather.module.scss";

// import Users from '../test/testaxiox';
// import './weathers.scss';
// import styles from "./Box.module.scss";


function Weather() {
  let namess = '111111111'
  return (
    <div   className={styles.style}  >
      <Box >
        <WeatherDataGet/>
      </Box>
      <Box >
        
        asdwasd
    
      </Box>

    </div>
  );
}

export default Weather;