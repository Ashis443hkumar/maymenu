import React from 'react';
import Navbar from './components/Navbar';
import './style.css';
import Home from './components/pages/Home';
import { Routes, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import ContactUs from './components/pages/ContactUs';
// import SignUp from './components/pages/SignUp';
// import Marketing from './components/pages/Marketing';
// import Consulting from './components/pages/Consulting';

function App() {
  return (
      <Routes> 
      <Navbar />
        <Route path='/' exact component={Home} />
        {/* <Route path='/services' component={Services} />
        <Route path='/products' component={Products} />
        <Route path='/contact-us' component={ContactUs} /> */}
        
        {/* <Route path='/sign-up' component={SignUp} />
        <Route path='/marketing' component={Marketing} />
        <Route path='/consulting' component={Consulting} /> */}
      </Routes>
  );
}

export default App;