import styles from './Home.module.scss'
import React, { useState, useEffect, useContext } from 'react';
import { ApiContext } from '../../componets/API/ApiProvider';
import { Fade } from 'react-slideshow-image';
import { removeFromLocal } from '../../componets/API/LocalStorageApi';
import 'react-slideshow-image/dist/styles.css'
import CircularProgress from '@mui/material/CircularProgress';
const JsonFind = require("json-find");


export function Home() {
  let {newsfeed} =useContext(ApiContext)
  let renderit = false
  if(newsfeed){ newsfeed =newsfeed[1]; renderit =true}
  console.log(newsfeed)
  return (
    <div className={styles.main}>
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

// export default Home;