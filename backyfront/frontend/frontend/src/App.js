
import './App.css';

import {BrowserRouter, Routes, Route } from "react-router-dom";

import Header from './components/layout/Header';
import Nav from './components/layout/Nav';
import Footer from './components/layout/Footer';

import Index from './pages/Index';
import Nuestrosprogramas from './pages/Nuestrosprogramas';



function App() {
  return (
    <div className="App">
      <Header/>
        <BrowserRouter>
          <Nav/>
            <Routes>
                <Route path='/' element= {<Index />} />
                <Route path='Nuestrosprogramas' element= {<Nuestrosprogramas />} />
            </Routes>
        </BrowserRouter>

     
      <Footer/>
 
    </div>
  );
}

export default App;
