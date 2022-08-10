import { useContext, useEffect } from "react";
import styles from './add.module.scss';
import { useDropboxChooser } from 'use-dropbox-chooser'
import { useState } from "react";
import axios from 'axios'
import Parser from 'html-react-parser';


export function AddItem() {
  const [forms, setForms] = useState<any>()
   useEffect(()=>{
          axios.get('http://127.0.0.1:8000/dtc/' )
          .then(function (response) {
          // handle success
          setForms(response.data)

          // console.log(response.data);
          })
          .catch(function (error) {
          // handle error
          console.log(error);
          })
          .then(function () {
          // always executed
          });
  
   },[])    
   // console.log(<div>{'First · Second'}</div>)   
  return <div > {Parser(forms? forms : '<>loading</>')} </div>
  // return <h1> Hello pogi</h1>


  
}
