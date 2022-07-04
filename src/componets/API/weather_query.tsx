import React,{useState, useEffect, FunctionComponent} from "react";
import axios from "axios";


export function Day(){
    const [data1, setdata1] = useState(0);
    useEffect(() =>{
        async function fetchData(){
            let fetchUrl ='https://ktc-ph-api.herokuapp.com/?format=json'
            // const setdata1 = await axios.get(fetchUrl);
            setdata1(await axios.get(fetchUrl));
            // const [wearablesList, request] = useState<Props[]>([]);
            // console.log(data1)
            return 'ok';
        }
        fetchData();
    },[]);
    return data1
}

const GetWeatherData:FunctionComponent<{
}>=({
})=>{ 
    const [data1, setdata1] = useState(0);
    useEffect(() =>{
        async function fetchData(){
            let fetchUrl ='https://ktc-ph-api.herokuapp.com/?format=json'
            // const setdata1 = await axios.get(fetchUrl);
            setdata1(await axios.get(fetchUrl));
            // const [wearablesList, request] = useState<Props[]>([]);
            // console.log(data1)
            return data1;
        }
        fetchData();
    },[]);
    return<>
        
    </>
} 

export default GetWeatherData;