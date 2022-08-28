import axios from 'axios'
import { useEffect, useState } from 'react';
import { saveToLocal,getFromLocal,removeFromLocal } from './LocalStorageApi';

interface axiosReq{
    url:string ,
    localstoragekey:string, 
    method:string , 
    datelocalExpiration:number,
}


export function useAxiosKo(Args:axiosReq) {
    const {url,localstoragekey, method , datelocalExpiration} = Args
    const [response, setResponse] = useState(getFromLocal(localstoragekey))   
    const headers ={   
        method: method,
        headers :{    
            'Content-Type': 'application/json'
            },
        body : JSON.stringify({'username': null, 'password': null}),
    }

    let axiosMethod = axios.get
    let axiosSignal = false
    

    if (getFromLocal(localstoragekey)){
        let {dateLocalStored} = getFromLocal(localstoragekey)
        dateLocalStored =Date.parse(dateLocalStored)
        let CurrentDate:any = new Date()
        let MinutedUpCounter = (((CurrentDate - dateLocalStored)/1000)/60)
        if(MinutedUpCounter>datelocalExpiration){
            removeFromLocal(localstoragekey)
        }
    }


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
            let dataToLocal = {
                dateLocalStored :new Date(),
                responsedata:response.data
            }
            // addDate.push(response.data)
            saveToLocal(localstoragekey, dataToLocal)
            setResponse(dataToLocal)
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
