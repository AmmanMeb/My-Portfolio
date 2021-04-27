import React, { Component } from 'react';
import './header.css'


class Header extends Component {     
 render() {
    return (
      <header>        
         
        <a className="title">
             <li className="about"><a href="#">ABOUT ME</a></li>
             <li className="skills"><a href="#">SKILLS</a></li>
             <li className="projects"><a href="#">PROJECTS</a></li>
             <li className="contacts"><a href="#">CONTACTS</a></li>
        </a>
            
       
    </header>
    )
  }
}

export default Header;
