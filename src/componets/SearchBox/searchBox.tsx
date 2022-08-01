import { useState, useRef } from 'react';
import styles from './searchBox.module.scss'


export function SearchBox(){
	console.log('SearchBox ========>',)
  	const [message, setMessage] = useState('');
  	const inputRef = useRef<any>(null);
    const inputEnter = useRef<any>(null);

	const handleClick = (e:any) => {
    e.preventDefault();
    // 👇️ value of input field
    console.log(inputRef.current.value);
    setMessage(inputRef.current.value)
  };
   
  const Enter = (e:any) => {     
   //it triggers by pressing the enter key    
    if (e.keyCode === 13){
         console.log('wd awd wad');
    }  
  };

  return (
    <div >
		<form className={styles.SearchButton}>
      <input className={styles.Input} ref={inputRef} autoComplete="on" onKeyPress={Enter}  />
  		<button  onClick={handleClick}/>
		</form>
    </div>
  );
};
