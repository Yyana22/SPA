import React from 'react';
import { addPostActionCreator, updateNewPostTextActoinCreator } from '../../../redux/profileReducer';
import MyPosts from './MyPosts';

const MyPostsContainer = (props) => {
    let state = props.store.getState();
    let addPosts = () => {
        // props.addPost();
        props.store.dispatch( addPostActionCreator() );
    }

    let onPostChange = (text) => {
        // props.updateNewPostText(text);
        // let action = { type: 'UPDATE-NEW-POST-TEXT', newText: text};
        let action = updateNewPostTextActoinCreator(text);
        props.store.dispatch(action); 
    }

    return (
        <MyPosts 
        updateNewPostText={onPostChange} 
        addPost={addPosts} 
        posts={state.profilePage.posts}
        newPostText={state.profilePage.newPostText}
        />
    )
}
export default MyPostsContainer;

