import { useState } from 'react';
import style from './navBar.module.scss'
import Weather, { SingleWeather,  } from '../Weather/weather'
import Tooltip from '@mui/material/Tooltip';
import { Routes, Route, Link, Navigate } from "react-router-dom";
import { Home } from '../../Template/Home/Home';
import { About } from '../../Template/About/About';
import { DevMod } from '../../Template/_DevMode/devmod';
import { AddItem } from '../../Template/Additems/Add/add';
import { LoginPage } from '../AccountView/CreateAccount';

export function NavBarUrl(){
	// const [weatherdata, setweather] =  useState(useLocation);
	return(
		<div className={style.Seperator}> 
			<Tooltip title={<Weather/>} placement="bottom-start"> 
				<div><SingleWeather/></div>
			</Tooltip>

	
			<div >
					 	<Link className={style.NavBar2} to="/">Home</Link>
					 	<Link className={style.NavBar2} to="/additems/add">Add Items</Link>
				<Tooltip title={<LoginPage/>} placement="bottom-start"> 
					 	<button className={style.NavBar2} > Login</button>
				</Tooltip>
					 	<button className={style.NavBar2} > Sign-up</button>
					 	<Link className={style.NavBar2} to="/about">About</Link>
			</div>
		</div> 
		)
}

export function RoutingViews() {
	const authenticated = false
  return (
    <div className={style.RoutePage}>
    	<Routes >
    	{/*{weatherdata?.latitude}*/}
        	<Route path="/" element={<Home />} />
        	<Route path="/about" element={<About />} />
        	<Route path="/devmod" element={authenticated ? <DevMod /> : <Navigate to="/" />} />
        	<Route path="/additems/add" element={<AddItem />} />
    	</Routes>
    </div>
  );
}


function PrivateRoute({children, ...rest}:any){
	console.log(' private po')
	return(
		<Route {...rest}>	
			{children}	
		</Route>
		)
}