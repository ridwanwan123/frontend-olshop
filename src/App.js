import './App.css';
import "react-toastify/dist/ReactToastify.css"

import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import NavBar from './components/NavbBar';
import Home from './components/Home';
import Cart from './components/Cart';
import NotFound from './components/NotFound';
import Register from './components/auth/Register';

function App() {
  return (
    <div className="App">
      <Router>
        <ToastContainer/>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/register' element={<Register />} />
          <Route path='*' element={<Navigate to='/not-found' />} /> 
          <Route path='/not-found' element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
