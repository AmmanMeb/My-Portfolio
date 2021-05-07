import React, { Component } from 'react';
import './projects.css'
import dessa from '../../img/Dessa.png';
import signin from '../../img/SignIn.png';
import github2 from '../../img/github-2.png';
import redirect from '../../img/redirect.png';

class Projects extends Component {     
 render() {
    return (
        <section className = "index-banner-4" id = "projects">
            <div className="header-5" >MY PROJECTS</div> 
            <div className="projects">  
                <a className="example">
                <div className ="title-4">Coming Soon Page</div>
                  <img className="pics" src = {dessa} alt = "Dessa" width="319" height="319" />
                     <div className="content">
                        <div className="title-5">
                           Coming Soon Page   
                        </div>
                        <div className="p">Built using <strong>HTML</strong>, <strong>CSS</strong> and <strong>Javascript</strong></div>
                        <div className="links">
                           <a href="https://github.com/AmmanMeb/Dessa">
                              <img className="github-2" src = {github2} alt = "Github" width="81" height="81"></img>
                           </a>
                           <a href="https://tender-swirles-617c6a.netlify.app/">
                              <img className="redirect" src = {redirect} alt = "Redirect" width="81" height="81"></img>
                           </a>
                        </div>
                     </div>
                                    
                </a> 
                <a className="example">
                   <div className ="title-4">Sign In Page</div>
                  <img className="pics" src = {signin} alt = "SignIn" width="319" height="319" />
                  <div className="content">
                        <div className="title-5">
                           Sign In Page   
                        </div>
                        <div className="p">Built using <strong>HTML</strong>, <strong>CSS</strong> and <strong>Javascript</strong> for the Front End. <strong>Node</strong>, <strong>Express</strong> and<strong> MySql </strong>for the Back End</div>
                        <div className="links">
                           <a href="https://github.com/AmmanMeb/SignIn">
                              <img className="github-2" src = {github2} alt = "Github" width="81" height="81"></img>
                           </a>
                           <a href="https://lucid-poincare-171fdd.netlify.app/">
                              <img className="redirect" src = {redirect} alt = "Redirect" width="81" height="81"></img>
                           </a>
                        </div>
                     </div>                   
                </a>   
            </div>    
        </section>
    )
 }
}
   
export default Projects;