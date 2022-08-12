import styles from './Home.module.scss'
import React, { useState, useEffect } from 'react';

// export function Home() {
//   return (
//     <div className={styles.main}>
//       <h1 >Welcome to React Router!</h1>
//     </div>
//   );
// }




const Thumbnail = ({ arr, image, index }:any) => {
  return (<div className="tumbnail">
    {
      arr.map((imgsrc:any, i:any) => (
        <img
          key={i}
          height="50"
          src={imgsrc}
          onClick={() => image(i)}
          className={index === i ? 'active' : ''}
        />
      ))
    }
  </div>)
}

const Slideshow = ({ imgs }:any) => {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    setIndex(0)
  }, [])

  const next = () => {
    if (index === imgs.length - 1) {
      setIndex(0)
    } else {
      setIndex(index + 1)
    }
  }
  const prev = () => {
    if (index === 0) {
      setIndex(imgs.length - 1)
    } else {
      setIndex(index - 1)
    }
  }


  return (
    <div className="slideshow">
      <img className="mainImg" src={imgs[index]} />
      <div className="actions">
        <button onClick={prev}>👈</button>
        <button onClick={next}>👉</button>
      </div>
      <Thumbnail arr={imgs} image={setIndex} index={index} />
    </div>
  )
}

export function Home() {

  return (
    <div className={styles.main}>
      <h1>SLIDES SHOW</h1>
      <Slideshow
        imgs={[
          'https://images.unsplash.com/photo-1585255318859-f5c15f4cffe9?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixlib=rb-1.2.1&q=80&w=500',
          'https://images.unsplash.com/photo-1584226761916-3fd67ab5ac3a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixlib=rb-1.2.1&q=80&w=500',
          'https://images.unsplash.com/photo-1585179292338-45ba1f62f082?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixlib=rb-1.2.1&q=80&w=500',
          'https://images.unsplash.com/photo-1584753987666-ead137ec0614?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixlib=rb-1.2.1&q=80&w=500',
          'https://images.unsplash.com/photo-1584691267914-91c0bee55964?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixlib=rb-1.2.1&q=80&w=500',
          'https://images.unsplash.com/photo-1585084335487-f653d0859c14?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixlib=rb-1.2.1&q=80&w=500',
          'https://images.unsplash.com/photo-1583217874534-581393fd5325?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixlib=rb-1.2.1&q=80&w=500',
          'https://previews.dropbox.com/p/thumb/ABnvdNzuW1o6B9q-g7KpDZ1eep341iGsW3msdBK1lkGYKt4r7eCo8Rhye_b7dJuLX-wEfJgCtGTO8F1JUnAuyCK4UodxwPbv0aTyAGZ3Yle5Gh4AbwQ1gI30AwBhMb1CrFoKhozzamFry0UBRjCtOpqm-wn0fSQXHPnkuBaq2upFVsaXXdiYVeK0i2eRajFTw6BHOlkgxPWasWUY2v0pIi1x-vvX8svl-iLyDtbqpwvDZSWhYNDcZLU8K4u12GSsp-8xKtKD0-kO6iEUfboz0s9SXiIAHem-7JvcGsZrguCysN0DD3ZNbqP3uOXzl9jesoMbp5mD5NQEU0_CU-YXfhcyvpZlYoah8QPfJCmSjk9S9cB1nqqDv-jT-XJHrIBqiMI/p.jpeg'
        ]}
      />
    </div>
  );
}

// export default Home;