 import { ApiProvider, useApi } from "../../componets/API/weather_query";

export function DevMod(){
	const [auth, handleAuth, c] = useApi(useApi);
	return<>

		testing
		<button onClick={handleAuth}>Change auth</button>
		
	</>
}