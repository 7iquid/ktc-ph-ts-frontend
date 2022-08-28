import styles from './Home.module.scss'
import React, { useState, useEffect, useContext } from 'react';
import { ApiContext } from '../../componets/API/ApiProvider';
import { Fade } from 'react-slideshow-image';
import { removeFromLocal } from '../../componets/API/LocalStorageApi';
import 'react-slideshow-image/dist/styles.css'
import CircularProgress from '@mui/material/CircularProgress';

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
const JsonFind = require("json-find");

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    }));

export function Home() {
  return(
    <div className={styles.main}>
      <Grid container spacing={2}>
        
        <Grid item xs={6} md={10} display='flex'>
            <CathergoriesKo/>
          <Grid item xs={10} md={6}>
            <NewsFeeds/>
          </Grid>
        </Grid>

      </Grid>
    </div>
  )
}




function NewsFeeds(){
   let {newsfeed,renderit = false} =useContext(ApiContext)
  if(newsfeed){ newsfeed =newsfeed?.responsedata; renderit =true}
  return (
    <div className={styles.newsfeed}>
      {/*<h1>SLIDES SHOW</h1>*/}
      {renderit ?
        <Fade>
          {newsfeed?.map((data:any, index:any) => (
            <div className="each-fade" key={index}>
              <div className="image-container">
                <img src={data.photo} className={styles.photo} />
              </div>
            </div>
          ))}
        </Fade>
        : <CircularProgress/>}
    </div>
  );
}


function CathergoriesKo() {
  return(
    <div className={styles.main}>
      <h3>ELECTRICAL PARTS</h3>  
      <h3>FABRICATION PARTS</h3> 
      <h3>ELECTRONICS PARTS</h3> 
    </div>
  )
}
