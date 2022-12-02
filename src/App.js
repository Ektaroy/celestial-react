import {BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import './App.css';
import Doubt from './components/Doubt';
import Home from '.components/Home';


function App() {
  return <Router>
   <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/Doubt" element={<Doubt />} />

   </Routes>
  </Router>;

   
  
 
  
    
  
}

export default App;


