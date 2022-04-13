import { useState } from "react";

import Footer from "../components/Footer";
import Header from "../components/Header";
import './Login_signup.css'
const st = {
  "max-width": "500px",
  "margin": "auto",
  "height": "fit-content",
}

const SignUp = () => {
  

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [cPassword, setCpassword] = useState('');
  const [mno, setMno] = useState('');
  const [email, setEmail] = useState('');

  function onSubmitHandler(event) {
    event.preventDefault();
    const userData = {
      username: username,
      password: password,
      confirmPassword: cPassword,
      email: email,
      phone: mno

    };
    var axios = require('axios');
    var data = JSON.stringify(userData);

    var config = {
      method: 'post',
      url: 'http://localhost:5000/user/signup',
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
    };

    axios(config)
      .then(function (response) {
        
          alert("Registered successfully."); 
          
        
        
        
      })
      .catch(function (error) {
        console.log(error);
      
          alert("login failed.")
      
        
      });

    // console.log(userData)
    setUsername('');
    setPassword('');
    setCpassword('')
    setMno('')
    setEmail('')

    
    
  }

  return (
    <div>
      <Header />
      <h2>SignUp Page</h2>
      <div className="find-us">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="login">
                <div className="Head">
                  <h2>Register Form</h2>
                </div>
                <form style={st} onSubmit={onSubmitHandler}>

                  <div className="input-container well">
                    <i className="fa fa-user icon"></i>
                    <input className="input-field" type="text" placeholder="Username" name="username" onChange={(e)=>setUsername(e.target.value)} value={username} required/>
                  </div>
                  <div className="input-container well">
                    <i className="fa fa-user icon"></i>
                    <input className="input-field" type="email" placeholder="email" name="email" onChange={(e)=>setEmail(e.target.value)} value={email}  required/>
                  </div>
                  <div className="input-container well">
                    <i className="fa fa-user icon"></i>
                    <input className="input-field" type="text" placeholder="Mobile Number" name="mno" onChange={(e)=>setMno(e.target.value)} value={mno} required/>
                  </div>


                  <div className="input-container">
                    <i className="fa fa-key icon"></i>
                    <input className="input-field" type="password" placeholder="Password" name="psw" onChange={(e)=>setPassword(e.target.value)} value={password} required/>
                  </div>
                  <div className="input-container">
                    <i className="fa fa-key icon"></i>
                    <input className="input-field" type="password" placeholder="Confirm Password" name="cpsw" onChange={(e)=>setCpassword(e.target.value)} value={cPassword} required/>
                  </div>

                  <button type="submit" className="btn primary-btn">Register </button>
                  <div className="link-register">
                    <span className="psw"></span>
                  </div>
                </form>
              </div>
            </div>

          </div>
        </div>



      </div>
      <Footer />
    </div>
  )
}
export default SignUp;