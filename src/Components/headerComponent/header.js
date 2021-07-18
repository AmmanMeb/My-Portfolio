import React, { Component } from 'react';
import './header.css'


class Header extends Component {     
 render() {
    return (
      <header>                   
             <ul class="title">
                 <li><a href="#">ABOUT ME</a></li>
                 <li><a href="#">SKILLS</a></li>
                 <li><a href="#">PROJECTS</a></li>
                 <li><a href="#">CONTACTS</a></li>
              </ul>         
     </header>
    )
  }
}

export default Header;
