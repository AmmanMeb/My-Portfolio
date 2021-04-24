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
                <button className="html">HTML</button>
                <button className="css">CSS</button>
                <button className="js">JAVASCRIPT</button>                
                <button className="github"><a href="https://github.com/AmmanMeb/Dessa">GITHUB</a></button>
                
              </div>  

               <div className= "box"> 
                <h3 className="title-4">SIGN IN PAGE</h3>      
                <a href="https://lucid-poincare-171fdd.netlify.app/">
                   <div  class="index-boxlink-square-2"> </div>                    
                </a>                
                <button className="html">HTML</button>
                <button className="css">CSS</button>
                <button className="js">JAVASCRIPT</button>
                <button className="node">NODE</button>
                <button className="mysql">MYSQL</button>
                
                <button  className="github-2"><a href="https://github.com/AmmanMeb/SignIn">GITHUB</a></button>
               
              </div>  
                
        </section>
    )
 }
}
   
export default Projects;