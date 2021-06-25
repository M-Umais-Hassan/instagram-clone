import React from 'react';

// Components
import Navbar from './Navbar';
import Stories from './Stories';
import CreatePost from './CreatePost';
import Posts from './Posts';
import SideBar from './SideBar';

// style 
import './home.style.css'

const Home = () => {
    return (
        <>
            <Navbar />
            <div className="container">
                <div className="home__container">
                    <div className="left__side">
                        <Stories />
                        <CreatePost />
                        <Posts />
                    </div>
                    <div className="right__side">
                        <SideBar />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
