import React from 'react';
import GetRequestAsyncAwait from '../request/requestko'
import Box from "./Box/Box";
import Grid from "./Grid/Grid";
import GridRuler from "./GridRuler/GridRuler";


function Weather() {
  return (
    <div
      className="Weather"
      style={{ margin: "16px", position: "relative", height: "100vh" }}
    >
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