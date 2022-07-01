import React,{useState, useEffect} from "react";
import axios from "axios";


function Row({title, fetchUrl, ...props}){
	const [movies, setMovies] = useState([]);

	useEffect(() =>{
		async function fetchData(){
			const request = await axios.get(fetchUrl);
			setMovies(request);
			console.log(request)
			return request;
		}
		fetchData();

	},[]);

	return(
		<div>
			<h2>movie title</h2>
			<h2>{setMovies}</h2>


		</div>
	)
}

export default Row;