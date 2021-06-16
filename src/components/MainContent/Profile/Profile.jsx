import s from './Profile.module.css'
import Posts from './ProfileInfo/Posts/Posts'
import ProfileInfo from './ProfileInfo/ProfileInfo'



const Profile = (props) => {
    
    let state = props.store.getState()

    let currentUserName = 
        state.ProfilePage.UserNames.map(el => (<ProfileInfo name={el.name} id={el.id} />))
    return (
        <div className={s.info}>
            {currentUserName}
            <Posts store={props.store} PostsData={props.PostsData} dispatch={props.dispatch}  NewPostText={props.NewPostText} addPost={props.addPost} postAreaChanged={props.postAreaChanged}/>
        </div>
    )
}

export default Profile;
