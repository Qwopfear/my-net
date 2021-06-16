const SEND_MESSAGE = 'SEND-MESSAGE'
const MESSAGE_AREA_CHANGED = 'MESSAGE-AREA-CHANGED'

let initialState = {
    Includutiors: [
        {
            name: 'Diana',
            id: 1
        },
        {
            name: 'Sam',
            id: 2
        },
        {
            name: 'Amelia',
            id: 3
        },
        {
            name: 'Briget',
            id: 4
        },
        {
            name: 'Hamas',
            id: 5
        },
        {
            name: 'Lou',
            id: 6
        },
        {
            name: 'Rick',
            id: 7
        }
    ],
    Messages: [
        {
            text: 'My life is work',
            id: 1
        },
        {
            text: 'Is very bad,  but u haven`t choise',
            id: 2
        }
    ],
    NewMessageText: 'I`m changing message only after BLL '
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let newMessage = {
                id: state.Messages.length + 1,
                text: state.NewMessageText
            }
            state.Messages.push(newMessage)
            state.NewMessageText = ''
            return state
        case MESSAGE_AREA_CHANGED:
            state.NewMessageText = action.text
            return state
        default:
            return state
    }
}

export const sendMessageCreator = () => ({ type: SEND_MESSAGE })
export const onMessageChangeCreator = (text) => ({ type: MESSAGE_AREA_CHANGED, text: text })


export default dialogsReducer;