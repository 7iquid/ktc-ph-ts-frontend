import styles from './Home.module.scss'
import React, { useState, useEffect, useContext } from 'react';
import { ApiContext } from '../../componets/API/ApiProvider';
import { Fade } from 'react-slideshow-image';
import { removeFromLocal } from '../../componets/API/LocalStorageApi';
import 'react-slideshow-image/dist/styles.css'
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid  from '@mui/material/Grid';
const JsonFind = require("json-find");


export function Home() {
  return(
    <Grid  display=' flex'>
      <Grid item xs={6} md={8}>

                 <p>Proident aliquip sed voluptate 
        nullaaa
        sedasd
        asd nostrud voluptate deserunt dolor ullamco fugiat anim ea et magna qui dolor excepteur et reprehenderit fugiat proident in excepteur quis aute.</p>


      </Grid>
      <Grid item xs={6} md={8}>
        {/*<NewsFeeds/>*/}
        <Fade>    
          <p>Proident aliquip sed voluptate 
          nulla nostrud voluptate deserunt dolor ullamco fugiat anim ea et magna qui dolor excepteur et reprehenderit fugiat proident in excepteur quis aute.</p>
        </Fade>   
      </Grid>
    </Grid> 
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
              <h2>{data.name} { data?.date}</h2>
            </div>
          ))}
        </Fade>
        : <CircularProgress/>}
    </div>
  );
}