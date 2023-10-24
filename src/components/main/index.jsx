import Chat from '../chat';
import Home from '../home';
import TestApi from '../test-api';
import styles from './style.module.css'
import { BrowserRouter, Switch, Route } from "react-router-dom"
const Main = () => {
    return <div className={styles.container}>
        <Switch >
            <Route exact path='/' component={Home} />
            <Route path='/chat' component={Chat} />
            <Route  path='/test' component={TestApi} />
        </Switch >
        
        
    </div>
};

export default Main;