import React,{useState, useEffect, FunctionComponent} from "react";
import axios from "axios";

// type WeatherData = Function;
type Employee = {
  id?: number;
  name?: string;
};

interface Props {
    // children: ReactNode;
    count: number;
    connected: boolean;
    type: string;
}
// const Counter:FunctionComponent<{ initial?: number }> = ({ initial = 0 }) => {
const GetWeatherData:FunctionComponent<{
    initial?: number;
    WheaterData?: string;
    data3?:Array<Employee>;
}>=({
    data3,
    initial = 0,
    WheaterData = "",
})=>{
    // const [clicks, setClicks] = useState(initial);
    // const [count, setCount] = useState<Props|number>(0);
    // const [wearablesList, setWearablesList] = useState<Props[]>([]);
    const [data1, setdata1] = useState(initial);
    

    useEffect(() =>{
        async function fetchData(){
            let fetchUrl ='https://ktc-ph-api.herokuapp.com/?format=json'
            // const setdata1 = await axios.get(fetchUrl);
            setdata1(await axios.get(fetchUrl));
            // const [wearablesList, request] = useState<Props[]>([]);
            console.log(data1)
            return WheaterData;
        }
        fetchData();
    },[]);

    return<></>
} 

export default GetWeatherData;