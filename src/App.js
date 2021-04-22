import Header from './Components/headerComponent/header';
import About from './Components/aboutMeComponent/aboutMe';
import Details from './Components/detailsComponent/details';
import Languages from './Components/languagesComponent/languages';
import Projects from './Components/projectsComponent/projects'
import './App.css';


function App() {
  return (
    <div className="App">
          
      <div className="App">
        <Header /> 
        <About />       
        <Details /> 
        <Languages /> 
        <Projects />     
      </div>
   
    </div>
  );
}

export default App;
