import { Route } from 'react-router-dom'
import DialogsContainer from './Dialogs/DialogsContainer'
import s from './MainContent.module.css'
import News from './News /Nesw'
import Profile from './Profile/Profile'
import Settings from './Settings/Settings'

const MainContent = (props) => {

    return (
        <div className={s.content}>

            <Route path='/profile' render={() =>
                <Profile store={props.store}
                    UserNames={props.state.ProfilePage.UserNames}
                    PostsData={props.state.ProfilePage.PostsData}
                    dispatch={props.dispatch}
                    NewPostText={props.state.ProfilePage.NewPostText}
                />} />

            <Route path='/dialogs' render={() =>
                <DialogsContainer  store={props.store}
                   />} />

            <Route path='/News' render={() =>
                <News NewsData={props.state.NewsPage} />

            } />

            <Route path='/settings' render={() =>
                <Settings SettingsData={props.state.SettingsPage} />} />

        </div>
    )
}

export default MainContent;