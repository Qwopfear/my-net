import s from './Messages.module.css'

const Messages = (props) => {
    return (
        <div>
            <div className={s.Messages}>
                <span>{props.text}</span>
            </div>

            
                
           
        </div>
    )
}


export default Messages;