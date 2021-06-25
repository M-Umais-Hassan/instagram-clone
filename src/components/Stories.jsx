import React from 'react';

// Style
import './stories.style.css';

// Images and icons
import Img1 from '../assets/stories/user.jpg';
import Img2 from '../assets/stories/ali.jpg';
import Img3 from '../assets/stories/anonymous.jpg';
import Img4 from '../assets/stories/bhatti.jpg';
import Img5 from '../assets/stories/harry.jpg';
import Img6 from '../assets/stories/malik.jpg';
import Img7 from '../assets/stories/usman.jpg';
import Img8 from '../assets/stories/ali.jpg';

const stories = [
    {id: 1, image: Img1},
    {id: 2, image: Img2},
    {id: 3, image: Img3},
    {id: 4, image: Img4},
    {id: 5, image: Img5},
    {id: 6, image: Img6},
    {id: 7, image: Img7},
    {id: 8, image: Img8},
    {id: 1, image: Img1},
    {id: 2, image: Img2},
    {id: 3, image: Img3},
    {id: 4, image: Img4},
    {id: 5, image: Img5},
    {id: 6, image: Img6},
    {id: 7, image: Img7},
    {id: 8, image: Img8},
]

const Stories = () => {
    return (
        <div className="stories__container">
            {stories.map(({id, image}) => {
                return (
                    <div className="slider__img" key={id}>
                        <img src={image} alt="Story profile" />
                    </div>
                );
            })
            }
        </div>
    )
}

export default Stories
