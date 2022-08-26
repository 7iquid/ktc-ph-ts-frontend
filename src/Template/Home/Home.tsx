import styles from './Home.module.scss'
import React, { useState, useEffect, useContext } from 'react';
import { ApiContext } from '../../componets/API/ApiProvider';
import { Fade } from 'react-slideshow-image';
import { removeFromLocal } from '../../componets/API/LocalStorageApi';
import 'react-slideshow-image/dist/styles.css'

const newsfeedsc = [
  {
  photo: '',
  name: 'Loading'
  },
];


// function useRefreshState(urlNewsfeeds){
//   const [refresh , setUrlNewsfeedsrefresh] = useState(()=>{
//      const ok = 'ok'
//      return ok
//   })
//   return [refresh , setUrlNewsfeedsrefresh]
// }


export function Home() {
  let {newsfeed, urlNewsfeeds} =useContext(ApiContext)
  // const [urlNewsfeedsrefresh, setUrlNewsfeedsrefresh] = useRefreshState(urlNewsfeeds )
  // const [newsfeed, setNewsfeed] = useState(newsfeedsc)
  // useEffect(()=>{setNewsfeed(newsfeeds)},[newsfeeds])
    // <img src={newsfeed.photo} className={styles.photo} onError={setUrlNewsfeedsrefresh}/>
  return (
    <div className={styles.main}>
      {/*<h1>SLIDES SHOW</h1>*/}
        <Fade>
          {newsfeed?.map((newsfeed:any, index:any) => (
            <div className="each-fade" key={index}>
              <div className="image-container">
                <img src={newsfeed.photo} className={styles.photo} />
              </div>
              <h2>{newsfeed.name} { newsfeed?.date}</h2>
            </div>
          ))}
        </Fade>
    </div>
  );
}

// export default Home;