import React, { Component } from 'react';
import './languages.css';
import html from '../../img/240px-HTML5_logo_and_wordmark.svg.png'
import css from '../../img/CSS3_logo_and_wordmark.svg.png'
import js from '../../img/240px-Unofficial_JavaScript_logo_2.svg.png'
import node from '../../img/320px-Node.js_logo.svg.png'
import express from '../../img/ExpressJS.png';
import mysql from '../../img/MySQL_Logo.png'


class Languages extends Component {     
 render() {
    return (
      <section className = "index-banner-3" id = "skills">
        <div className = "header-3">SKILLS</div>
        <div className = "languages">
            <div>
                <img className = "img-1" src = {html} alt = "HTML" width="173" height="181"></img>
            </div>
            <div>
                <img className = "img-2" src = {css} alt = "CSS" width="126" height="177"></img>
            </div>
            <div>
                <img className = "img-3" src = {js} alt = "JavaScript" width="144" height="152"></img>
            </div>
        </div>
        <div className = "languages-2">    
            <div>
                <img className = "img-4" src = {node} alt = "NodeJs" width="283" height="175"></img>
            </div>
            <div>
                <img className = "img-5" src = {express} alt = "Express" width="402" height="114"></img>
            </div>
        
            <div>
                <img className = "img-6" src = {mysql} alt = "MYSql" width="246" height="172"></img>
            </div>
        </div>
      </section>
    )
  }
}

export default Languages;