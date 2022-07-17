


## example
how to query using function


`code( 
import WeatherDataGet from './API/weather_query' 
// 
function Sample_get(){
	let data = WeatherDataGet()
	console.log(data)
	}
)`
```javascript
```

*default sample output*
`code(
{
    "location": {
        "name": "Manila",
        "region": "Manila",
        "country": "Philippines",
        "lat": 14.6,
        "lon": 120.98,
        "tz_id": "Asia/Manila",
        "localtime_epoch": 1658072273,
        "localtime": "2022-07-17 23:37"
    },
    "current": {
        "last_updated_epoch": 1658071800,
        "last_updated": "2022-07-17 23:30",
        "temp_c": 27,
        "temp_f": 80.6,
        "is_day": 0,
        "condition": {
            "text": "Partly cloudy",
            "icon": "//cdn.weatherapi.com/weather/64x64/night/116.png",
            "code": 1003
        },
        "wind_mph": 2.2,
        "wind_kph": 3.6,
        "wind_degree": 256,
        "wind_dir": "WSW",
        "pressure_mb": 1009,
        "pressure_in": 29.8,
        "precip_mm": 0.4,
        "precip_in": 0.02,
        "humidity": 84,
        "cloud": 25,
        "feelslike_c": 30.4,
        "feelslike_f": 86.8,
        "vis_km": 10,
        "vis_miles": 6,
        "uv": 1,
        "gust_mph": 3.1,
        "gust_kph": 5
    }
}
)`	
```javascript
```


`http://api.weatherapi.com/v1/current.json?key=8daf2b94b0ef4115bde152002222506 &q=London&aqi=no`








