import React from 'react';
import {Helmet} from 'react-helmet';
import styles from './App.module.scss';
import { NavBarUrl, RoutingViews} from './componets/Navbar/navBar';
import { SearchBox } from './componets/SearchBox/searchBox';


function App() {

  return (
    <div>
      <Helmet>
        <style type="text/css">{styles.body}</style>   
      </Helmet>
      <NavBarUrl/>
      <SearchBox/>
      <RoutingViews/>
    </div>
)}

export default App;
