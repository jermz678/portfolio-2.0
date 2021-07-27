import React from 'react';
import Project from '../Project';
import CageProject from '../../../src/assets/wine-cagepic.png';
import horesionProject from '../../../src/assets/horesionpic.png';
import shotMapProject from '../../../src/assets/shotMap.png';
import weatherAppProject from '../../../src/assets/weather-app.png';
import passwordGenerator from '../../../src/assets/password.png';
import javascriptQuiz from '../../../src/assets/javascript-quiz.png';

function MyWork(){
    return (
        <div>
            <Project 
                title="The Cage Project" 
                image={ CageProject } 
                alt="Cage Project Image"
                appLink="https://bootcamp-project1.github.io/The-wine-cage/"
                githubLink="https://github.com/bootcamp-project1/The-wine-cage">
            </Project>
            <Project 
                title="The Horesion Project" 
                image={ horesionProject } 
                alt="Horesion Project Image"
                appLink="https://jermz678.github.io/first-challenge/"
                githubLink="https://github.com/jermz678/Horesion">
            </Project>
            <Project 
                title="The Shot-Map Project" 
                image={ shotMapProject }
                alt="The Shot-Map Project Image" 
                appLink="http://shot-map.herokuapp.com/"
                githubLink="https://github.com/JayARTman/Shot-map">
            </Project>
            <Project 
                title="The Weather-App Project" 
                image={ weatherAppProject }
                alt=" The Weather-App Project Image" 
                appLink="https://jermz678.github.io/weather-app/"
                githubLink="https://github.com/jermz678/weather-app">
            </Project>
            <Project 
                title=" The Password Generator Project" 
                image={ passwordGenerator }
                alt=" The Password Generator Image" 
                appLink="https://jermz678.github.io/password-generator/."
                githubLink="https://github.com/jermz678/password-generator">
            </Project>
            <Project 
                title="The JavaScript Quiz Project" 
                image={ javascriptQuiz }
                alt=" JavaScript Quiz Image" 
                appLink="https://jermz678.github.io/javascript-quiz/."
                githubLink="https://github.com/jermz678/javascript-quiz">
            </Project>
        </div>
    )
}

export default MyWork;