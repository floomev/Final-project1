import {Link} from 'react-router-dom'



const Comment = (props) => {
    return (
    <div>
        <label >Write a comment</label>
        <input type="text" value={props.inputValue} onChange={(e) => {
            props.setInputValue(e.target.value)
        }}/>
        <button onClick={props.sendChat}>Send</button>
        <button onClick={()=> props.setChatData([])}>Delete</button>
        {props.showDialogReg && (
            <div>
                You are not authorized, follow the <Link to='/'>link</Link>
            </div>
        )}
    </div>
    );
    
    };
    
    export default Comment;