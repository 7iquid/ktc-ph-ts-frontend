import { useContext } from "react";
import styles from './About.module.scss'
import { LocationContext } from "../../componets/API/GeoLoc";

export function About() {
    return<div className={styles.main}> 

    <h1>AKNOWLEDMENT</h1>
    <p>
        Thanks to sir Darel for the traiting and support
    </p>
    </div>
}
