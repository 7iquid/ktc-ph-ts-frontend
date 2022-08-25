import styles from './Home.module.scss'
import React, { useState, useEffect, useContext } from 'react';
import { ApiContext } from '../../componets/API/ApiProvider';

import { Fade  } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const fadeImages = [
  {
    url: 'https://images.unsplash.com/photo-1585255318859-f5c15f4cffe9?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixlib=rb-1.2.1&q=80&w=500',
    caption: 'Slide 1'
  },
  {
    url: 'https://images.unsplash.com/photo-1584226761916-3fd67ab5ac3a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixlib=rb-1.2.1&q=80&w=500',
    caption: 'Slide 2'
  },
  {
    url: 'https://images.unsplash.com/photo-1585179292338-45ba1f62f082?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixlib=rb-1.2.1&q=80&w=500',
    caption: 'Slide 3'
  },
];



export const Home = () => {
  let {newsfeed} =useContext(ApiContext)
  return (
    <div className={styles.main}>
      <Fade>
        {newsfeed.map((newsfeed:any, index:any) => (
          <div className="each-fade" key={index}>
            <div >
              <img src={newsfeed.photo} />
            </div>
          
          </div>
        ))}
      </Fade>
    </div>
  )
}












// export function Home() {
//   let {newsfeed} =useContext(ApiContext)
//   return (
//     <div className={styles.main}>
//       <h1>SLIDES SHOW</h1>
//       <Slideshow
//         imgs={[
          
//           'https://images.unsplash.com/photo-1585255318859-f5c15f4cffe9?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixlib=rb-1.2.1&q=80&w=500',
//           'https://images.unsplash.com/photo-1584226761916-3fd67ab5ac3a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixlib=rb-1.2.1&q=80&w=500',
//           'https://images.unsplash.com/photo-1585179292338-45ba1f62f082?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixlib=rb-1.2.1&q=80&w=500',
//           'https://images.unsplash.com/photo-1584753987666-ead137ec0614?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixlib=rb-1.2.1&q=80&w=500',
//           'https://images.unsplash.com/photo-1584691267914-91c0bee55964?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixlib=rb-1.2.1&q=80&w=500',
//           'https://images.unsplash.com/photo-1585084335487-f653d0859c14?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixlib=rb-1.2.1&q=80&w=500',

//         ].concat(newsfeed?.map((a:any)=> a?.photo))}
//       />
//     </div>
//   );
// }

// // export default Home;







