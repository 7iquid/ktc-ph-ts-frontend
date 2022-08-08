import { useContext } from "react";
import styles from './add.module.scss'


export function AddItem() {
    return<div className={styles.main}> 

    <h1></h1>
    <form>
      <label>Enter your name:  
        <input type="text" />
      </label>
    </form>

    </div>
}
