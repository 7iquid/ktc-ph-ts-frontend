import style from './navBar.module.scss'
import Weather, { SingleWeather,  } from '../Weather/weather'
import Tooltip from '@mui/material/Tooltip';


export function NavBar(){
	return(
		<div className={style.Seperator}> 
			
			<Tooltip title={<Weather/>} placement="right-start"> 
				<div><SingleWeather/></div>
				
			</Tooltip>
			<div className={style.NavBar}>
					
					<button>Home</button>
					<button>TACK MY ORDER</button>
					<button>LOGIN</button>
					<Tooltip title={<SingleWeather/>} placement="right-start"> 
						<button>SIGNUP</button>
					</Tooltip>
			</div>
		</div> 
		)
}