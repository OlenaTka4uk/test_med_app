import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import Landing_Page from './Components/Landing_Page/LandingPage';
import InstantConsultation from './Components/InstantConsultationBooking/InstantConsultation';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          
          <Navbar/>
         <InstantConsultation/>
          <Routes>
            <Route path='/' element={<Landing_Page/>}></Route>
            <Route path="/instant-consultation" element={<InstantConsultation />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
