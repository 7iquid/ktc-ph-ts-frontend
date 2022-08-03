import style from './navBar.module.scss'
import Weather, { SingleWeather,  } from '../Weather/weather'
import Tooltip from '@mui/material/Tooltip';
import { Routes, Route, Link} from "react-router-dom";
import { Home } from '../../Template/Home/Home';
import { About } from '../../Template/About/About';



export function NavBarUrl(){
	return(
		<div className={style.Seperator}> 
			<Tooltip title={<Weather/>} placement="right-start"> 
				<div><SingleWeather/></div>
			</Tooltip>

	
			<div className={style.NavBar}>
					 	<Link className={style.NavBar2} to="/">Home</Link>
					 	<Link className={style.NavBar2} to="/about">About</Link>
			</div>
		</div> 
		)
}

export function RoutingViews() {
  return (
    <div className={style.RoutePage}>
    	<Routes >
        	<Route path="/" element={<Home />} />
        	<Route path="/about" element={<About />} />
    	</Routes>
    </div>
  );
}