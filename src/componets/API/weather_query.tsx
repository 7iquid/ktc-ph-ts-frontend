import React,{useState, useEffect, FC, ReactNode} from "react";
import axios from "axios";

export const DefaultWetherApi= require('./defaultwheaterapi.json');

interface resp{
    location:string,
    current:string,
}

interface paramsko  {
    api_key?:string ,
    weather_url?:string ,
    json_path?:string ,
    lat?: number ,
    lon?: number ,
    
}

export const defaultparam ={
    api_key :    '8daf2b94b0ef4115bde152002222506&q=',
    weather_url : 'http://api.weatherapi.com/v1/current.json?key=',
    json_path :   '/current.json',
}

function CheckLocation(){
    const [locator, setlocator] = useState<[number,number]>([14.6,120.98]);
    useEffect(() =>{
        navigator.geolocation.getCurrentPosition((position)=> {
        setlocator([position.coords.latitude,  position.coords.longitude])
    });
    },locator);
    return locator
}

export function WeatherDataGet(para:paramsko = defaultparam){
    // console.log(2 , 'WeatherDataGet', params);
    let data =DefaultWetherApi
    const [response, setresponse] = useState<any>(DefaultWetherApi);
    const [loading, setLoading] = useState(true)
    let [lat,lon]  =CheckLocation()
    let maploc:any =defaultparam.weather_url + defaultparam.api_key +lat +' '+lon+ '&aqi=no'
    console.log(maploc)
    useEffect(() =>{
        axios 
        // .get('https://ktc-ph-api.herokuapp.com/?format=json')
        .get(maploc)
        .then(res =>{
            setLoading(false)
            setresponse(res.data)
            console.log(2,'WeatherDataGet', res.data)
        })
        .catch(err =>{
            setLoading(false)
        });
    },[]);
    
    
    // try{data = response}catch{data =DefaultWetherApi}

    // if (!response){data = response}else{data =DefaultWetherApi}
    // console.log(2,'WeatherDataGet', data);
    return [loading,response]; 
}


export const TestingHooks: FC<{ 
    children: ReactNode; 
    params:any;
    src?: string | undefined; 
}> = ({ 
    children,
    params, 
}) => {
    let namer = "tatay"
    let name2 = children
    console.log(3, 'TestingHooks',params)
    console.log(3, 'TestingHooks', )
    const el = <Card title="Welcome!" paragraph="To this example" />
    return <div >  {namer}  {params} {el}</div>;
};


type CardProps = {
  title: string,
  paragraph: string
  children?: ReactNode;

}

export const Card: FC<CardProps> = ({ title, paragraph }: CardProps) => {
let namess ="get tje ball"    
return <aside>
  <h2>{ title }</h2>
  <p>
    { paragraph } { namess }
  </p>
</aside>
};


