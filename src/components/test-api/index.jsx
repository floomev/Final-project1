import { useEffect, useState } from 'react';
import styles from './style.module.css'

const TestApi = () => {
   const [teamData, setTeamData] = useState([]);
   const [isLoad, setIsLoad] = useState(true)


 useEffect (() => {

    const url = 'https://free-nba.p.rapidapi.com/teams?page=0';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'd6e4a3a2b8mshcc934869fcd57f7p1b1a8bjsn394b2082772b',
            'X-RapidAPI-Host': 'free-nba.p.rapidapi.com'
        }
    };
     fetch(url, options)
     .then((res) => res.json())
     .then((res) => {
        setTeamData(res.data)
        setIsLoad(false)
    })

 }, [])


    return <div >
         
        <div className={styles.container}> 
        
        <h2>TEAMS NBA</h2>
        {isLoad && 
        <div>The loading...</div>
        }
        {teamData.map((el)=> {
            return(
               
                <div key={el.id}>
                    {el.id}. {el.abbreviation} {el.city}
                    <img onClick={()=>{
                       setTeamData(teamData.filter((filEl) => el.id !== filEl.id)) 
                    }}
                    style={{width: '20px', height: '20px'}}  
                    src="https://cdn0.iconfinder.com/data/icons/home-and-garden/64/waste-recycle-rubbish-dumpster-trash-garbage-1024.png" alt="" />
                </div>
            )
        })}
    </div></div>
       
};

export default TestApi;