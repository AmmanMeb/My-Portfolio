import Header from './Components/headerComponent/header';
import About from './Components/aboutMeComponent/aboutMe';
import Details from './Components/detailsComponent/details';
import Languages from './Components/languagesComponent/languages';
import Projects from './Components/projectsComponent/projects'
import Contacts from './Components/contactsComponent/contacts';
import './App.css';

function App() {
  document.addEventListener('DOMContentLoaded', function() {
   
    window.addEventListener('scroll', myFunctionForSticky);
  
    var navbar = document.getElementById("myTopnav");
  
    var sticky = navbar.offsetTop;
  
  
    function myFunctionForSticky() {
      if (window.pageYOffset >= sticky) {
        console.log("window.pageYOffset >= sticky");
      } else {
        console.log("Not window.pageYOffset >= sticky");
      }
      if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky");
      } else {
        navbar.classList.remove("sticky");
      }
    }
  
   
    function myFunctionForResponsive() {
      navbar.classList.toggle('responsive');
    }
  })
  return (
    <div className="App">
          
      <div className="App">
        <div class="topnav" id="myTopnav">
         <Header /> 
        </div>
        <div className="content">
         <About />       
         <Details /> 
         <Languages /> 
         <Projects />  
         <Contacts />
        </div>   
      </div>
   
    </div>
  );
}

export default App;
