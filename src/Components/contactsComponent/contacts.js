import React, { Component } from 'react';
import './contacts.css'
import linkedin from '../../img/linkedin.png'
import github from '../../img/github.png'
import yahoo from '../../img/Yahoo.png'

class Contacts extends Component {     
 render() {
    return (
        <section id = "contacts">
          <div className = "header-3">CONTACTS</div>
          <div className = "division">
            <a href="https://www.linkedin.com/in/amman-mebrahtu-9863a6159/" className = "img-9">
              <img className = "img-7" src = {github} alt = "Github" width="100" height="100"></img>
            </a>
           <a href="https://www.linkedin.com/in/amman-mebrahtu-9863a6159/" className = "img-9">
             <img className = "img-8" src = {linkedin} alt = "Linkedin" width="100" height="100"></img>
           </a>
           <a href="https://www.linkedin.com/in/amman-mebrahtu-9863a6159/" className = "img-9">
              <img className = "img-9" src = {yahoo} alt = "Yahoo" width="100" height="100"></img>
            </a>
          </div>
          <div className = "division">
            <a href="#aboutme">
              <div className = "text">ABOUT ME</div>
            </a>
            <a href="#skills">
              <div className = "text">SKILLS</div>
            </a>
            <a href="#projects">
              <div className = "text">PROJECTS</div>
            </a>
            <a href="#contacts">
              <div className = "text">CONTACTS</div>
            </a>
          </div>
          <div className = "text-2">COPYRIGHT AMMAN ©  2021</div>
        </section>
    )
 }
}
   
export default Contacts;