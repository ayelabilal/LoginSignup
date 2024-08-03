import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    const user = JSON.parse(localStorage.getItem('user'));
    if (user && user.email === email && user.password === password) {
      localStorage.setItem('isAuthenticated', 'true');
      window.location.href = '/dashboard'; 
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="wrapper" style={{backgroundColor: "rgb(86, 125, 125)",marginLeft:"350px",width:"500px",height:"300px",textAlign:"center"}}>
      <form action="" className="form" onSubmit={handleLogin}>
        <h1 style={{color:"black"}} >LOGIN</h1>
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
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <br />
        <button type="submit" className="submit">Login Here</button>
        <p style={{paddingRight:"150px"}} className="footer">Don't have an account? <Link to="/" className="link" style={{color:"black"}}>Signup</Link></p>
      </form>
     
    </div>
  );
};

export default Login;