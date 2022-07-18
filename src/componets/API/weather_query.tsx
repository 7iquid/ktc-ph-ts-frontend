import React,{useState, useEffect, FC, ReactNode} from "react";
import axios from "axios";

interface paramsko  {
    api_key?:string ,
    weather_url?:string ,
    json_path?:string ,
    lat: number ,
    lon: number ,
    
}

export const defaultparam ={
    api_key :    '8daf2b94b0ef4115bde152002222506',
    weather_url : 'http://api.weatherapi.com/v1',
    json_path :   '/current.json',
    lat :14.6,
    lon :20.98,
    
}
type Test = 'name'|'names';
type default_outpu={
    "location":Array<{}>,
    "current": Array<{}>,
}


export function WeatherDataGet(params:paramsko = defaultparam){
    const [response, setresponse] = useState<any>();
    const [loading, setLoading] = useState(true)
    let locationss =CheckLocation()
    params['lat'] = locationss[0]
    params['lon'] = locationss[1]
    useEffect(() =>{
       axios 
        .get('https://ktc-ph-api.herokuapp.com/?format=json')
        .then(res =>{
            setLoading(false)
            setresponse(res.data)
            console.log(params)
        })
        .catch(err =>{
            setLoading(false)
        });
    },[]);
    console.log(2);
    return response

}

function CheckLocation(){
    const [locator, setlocator] = useState<[number,number]>([14.6,120.98]);
    useEffect(() =>{
        navigator.geolocation.getCurrentPosition(function(position) {
        setlocator([position.coords.latitude,  position.coords.longitude])
    });
    },[]);

    return locator
}

export const TestingHooks: FC<{ 
    children: ReactNode; 
    params:string; 
}> = ({ 
    children,
    params, 
}) => {
    let namer = "tatay"
    console.log(3, 'TestingHooks')
    return <div >{children}  {namer} {params}</div>;
};

