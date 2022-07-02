import React,{useState, useEffect, FunctionComponent} from "react";
import axios from "axios";

// type WeatherData = Function;


interface Props {

}
 const [name, setName] = useState<string>('');
 
const StateHooksComponent: React.FC<Props> = ({}) => {
   

    return (
        <div>
            State Hooks component
        </div>
    )
}

export default StateHooksComponent;