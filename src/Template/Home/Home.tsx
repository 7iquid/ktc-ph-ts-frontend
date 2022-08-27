import styles from './Home.module.scss'
import React, { useState, useEffect, useContext } from 'react';
import { ApiContext } from '../../componets/API/ApiProvider';
import { Fade } from 'react-slideshow-image';
import { removeFromLocal } from '../../componets/API/LocalStorageApi';
import 'react-slideshow-image/dist/styles.css'
const JsonFind = require("json-find");



export function Home() {
  let {newsfeed} =useContext(ApiContext)
  let data = newsfeed[1]
  return (
    <div className={styles.main}>
      {/*<h1>SLIDES SHOW</h1>*/}
        <Fade>
          {data?.map((data:any, index:any) => (
            <div className="each-fade" key={index}>
              <div className="image-container">
                <img src={data.photo} className={styles.photo} />
              </div>
              <h2>{data.name} { data?.date}</h2>
            </div>
          ))}
        </Fade>
    </div>
  );
}

// export default Home;