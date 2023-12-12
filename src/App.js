import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LogeIn from './Components/Register/LogeIn';
import Navbar from './Navbar/Navbar';
import Home from './Home/Home'
import Team from './Team/Team';
import About from './About/About';
import Sign from './Components/Register/Sign';
import { Courses } from './Courses/Courses';
import MoreInfo from './Components/MoreInfo/MoreInfo';
import FormRegister from './FormRegister/FormRegister';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route key={1} path="/" element={<Home />} />
          <Route key={2} path="/Logein" element={<LogeIn />} />
          <Route key={3} path="/Sign" element={<Sign />} />
          <Route key={4} path="/Team" element={<Team />} />
          <Route key={5} path="/About" element={<About/>} />
          <Route key={6} path="/Courses" element={<Courses />} />
          <Route key={7} path="/MoreInfo" element={<MoreInfo />} />
          <Route key={8} path="/FormRegister" element={<FormRegister />} />
        </Routes>
      </BrowserRouter>
    </>


  )
}

export default App;
