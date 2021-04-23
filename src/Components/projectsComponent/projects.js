import React, { Component } from 'react';
import './projects.css'

class Projects extends Component {     
 render() {
    return (
        <section className = "index-banner-4">
            <div className="header-5" >MY PROJECTS</div>   
              <div className= "box"> 
                <h3>COMING SOON PAGE</h3>      
                <a href="https://tender-swirles-617c6a.netlify.app/">
                   <div  class="index-boxlink-square-1"> </div>                    
                </a>                
                <div className="html">HTML</div>
                <div className="css">CSS</div>
                <div className="js">JAVASCRIPT</div>                
                <div  className="github"><a href="https://github.com/AmmanMeb/Dessa">GITHUB</a></div>
                
              </div>  

               <div className= "box"> 
                <h3 className="title-4">SIGN IN PAGE</h3>      
                <a href="https://lucid-poincare-171fdd.netlify.app/">
                   <div  class="index-boxlink-square-2"> </div>                    
                </a>                
                <div className="html">HTML</div>
                <div className="css">CSS</div>
                <div className="js">JAVASCRIPT</div>
                <div className="node">NODE</div>
                <div className="mysql">MYSQL</div>
                
                <div  className="github-2"><a href="https://github.com/AmmanMeb/SignIn">GITHUB</a></div>
               
              </div>  
                
        </section>
    )
 }
}
   
export default Projects;