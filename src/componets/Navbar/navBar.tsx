import style from './navBar.module.scss'
import { SingleWeather } from '../Weather/weather'

export function NavBar(){
	return(
		<div className={style.Seperator}> 
			
		<div> 
			<SingleWeather/>
		</div>
		<div className={style.NavBar}>
				
				<button>Home</button>
				<button>TACK MY ORDER</button>
				<button>LOGIN</button>
				<button>SIGNUP</button>
		</div>
		</div> 
		)
}