
import './App.css';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Loginpage from './components/loginpage';
import HomePage from './components/homePage';

function App() {
  return (
    
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/login' element={<Loginpage/>}/>
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;
