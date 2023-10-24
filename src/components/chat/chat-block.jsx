import styles from './style.module.css'
const ChatBlock = (props) => {
return (
    <div className={styles.mainDiv}>
        <h2 style={{marginLeft: "200px"}}>The Chat</h2>
        <div className={styles.chat}>
        
        {props.chatData.map((el,i )=> {
            return (
                <div key={i}>
                    {i + 1}.{el}
                  
                </div>
            )
        })}
    </div></div>
    
);


};
export default ChatBlock;