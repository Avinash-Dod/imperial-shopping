import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import './Login_signup.css'
import { useDispatch } from "react-redux";
import { login } from "../redux/actions/action";
const st = {
  "max-width": "500px",
  "margin": "auto",
  "height": "fit-content",
}


const Login = () => {
  const initialValues = { email: '', password: '' };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const errors = {};
  const userData = {
    email: formValues.email,
    password: formValues.password
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };
  useEffect(() => {
    // console.log(formErrors);
    if (Object.keys(formErrors).length === 0) {
      // console.log(formValues);
    }
  }, [formErrors]);
  const validate = (values) => {

    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.email) {
      errors.email = "Email is required!";
    }
     else if (!regex.test(values.email)) {
    errors.email = "This is not a valid email format!";
    }
    if (!values.password) {
      errors.password = "Password is required!";
    } else if (values.password.length < 6) {
      errors.password = "Password must be more than 6 characters";
    }

    return errors;
  };



  function onSubmitHandler(event) {
    event.preventDefault();
    setFormErrors(validate(formValues));
    if (Object.values(errors).length !== 0) {
      return
    }
    else {
      var axios = require('axios');
      var data = JSON.stringify(userData);

      var config = {
        method: 'post',
        url: 'http://localhost:5000/user/login',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + localStorage.getItem('login'),
        },
        data: data
      };

      axios(config)
        .then(function (response) {
          sessionStorage.setItem('login', JSON.stringify(response.data.token))
          sessionStorage.setItem('user', userData.email)
          dispatch(login())
          navigate("/")
          if(response.status===401)
          {
            alert(response.data.msg)
          }
        })
        .catch(function (error) {
          console.log(error);
          alert("Incorrect Username or Password! login failed")
        });

      // console.log(userData)
    };
  }





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
                {/* {Object.keys(formErrors).length === 0 ? (
                  <div className="ui message success">Signed in successfully</div>
                ) : (
                  <pre>{JSON.stringify(formValues, 2)}</pre>
                )} */}
                <form style={st} onSubmit={onSubmitHandler} action="post">

                  <div className="input-container well">
                    <i className="fa fa-user icon"></i>
                    <input className="input-field" type="text" placeholder="Email" name="email"
                      value={formValues.email}
                      onChange={handleChange} />

                  </div>
                  <p className='error-message'>{formErrors.email}</p>


                  <div className="input-container">
                    <i className="fa fa-key icon"></i>
                    <input className="input-field" type="password" placeholder="Password" name="password" value={formValues.password}
                      onChange={handleChange} />

                  </div>
                  <p className='error-message' >{formErrors.password}</p>


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