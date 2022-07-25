import React from 'react';
import Weather, {Teshook} from './componets/Weather/weather';
import {Helmet} from 'react-helmet';
import styles from './App.module.scss';
// import styles from "./Box.module.scss";

function App() {

  return (
    <div>
      <Helmet>
        <style type="text/css">{styles.body}</style>   
      </Helmet>
      <Weather/>
      <Teshook/>
    </div>
)}

export default App;
