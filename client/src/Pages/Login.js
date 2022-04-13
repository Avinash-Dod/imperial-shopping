import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useState } from "react";
import {  useNavigate } from "react-router-dom";
import './Login_signup.css'
const st = {
  "max-width": "500px",
  "margin": "auto",
  "height": "fit-content",
}


const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate= useNavigate();
  const userData = {
    username: username,
    password: password
  };


  function onSubmitHandler(event) {
    event.preventDefault();
    var axios = require('axios');
    var data = JSON.stringify(userData);

    var config = {
      method: 'post',
      url: 'http://localhost:5000/user/login',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('Token'),
      },
      data: data
    };

    axios(config)
      .then(function (response) {
        localStorage.setItem('login',JSON.stringify(response) )
        navigate("/ourproducts") 

      })
      .catch(function (error) {
        console.log(error);
        alert("login failed")
      });



    // console.log(userData)
    setUsername('');
    setPassword('');



  };





  return (
    <>
      <Header />
      <h2>Login Page</h2>
      <div className="find-us">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="login ">
                <div className="Head">
                  <h2>Login Form</h2>
                </div>
                <form style={st} onSubmit={onSubmitHandler} action="post">

                  <div className="input-container well">
                    <i className="fa fa-user icon"></i>
                    <input className="input-field" type="text" placeholder="Username" name="username" onChange={(e) => setUsername(e.target.value)} value={username} required />
                  </div>



                  <div className="input-container">
                    <i className="fa fa-key icon"></i>
                    <input className="input-field" type="password" placeholder="Password" name="password" onChange={(e) => setPassword(e.target.value)} value={password} required />
                  </div>


                  <button type="submit" className="btn primary-btn">Login </button>
                  <div className="link-register">
                    <span className="psw">Not a member? <Link to="/signup">Register</Link></span>
                    <span className="psw"> Forgot Password?</span>
                  </div>
                </form>
              </div>
            </div>

          </div>
        </div>



      </div>
      <Footer />
    </>
  )
}
export default Login;