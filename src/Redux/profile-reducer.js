const ADD_POST = 'ADD-POST'
const POST_AREA_CHANGED = 'POST-AREA-CHANGED'


let initialState = {
    UserNames: [
        {
            name: 'Obito',
            id: 1
        }

    ],
    PostsData: [
        {
            text: 'Do it by myself',
            id: 1,
            likes: '10'
        },
        {
            text: 'I hope it`s will work',
            id: 2,
            likes: '15'
        }, {
            text: 'Yes it`s work',
            id: 3,
            likes: '20'
        }
    ],
    NewPostText: 'I`m changing post only after BLL '
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: state.PostsData.length + 1,
                text: state.NewPostText,
                likes: '110'
            }
            state.PostsData.push(newPost)
            state.NewPostText = ''
            return state
        case POST_AREA_CHANGED:
            state.NewPostText = action.text
            return state
        default:
            return state
    }
}

export const addPostCreator = () => ({ type: ADD_POST })
export const onPostChangeCreator = (text) => ({ type: POST_AREA_CHANGED, text: text })

export default profileReducer;