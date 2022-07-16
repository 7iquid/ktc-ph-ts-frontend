import React,{useState, useEffect, FunctionComponent} from "react";
import axios from "axios";

interface location2{
    data: {
        location:{
            country: string;
            lat: number;
            localtime: Date;
            localtime_epoch: number;
            lon: number;
            name: string;
            region: string;
            tz_id: string;
            }
        }
    }

// return (<ul>{Object.keys(data1).map((key,index)=><li>{key} :  {data1[key]}</li>)}</ul>)
export function WeatherDataGet(){
    const [data1, setdata1] = useState<any>(false);
    const [loading, setLoading] = useState(true)
    useEffect(() =>{
       axios 
        .get<any>('https://ktc-ph-api.herokuapp.com/?format=json')
        .then(res =>{
            setLoading(false)
            setdata1(res.data.location)
            console.log(res.data.location)
        })
        .catch(err =>{
            setLoading(false)
            console.log(err)
        });
              
    },[]);


    if(loading){return <>loading</>
    }else{return (
        <ul>{Object.keys(data1).map((key,index)=><li key={key}>{key} :  {data1[key]}</li>)}</ul>
        )};  

    }

