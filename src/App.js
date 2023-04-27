import './App.css';
import NameList from './components/pages/NameList/NameList';
import NavBar from './components/NavBar/NavBar';
import Home from './components/pages/Home/Home';
import About from './components/pages/About/About';

import {  BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/about' element={<About/>}/>
          <Route path='/namelist' element={<NameList/>}/>
          <Route path='/' element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
