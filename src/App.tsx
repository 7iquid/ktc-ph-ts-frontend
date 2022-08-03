import React, {useState, createContext, useContext } from 'react';
import {Helmet} from 'react-helmet';
import styles from './App.module.scss';
import { NavBarUrl, RoutingViews} from './componets/Navbar/navBar';
import { SearchBox } from './componets/SearchBox/searchBox';
import { ApiProvider,DeviceLocation } from './componets/API/weather_query';

function App() {

  return (
    <div>
      <Helmet>
        <style type="text/css">{styles.body}</style>   
      </Helmet>
      <DeviceLocation>
        <ApiProvider>
          <NavBarUrl/>
          <SearchBox/>
          <RoutingViews/>
        </ApiProvider>
        </DeviceLocation>
    </div>
)}

export default App;

