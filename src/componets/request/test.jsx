import React,{useState, useEffect} from "react";
import axios from "axios";


function Row(){
	const [movies, setMovies] = useState([]);

	useEffect(() =>{
		async function fetchData(){
			let fetchUrl ='https://ktc-ph-api.herokuapp.com/?format=json'
			const request = await axios.get(fetchUrl);
			setMovies(request);
			console.log(movies)
			return request;
		}
		fetchData();

	},[]);

	return(
		<div data={movies}>
			<h2>movie title</h2>
			
		</div>
	)
}

export default Row;