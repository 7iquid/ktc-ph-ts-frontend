import React,{useState,useEffect} from 'react';
import Box from "./Box/Box";
import Grid from "./Grid/Grid";
import GridRuler from "./GridRuler/GridRuler";
import  {WeatherDataGet, defaultparam, DefaultWetherApi} from '../API/weather_query';
import Row from '../request/test';
import styles from "./weather.module.scss";


let tesname ={
    'food':'tinapay',
    'drinks':'softdrinks',
  
};

function Weather() {
  
  let [status,response] = WeatherDataGet()
  if(status){
  return (

      className="Weather"
      style={{ margin: "11px", position: "relative", height: "100vh" }}
    >
      {/*<GridRuler spacing="lg"></GridRuler>*/}

      <Grid
        container
        spacing="sm"
        alignItems="center"
        style={{ height: "100%" }}
      >
        <Grid item xs={1} sm={6} md={4} lg={3}>
          <Box>
            <GetRequestAsyncAwait/>

          </Box>
        </Grid>

{/*        <Grid item xs={1} sm={6} md={4} lg={3}>
          <Box>Box 2</Box>
        </Grid>

        <Grid item xs={1} sm={6} md={4} lg={3}>
          <Box>Box 3</Box>
        </Grid>

        <Grid item xs={1} sm={6} md={4} lg={3}>
          <Box>Box 4</Box>
        </Grid>

        <Grid item xs={1} sm={6} md={4} lg={3}>
          <Box>Box 4</Box>
        </Grid>

        <Grid item xs={1} sm={6} md={4} lg={3}>
          <Box>Box 4</Box>
        </Grid>*/}

      </Grid>

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