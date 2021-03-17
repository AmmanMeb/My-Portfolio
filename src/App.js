import Header from './Components/headerComponent/header';
import About from './Components/aboutMeComponent/aboutMe';
import Details from './Components/detailsComponent/details';
import Languages from './Components/languagesComponent/languages'
import './App.css';


function App() {
  return (
    <div className="App">
          
      <div className="App">
        <Header /> 
        <About />       
        <Details /> 
        <Languages />      
      </div>
   
    </div>
  );
}

export default App;
