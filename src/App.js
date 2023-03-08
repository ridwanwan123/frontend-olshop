import './App.css';

import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import NavBar from './components/NavbBar';
import Home from './components/Home';
import Cart from './components/Cart';
import NotFound from './components/NotFound';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='*' element={<Navigate to='/not-found' />} /> 
          <Route path='/not-found' element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
