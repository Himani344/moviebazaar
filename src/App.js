
import './App.css';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import HomePage from './components/homePage';
import LoginPage from './components/loginPage';


function App() {
  return (
    
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
    <Route path='/login' element={<LoginPage/>}/>
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;
