import Navbar from "./components/Navbar";
import { Route, Routes, useNavigate } from 'react-router-dom'
import Hero from "./components/Hero";
import Home from "./pages/Home";
import Calculator from "./components/Calculator"
import MaterialTable from "./components/MaterialTable";
import Footer from "./components/Footer";
import ResultCard from "./components/ResultCard";
import Contact from "./pages/Contact";
import "./App.css";

function App() {
  return (
    <div className='w-screen min-h-screen bg-richblack-900 flex flex-col font-inter'>
      <Navbar />
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path="/calculator" element={ <Calculator/> } />
        <Route path="/materials" element={ <MaterialTable/> } />
        <Route path="/contact" element={ <Contact/> } />
      </Routes>
    </div>
  );
}

export default App;