import React,{useState,useEffect} from 'react';
import Box from "./Box/Box";
import Grid from "./Grid/Grid";
import GridRuler from "./GridRuler/GridRuler";
import  {WeatherDataGet, defaultparam, DefaultWetherApi,CheckLocation} from '../API/weather_query';
import styles from "./weather.module.scss";
import { Parent } from '../test/test_context';

function Weather() {
  let response = WeatherDataGet();
  let linker ='https:'+response?.current?.condition?.icon;
    return (
      <div   className={styles.style}  >
        <Box >
          <Grid justifyContent='space-between'       
                container
                spacing="sm"
                alignItems="center"
                sm={4} >
          <div>
            {response?.location.region}
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
                <li> Condition : {response?.current.condition.text}</li>
                <li> Wind  : {response?.current?.wind_kph}</li>
                <li> Wind Direction : {response?.current?.wind_dir}</li>
                <li> Humidity : {response?.current?.humidity}</li>
                <li> Address : asdw</li>
                
              </ul>
            </Box>
         
        </Box>

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