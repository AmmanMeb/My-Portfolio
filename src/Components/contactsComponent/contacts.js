import React, { Component } from 'react';
import './contacts.css'
import linkedin from '../../img/linkedin.png'

class Contacts extends Component {     
 render() {
    return (
        <section>
          <div className = "header-3">CONTACTS</div>
          <a href="https://www.linkedin.com/in/amman-mebrahtu-9863a6159/" className = "img-9">
            <img src = {linkedin} alt = "Linkedin" width="100" height="100"></img>
          </a>
        </section>
    )
 }
}
   
export default Contacts;