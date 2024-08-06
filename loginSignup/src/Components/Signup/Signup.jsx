import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { productData } from '../Data';
import { Card } from '@mui/material';


const Signup = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();
    const user = { fullName, email, password };
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('isAuthenticated', 'true');
    window.location.href = '/login';
    // window.location.href = '/dashboard'; 
  };

  return (
    <div className="wrapper" style={{backgroundColor: "rgb(86, 125, 125)", marginLeft:"350px",width:"500px",height:"300px",textAlign:"center"}}>
      <form action="" className="form" onSubmit={handleSignup}>
        <h1 style={{color:"Black"}}>SIGN UP</h1>
        <div className="inp">
          <input
          style={{padding:"5px"}}
            type="text"
            placeholder="full name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>
        <br />
        <div className="inp">
          <input
          style={{padding:"5px"}}
            type="text"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <br />
        <div className="inp">
          <input
          style={{padding:"5px"}}
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}/>
            <br />
        </div>
        <br />
        <button type="submit" className="submit">Signup Here</button>
        <p className="footer">Already have an account  <Link to="/login" className="link">Login</Link></p>
      </form>
              


     
    </div>
  );
};

export default Signup;