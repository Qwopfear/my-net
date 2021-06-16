import { combineReducers, createStore } from "redux";
import dialogsReducer from "./dialogs-reducer";
import navReducer from "./nav-reducer";
import newsReducer from "./news-reducer";
import profileReducer from "./profile-reducer";
import settingsReducer from "./set-reducer";

let reducers = combineReducers({
    NavPage: navReducer,
    ProfilePage: profileReducer,
    DialogsPage: dialogsReducer,
    NewsPage: newsReducer,
    SettingsPage: settingsReducer,

})


let store = createStore(reducers)


export default store