import styles from './Home.module.scss'
import React, { useState, useEffect, useContext } from 'react';
import { ApiContext } from '../../componets/API/ApiProvider';
import { Fade } from 'react-slideshow-image';
import { removeFromLocal } from '../../componets/API/LocalStorageApi';
import 'react-slideshow-image/dist/styles.css'

// const JsonSearch = require('search-array').default

const objectArray = [
  {id:1, title: 'Good book', author: 'Jim', colors: 'red'},
  {id:2, title: 'Interesting Movie', author: 'Bob', colors: 'dark red'},
  {id:3, title: 'Good Series', author: 'Alex', colors: 'dark blue'},
  {id:4, title: 'Something', author: 'Feri', colors: ['red', 'blue']}
]


// const searcher = new JsonSearch(objectArray)
// let foundObjects = searcher.query('good')

// foundObjects = searcher.query('good -red')
// console.log(foundObjects) // prints item 3







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