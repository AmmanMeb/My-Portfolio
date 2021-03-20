import React, { Component } from 'react';
import './languages.css';
import html from '../../img/240px-HTML5_logo_and_wordmark.svg.png'
import css from '../../img/CSS3_logo_and_wordmark.svg.png'
import js from '../../img/240px-Unofficial_JavaScript_logo_2.svg.png'
import react from '../../img/React_Native.png'
import node from '../../img/320px-Node.js_logo.svg.png'
import java from '../../img/131px-Java_programming_language_logo.svg.png';
import cplus from '../../img/213px-ISO_C++_Logo.svg.png'
import mysql from '../../img/MySQL_Logo.png'


class Languages extends Component {     
 render() {
    return (
      <section className = "index-banner-3">
        <div className = "header-3">LANGUAGES</div>
        <div className = "img-1">
            <img src = {html} alt = "HTML" width="100" height="100"></img>
        </div>
        <div className = "img-2">
            <img src = {css} alt = "CSS" width="70" height="100"></img>
        </div>
        <div className = "img-3">
            <img src = {js} alt = "JavaScript" width="90" height="90"></img>
        </div>
        <div className = "img-4">
            <img src = {react} alt = "ReactJs" width="200" height="140"></img>
        </div>
        <div className = "img-5">
            <img src = {node} alt = "NodeJs" width="160" height="100"></img>
        </div>
        <div className = "img-6">
            <img src = {java} alt = "Java" width="100" height="200"></img>
        </div>
        <div className = "img-7">
            <img src = {cplus} alt = "C++" width="100" height="110"></img>
        </div>
        <div className = "header-4">DATABASES</div>
        <div className = "img-8">
            <img src = {mysql} alt = "MYSql" width="150" height="100"></img>
        </div>
        
      </section>
    )
  }
}

export default Languages;