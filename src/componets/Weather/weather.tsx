import React from 'react';
import Box from "./Box/Box";
import Grid from "./Grid/Grid";
import GridRuler from "./GridRuler/GridRuler";
import GetWeatherData,{Day}from '../API/weather_query';
import Row from '../request/test';


function Weather() {
  console.log(Day())
  return (
    <div
      className="Weather"
      style={{ margin: "16px", position: "relative", height: "100vh" }}
    >
      <div >
      <GetWeatherData/>

      <Row/>

      </div>
      <GridRuler spacing="sm"></GridRuler>

      <Grid
        container
        spacing="sm"
        alignItems="center"
        style={{ height: "100%" }}
      >
        <Grid item xs={1} sm={6} md={4} lg={3}>
          <Box>Box 1</Box>
        </Grid>

        <Grid item xs={1} sm={6} md={4} lg={3}>
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
        </Grid>
      </Grid>
    </div>
  );
}

export default Weather;