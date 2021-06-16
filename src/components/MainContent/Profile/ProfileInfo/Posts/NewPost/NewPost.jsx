import s from './NewPost.module.css'



const NewPost = (props) => {
  
    

    let addPost = () => {
        props.addPost()
    }

    let onPostChange = (e) => {
        let text = e.target.value
        props.onPostChange(text)
    }


    return (
        <div className={s.NewPost}>
            <textarea onChange={onPostChange}  value={props.state.ProfilePage.NewPostText}/>
            <button onClick={addPost}> Add post</button>
        </div>
    )
}

export default NewPost;