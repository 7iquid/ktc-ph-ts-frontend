import React from 'react';
import Box from "./Box/Box";
import Grid from "./Grid/Grid";
import GridRuler from "./GridRuler/GridRuler";
import GetWeatherData,{WeatherDataGet}from '../API/weather_query';
import Row from '../request/test';




function Weather() {
  // console.log(Day())
  let data = WeatherDataGet()
  // let current:string = data.state

  return (
    <div
      className="Weather"
      style={{ 
      margin: "auto", 
      marginTop: "60px",
      position: "relative", 
      height: "100vh",
      width: "50%",
      flex :'center',

       }}
    >
    <Grid>
    <Box >
      asdwasd
    </Box>
    <Box >
      asdwasd
    </Box>
    </Grid>

  {/*        <Box>
{cards?.items.map((card: ICardItem) => {
         return <WeatherDataGet
          key={data.id}
          id={data.id}
          img={data.img}
          gender={data.gender}
          name={data.name}
         />;
    })}        
          </Box>*/}

    </div>
  );
}

export default Weather;