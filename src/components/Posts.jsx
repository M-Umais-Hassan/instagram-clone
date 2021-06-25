import React from 'react';

// style
import './posts.style.css'

// Images and icons
import Img1 from '../assets/stories/user.jpg';

const Posts = () => {
    return (
        <>
            <div className="post__container">
                <div className="header">
                    <img src={Img1} alt="profile" />
                    <h2>Umais Hassan</h2>
                </div>
                <img src={Img1} alt="post" />
                <div className="bottom">
                    <div className="icons">
                        <li>H</li>
                        <li>H</li>
                    </div>
                    <p>This is post content</p>
                </div>
                <hr />
                <div className="all__comments">

                </div>
                <input type="text" className="comment" placeholder="Add a comment" />
            </div>
        </>
    )
}

export default Posts
