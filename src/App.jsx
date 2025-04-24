
import { Routes, Route} from 'react-router-dom';
import './css/App.css'
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import NavBar from './components/NavBar';
import { useState } from 'react';
import { MovieProvider } from './context/MovieContext';


function App() {
    

  
  return (
    <MovieProvider>
      <NavBar/>
    <main className='main-content'>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/favorites" element={<Favorites />}/>
      </Routes>
    </main>
    </MovieProvider>

    
  );
}


export default App
