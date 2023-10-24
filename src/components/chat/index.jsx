import { useState } from 'react';
import ChatBlock from './chat-block';
import Comment from './comment';
import styles from './style.module.css'
import { useLocalStorage } from '../../hook/useLocalStorage';

const Chat = () => {
    const [chatData, setChatData] = useLocalStorage('CHAT', []);
    const [inputValue, setInputValue] = useState('')
   const [showDialogReg, setshowDialogReg] = useState(false);
    const [user] = useLocalStorage('USER')

    const sendChat = () => {
        if(user) {
           setChatData([...chatData, `${user}: ${inputValue}`])
        setInputValue("")  
        } else {
           setshowDialogReg(true) 
           setInputValue("")  
        }
       
    }
    return <div >
        <ChatBlock 
        chatData={chatData} 
        />
        <Comment
        inputValue={inputValue}
        setInputValue={setInputValue}
        sendChat={sendChat}
        setChatData={setChatData}
        showDialogReg={showDialogReg}
        />
    </div>
};

export default Chat;