import MyPosts from "./MyPosts/MyPosts";
import NewPostContainer from "./NewPost/NewPostContainer"
import s from './Posts.module.css'

const Posts = (props) => {

    let state = props.store.getState()

    let PostElement =
        state.ProfilePage.PostsData.map(el => (<MyPosts text={el.text} id={el.id} likes={el.likes} />))

    return (
        <div>
            <NewPostContainer store={props.store} NewPostText={props.NewPostText} dispatch={props.dispatch} addPost={props.addPost} postAreaChanged={props.postAreaChanged}/>
            <div className={s.NewPost}>
                {PostElement}
            </div>
            
        </div>

    )
}


export default Posts;