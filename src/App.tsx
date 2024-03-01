import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './NavBar';
import Home from './Pages/Home';

function App() {


  return (
    <BrowserRouter basename='/blog_website'>
      <>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/services' element={<div>Services</div>} />
          <Route path='/about' element={<div>About</div>} />
          <Route path='/contact' element={<div>Contact</div>} />
          <Route path='*' element={<div>Not Found</div>} />
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;
