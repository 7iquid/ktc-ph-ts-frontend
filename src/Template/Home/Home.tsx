import styles from './Home.module.scss'
import React, { useState, useEffect, useContext } from 'react';
import { ApiContext } from '../../componets/API/ApiProvider';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const newsfeedsc = [
  {
  photo: '',
  name: 'Loading'
  },
];



export function Home() {
  let {newsfeed} =useContext(ApiContext)
  // const [newsfeed, setNewsfeed] = useState(newsfeedsc)

  // useEffect(()=>{setNewsfeed(newsfeeds)},[newsfeeds])
  return (
    <div className={styles.main}>
      {/*<h1>SLIDES SHOW</h1>*/}
        <Fade>
          {newsfeed?.map((newsfeed:any, index:any) => (
            <div className="each-fade" key={index}>
              <div className="image-container">
                <img src={newsfeed.photo} className={styles.photo}/>
              </div>
              <h2>{newsfeed.name}</h2>
            </div>
          ))}
        </Fade>
    </div>
  );
}

// export default Home;