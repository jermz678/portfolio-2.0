import React from 'react';




function Project( props ) {
    return (
        <div className="projectDiv">
            <h3 className="deployed"> { props.title }</h3>
             <img className="projectImages" src={ props.image } alt={ props.alt }/>
             <a href={ props.appLink }>
                 <h3 className="deployed">Deployed App</h3>
             </a>
             <a href={ props.githubLink }>
                 <h3 className="deployed">Github</h3>
             </a>
        </div>
    )
}

export default Project;