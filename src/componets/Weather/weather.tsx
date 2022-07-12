import React from 'react';
import Box from "./Box/Box";
import Grid from "./Grid/Grid";
import GridRuler from "./GridRuler/GridRuler";
import GetWeatherData,{WeatherDataGet}from '../API/weather_query';
import Row from '../request/test';
import styles from "./weather.module.scss";
// import './weathers.scss';
// import styles from "./Box.module.scss";



function Weather() {
  // console.log(Day())
  let data = WeatherDataGet()
  // let current:string = data.state

  return (
    <div   className={styles.style}  >
      <Box >
        Elit in reprehenderit nisi occaecat occaecat eu ullamco ea proident sunt cillum cillum irure ullamco proident proident aliquip sunt qui sit est eiusmod adipisicing.
      </Box>
      <Box >
        asdwasd
      </Box>

    </div>
  );
}

export default Weather;