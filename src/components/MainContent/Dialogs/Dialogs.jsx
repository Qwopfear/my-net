import React from 'react'
import s from './Dialogs.module.css'
import Includutiors from './Includutiors/Includutiots'
import Messages from './Messages/Messages'





const Dialogs = (props) => {
    let currentDialog =
        props.state.DialogsPage.Messages.map(el => (<Messages text={el.text} id={el.id} />))

    let currentIncludutiots =
        props.state.DialogsPage.Includutiors.map(el => (<Includutiors name={el.name} id={el.id} />))

    let sendMessage = () => {
        props.sendMessage()
    }
    let onMessageChange = (e) => {
        let text = e.target.value
        props.onMessageChange(text)
    }


    return (
        <div className={s.Dialogs}>
            <div className={s.Includutiors}>
                {currentIncludutiots}
            </div>
            <div className={s.Messages}>
                {currentDialog}
                <div className={s.TextArea}>
                    <textarea onChange={onMessageChange}  value={props.state.DialogsPage.NewMessageText} />
                    <button onClick={sendMessage}> send Message</button>
                </div>

            </div>
        </div>
    )
}


export default Dialogs;