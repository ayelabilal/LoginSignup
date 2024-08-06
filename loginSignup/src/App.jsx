
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './Components/DashboardScreen/DashboardScreen';
import Signup from './Components/Signup/Signup';
import Login from './Components/Login/Login';
import Product from './Components/Product';

const App = () => {
  const DashboardScreen = () => {
    const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';

    if (!isAuthenticated) {
      window.location.href = '/login';
      return null;
    }

    return <Dashboard />;
  };

  return (
   
      <Routes>
        <Route path="/" element={<Signup/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="dashboard" element={<DashboardScreen/>} />
        <Route path="products/:id" element={<Product/>} />
      </Routes>



   
  );
};

export default App;
