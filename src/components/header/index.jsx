import styles from './style.module.css'
import { Link, BrowserRouter, Switch } from "react-router-dom"
const Header = () => {
    return <div className={styles.container}>
        <nav className={styles.navbar}>
          <Link to='/chat'>Chat</Link>
         <Link to='/'>Main Page</Link>
         <Link to='/test'>Data upload</Link>
             
               
                
                
                
           
            
            
            
            
            
        </nav>
    </div>
};

export default Header;