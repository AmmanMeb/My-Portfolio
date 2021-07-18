import React, { Component } from 'react';
import './header.css'


class Header extends Component {     
 render() {
    return (
      <header>                   
             <ul class="title">
                 <li><a href="#aboutme">ABOUT ME</a></li>
                 <li><a href="#skills">SKILLS</a></li>
                 <li><a href="#projects">PROJECTS</a></li>
                 <li><a href="#contacts">CONTACTS</a></li>
              </ul>         
     </header>
    )
  }
}

export default Header;
