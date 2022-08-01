import React from 'react';
import {Helmet} from 'react-helmet';
import styles from './App.module.scss';
import Weather from './componets/Weather/weather';
import { NavBar } from './componets/Navbar/navBar';
import { SearchBox } from './componets/SearchBox/searchBox';

function App() {

  return (
    <div>
      <Helmet>
        <style type="text/css">{styles.body}</style>   
      </Helmet>
       <NavBar/>
       <SearchBox/>
      <Weather/>

    </div>
)}

export default App;
