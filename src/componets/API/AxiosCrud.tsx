import axios from 'axios'
import { useEffect, useState } from 'react';
import { saveToLocal,getFromLocal } from './LocalStorageApi';


export function useAxiosKo(url:string ,localstoragekey:string, method:string = 'GET'){
    
    const [response, setResponse]:any = useState(getFromLocal(localstoragekey))   

    const headers ={   
        method: method,
        headers :{    
            'Content-Type': 'application/json'
            },
        body : JSON.stringify({'username': null, 'password': null}),
    }
    let axiosMethod = axios.get
    let axiosSignal = false

    if (!getFromLocal(localstoragekey) && method == 'POST' && url){
        axiosMethod = axios.post
        axiosSignal = true
    }else if(!getFromLocal(localstoragekey) && method == 'GET' && url){
        axiosMethod = axios.get
        axiosSignal = true
    } 
    if(axiosSignal){
        axiosMethod(url,headers)
            .then(function (response) {
            // handle success
            
            saveToLocal(localstoragekey, response.data)
            setResponse(response.data)
            // console.log(response.data);
            })
            .catch(function (error) {
            // handle error
            console.log(error);
            })
            .then(function () {
            // always executed
            });          
    }
    return response
}




export function useGetWetherUrl(localStoragekeykey:string){
    const defaultparam ={
        api_key :    '9f5846a3a7984c789b0105235220508&q=',
        weather_url : 'https://api.weatherapi.com/v1/current.json?key=',
        json_path :   '/current.json',
    }
    const [loc2, setLoc]:any = useState(getFromLocal(localStoragekeykey))   
    let loc
    let pos
    if (!getFromLocal(localStoragekeykey)){
        navigator.geolocation.getCurrentPosition(function(position) {
            pos = position
            loc =  defaultparam.weather_url + defaultparam.api_key +pos?.coords.latitude +' '+pos?.coords.longitude+ '&aqi=no'

            if(loc){
                saveToLocal('location',loc)
                // console.log(loc ,11231231232)
            }
            setLoc(loc)

        });
    }
    return loc2
}



// export function useGetAxiom(key:string){
//     // const [loc, setLoc]:any = useState()    
//     const locationloc = useLoc()
//     const response:any = useAxiomKo(locationloc, 'response')
//     const [response2, setResponse] = useState(getFromLocal('response'))  



//     useEffect(()=>{
//         // setLoc(locationloc)
//         setResponse(response)
//     },[locationloc, response])
// return response2
// }


// const ServerModStatus = (()=>{
//     if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
//     // dev code
//     return true
//     } else {
//     // production code
//     return false
// }
// })


// export function DjangoRestApi() {
//   const [forms, setForms] = useState<any>()
//    useEffect(()=>{
//           axios.get('http://127.0.0.1:8000/dtc/' )
//           .then(function (response) {
//           // handle success
//           setForms(response.data)

//           // console.log(response.data);
//           })
//           .catch(function (error) {
//           // handle error
//           console.log(error);
//           })
//           .then(function () {
//           // always executed
//           });
  
//    },[])    
//    // console.log(<div>{'First · Second'}</div>)   
//   return <div > {Parser(forms? forms : '<>loading</>')} </div>
//   // return <h1> Hello pogi</h1>
