import React from 'react';
import profilePic from '../../assets/profile.jpg'
function About() {
    return (
        <div className="about-me">
            <div className="side-bar1">
                <h2>About Me</h2>
            </div>
            <article className="text"> Hi, my name is Jeremiah McKinney, and I'm a web developer in training.
                                    I grew up in North Carolina, but in the last ten years have moved my family
                                    and myself to the great state of Wisconsin.  
                                    My wife and I have five children, four boys and one girl.  Our two dogs, Bruce and Maebel,
                                    are both lab/golden retriever mix, and they are the sweetest. 
                                    Currently I am a home theater installer, but I look forward to moving into this
                                    new career.  
            </article>
            <div className="hero">
                <img className="profile-img" src={ profilePic } alt="Jeremiah McKinney smiling"/>
            </div>
        </div>
    )
}

export default About;
