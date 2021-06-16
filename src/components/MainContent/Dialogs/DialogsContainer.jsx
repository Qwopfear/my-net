import React from 'react'
import Dialogs from './Dialogs'
import { sendMessageCreator, onMessageChangeCreator } from '../../../Redux/dialogs-reducer.js'




const DialogsContainer = (props) => {
    
    let state = props.store.getState()

    let sendMessage = () => {
        props.store.dispatch(sendMessageCreator())

    }
    let onMessageChange = (text) => {
        props.store.dispatch(onMessageChangeCreator(text))
    }


    return (
        <Dialogs sendMessage={sendMessage} onMessageChange={onMessageChange} state={state} />
    )
}


export default DialogsContainer;