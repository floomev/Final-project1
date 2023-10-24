import { useState } from 'react';
import styles from './style.module.css'
import { useLocalStorage } from '../../hook/useLocalStorage';

const Home = () => {
    // const [user, setUser] = useState("");
    const[user, setUser] = useLocalStorage("USER", "")
    const [inputValue, setInputValue] = useState("")
    return <div className={styles.container}>
       {user && (
        <div >
            <div className={styles.text}>Welcome, {user}!<br/>
            <p>My name is Nikita! I'm a frontend developer and it's my final project!</p>
            </div>
            <button onClick={()=> setUser("")}>Log out</button>
        </div>
       )}
       {!user && (
        <div className={styles.label}>
            <label >
                Enter your name
            </label>
            <input className={styles.in} type="text"  value={inputValue} onChange={(e)=> setInputValue(e.target.value)}/>
            <button onClick={()=> setUser(inputValue)}>Save</button>
        </div>
       )}
    </div>
  
};

export default Home;