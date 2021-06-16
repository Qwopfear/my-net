import dialogsReducer from "./dialogs-reducer"
import navReducer from "./nav-reducer";
import newsReducer from "./news-reducer";
import profileReducer from "./profile-reducer"
import settingsReducer from "./set-reducer";



let store = {
    _state: {
        NavPage: {
            BestFriends: [
                { id: 1, name: 'Shakal' },
                { id: 2, name: 'Pes' },
                {
                    id: 3,
                    name: 'Wolk'
                },
                {
                    id: 4,
                    name: 'Lisa'
                }

            ]
        },
        ProfilePage: {
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
             
        },
        DialogsPage: {
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
            
            
        },
        NewsPage: {
            HotNews: [
                {
                    headingText: 'Bitcoin: 33k',
                    mainText: 'Bitochek to upal, a ya goworil, a mne ne verili',
                    id: 1
                },
                {
                    headingText: 'Good morning pusies and pidors',
                    mainText: 'I`m Pasha Technicue',
                    id: 2
                },
            ],
            FrendsNews:
            {
                headingText: 'Olds shit, news stupid',
                mainText: 'Anyway,  Is only u problem',
                id: 1
            },
            PublisNews:
            {
                headingText: 'Healing staff',
                mainText: 'Becouse time never hieled me',
                id: 1
            },
            SportNews: {
                headingText: 'NBA',
                mainText: 'Clippers SUCK, nothing new',
                id: 1
            },
            PoliticsNews:
            {
                headingText: 'Don`t do something',
                mainText: 'It`s off light in room while someone fuck u in ass',
                id: 1
            }

        },
        SettingsPage: {
            SettingsContent: [
                {
                    Heading: 'Main',
                    Content: '',
                    Changes: ''
                },
                {
                    Heading: ' Profile theme',
                    Content: '',
                    Changes: ''
                },
                {
                    Heading: 'Privacy',
                    Content: '',
                    Changes: ''
                },
                {
                    Heading: 'Content settings',
                    Content: '',
                    Changes: ''
                },
                {
                    Heading: 'Password',
                    Content: '',
                    Changes: ''
                },
                {
                    Heading: 'Mail',
                    Content: '',
                    Changes: ''
                },
                {
                    Heading: 'Phone number',
                    Content: '',
                    Changes: ''
                },
                {
                    Heading: 'Verification',
                    Content: '',
                    Changes: ''
                },
                {
                    Heading: 'Language',
                    Content: '',
                    Changes: ''
                },

            ]
        }
    },
    _callSubscriber() {
        console.log('state changed')
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) { 
        this._state.NavPage = navReducer(this._state.NavPage, action)
        this._state.ProfilePage = profileReducer(this._state.ProfilePage, action)
        this._state.DialogsPage = dialogsReducer(this._state.DialogsPage, action)
        this._state.NewsPage = newsReducer (this._state.NewsPage, action)
        this._state.SettingsPage =settingsReducer(this._state.SettingsPage, action)
        this._callSubscriber(this._state)
    }
}

window.state = store

export default store;