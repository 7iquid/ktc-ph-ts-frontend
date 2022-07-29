import React from 'react';
import {Helmet} from 'react-helmet';
import styles from './App.module.scss';
import Weather from './componets/Weather/weather';
// import styles from "./Box.module.scss";

function App() {

  return (
    <div>
      <Helmet>
        <style type="text/css">{styles.body}</style>   
      </Helmet>
      <Weather/>

    </div>
)}

export default App;
