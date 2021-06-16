import React from "react";
import NewPost from "./NewPost"
import {addPostCreator, onPostChangeCreator} from '../../../../../../Redux/profile-reducer.js'



const NewPostContainer = (props) => {
  
    let state = props.store.getState()

    let addPost = () => {
        props.store.dispatch(addPostCreator())
    }

    let onPostChange = (text) => {
        props.store.dispatch(onPostChangeCreator(text))
    }


    return (
        <NewPost addPost={addPost} onPostChange={onPostChange} state={state}/>
    )
}

export default NewPostContainer;