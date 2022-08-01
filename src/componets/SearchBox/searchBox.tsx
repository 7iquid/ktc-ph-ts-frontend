import { useState, useRef } from 'react';
import styles from './searchBox.module.scss'
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

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
         <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={top100Films}
      sx={{ width: 600, height:30,  }}
      renderInput={(params) => <TextField {...params} label="PARTS" />}
    />
      {/*<input className={styles.Input} ref={inputRef} autoComplete="on" onKeyPress={Enter}  />*/}
  		<button  onClick={handleClick}/>
		</form>


    </div>
  );
};



const top100Films = [
  { label: 'The Shawshank Redemption', year: 1994 },
  { label: 'The Godfather', year: 1972 },
  { label: 'The Godfather: Part II', year: 1974 },
  { label: 'The Dark Knight', year: 2008 },
  { label: '12 Angry Men', year: 1957 },
  ]