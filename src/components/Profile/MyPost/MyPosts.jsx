import React from 'react';
import classes from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = (props) => {
    let keyPosts = 0;

    let postsElements =
        props.posts.map(post =>
            <Post
                message={post.message}
                likesCount={post.likesCount}
                key={keyPosts++}
            />);

    let newPostElement = React.createRef();


    let addPosts = () => {
        props.dispatch( {type: 'ADD-POST'} );
        props.dispatch( {type: 'UPDATE-NEW-POST-TEXT', newText: ''} );
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        let action = {
            type: 'UPDATE-NEW-POST-TEXT', 
            newText: text,
        }
        props.dispatch(action);
    }

    return (
        <div className={classes.myPost}>
            <h3 className={classes.myPost__h3}>My posts</h3>
            <div className={classes.textarea}>
                <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} ></textarea>
                <button onClick={addPosts}>Add post</button>
                <button>Remove</button>
            </div>
            <div className={classes.post}>
                {postsElements}
            </div>
        </div>
    )
}
export default MyPosts;

