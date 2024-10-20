import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import Landing_Page from './Components/Landing_Page/LandingPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          
          <Navbar/>
         
          <Routes>
            <Route path='/' element={<Landing_Page/>}></Route>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
