import { useState } from 'react';
import style from './navBar.module.scss'
import Weather, { SingleWeather,  } from '../Weather/weather'
import Tooltip from '@mui/material/Tooltip';
import { Routes, Route, Link} from "react-router-dom";
import { Home } from '../../Template/Home/Home';
import { About } from '../../Template/About/About';
import { DevMod } from '../../Template/_DevMode/devmod';
import { AddItem } from '../../Template/Additems/Add/add';

export function NavBarUrl(){
	// const [weatherdata, setweather] =  useState(useLocation);
	return(
		<div className={style.Seperator}> 
			<Tooltip title={<Weather/>} placement="right-start"> 
				<div><SingleWeather/></div>
			</Tooltip>

	
			<div className={style.NavBar}>
					 	<Link className={style.NavBar2} to="/">Home</Link>
					 	<Link className={style.NavBar2} to="/about">About</Link>
					 	<Link className={style.NavBar2} to="/additems/add">Add Items</Link>
			</div>
		</div> 
		)
}

export function RoutingViews() {
  return (
    <div className={style.RoutePage}>
    	<Routes >
    	{/*{weatherdata?.latitude}*/}
        	<Route path="/" element={<Home />} />
        	<Route path="/about" element={<About />} />
        	<Route path="/devmod" element={<DevMod />} />
        	<Route path="/additems/add" element={<AddItem />} />
    	</Routes>
    </div>
  );
}