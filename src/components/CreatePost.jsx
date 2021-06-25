import React from 'react';

// Style
import './createPost.style.css';

// Images and icons
import { AiFillCamera } from 'react-icons/ai';

const CreatePost = () => {
    return (
        <div className="create__post__container">
            <h2>Create a post</h2>
            <input type="text" placeholder="What is in your mind?" />
            <div className="bottom">
                <button className="camera"><AiFillCamera /></button>
                <button className="create__post">Create</button>
            </div>
        </div>
    )
}

export default CreatePost
