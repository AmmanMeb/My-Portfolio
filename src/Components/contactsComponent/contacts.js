import React, { Component } from 'react';
import './contacts.css'
import linkedin from '../../img/linkedin.png'

class Contacts extends Component {     
 render() {
    return (
        <section>
          <div className = "header-3">CONTACTS</div>
          <div className = "img-9">
            <img src = {linkedin} alt = "Linkedin" width="100" height="100"></img>
          </div>
        </section>
    )
 }
}
   
export default Contacts;