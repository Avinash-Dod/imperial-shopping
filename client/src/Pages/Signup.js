import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "./Login_signup.css";
const st = {
  "max-width": "500px",
  margin: "auto",
  height: "fit-content",
};

const SignUp = () => {
  const initialValues = {
    username: "",
    email: "",
    password: "",
    cPassword: "",
    mno: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const errors = {};
   const userData = {
    username: formValues.username,
    password: formValues.password,
    confirmPassword: formValues.cPassword,
    email: formValues.email,
    phone: formValues.mno,
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
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.username) {
      errors.username = "Username is required!";
    }
    if (!values.password) {
      errors.password = "Password is required!";
    } else if (values.password.length < 6) {
      errors.password = "Password must be more than 6 characters";
    }
    if (!values.cPassword) {
      errors.cPassword = "Password is required!";
    } else if (values.cPassword.length < 6) {
      errors.cPassword = "Password must be more than 6 characters";
    } else if (values.cPassword !== values.password) {
      errors.cPassword = "Confirm Password must be same to Password";
    }
    if (!values.mno) {
      errors.mno = "Mobile number is required!";
    } else if (values.mno.length < 10) {
      errors.mno = "Mobile number must be 10 digit";
    } else if (values.mno.length > 10) {
      errors.mno = "Mobile number cannot exceed more than 10 digit";
    }
    return errors;
  };
  function onSubmitHandler(event) {
    event.preventDefault();
    setFormErrors(validate(formValues));
    if (Object.values(errors).length !== 0) {
      return;
    } else {
      var axios = require("axios");
      var data = JSON.stringify(userData);

      var config = {
        method: "post",
        url: "http://localhost:5000/user/signup",
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      };

      axios(config)
        .then(function (response) {
          alert("Registered successfully.");
          setFormValues(initialValues);
        })
        .catch(function (error) {
          console.log(error);
          alert("Registration failed.");
        });

      // console.log(userData)
    }
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
                {/* {Object.keys(formErrors).length === 0 ? (
                  <div className="ui message success">Signed in successfully</div>
                ) : (
                  <pre>{JSON.stringify(formValues, 5)}</pre>
                )} */}
                <form style={st} onSubmit={onSubmitHandler}>
                  <div className="input-container well">
                    <i className="fa fa-user icon"></i>
                    <input
                      className="input-field"
                      type="text"
                      placeholder="Username"
                      name="username"
                      value={formValues.username}
                      onChange={handleChange}
                    />
                  </div>
                  <p className="error-message">{formErrors.username}</p>
                  <div className="input-container well">
                    <i className="fa fa-user icon"></i>
                    <input
                      className="input-field"
                      type="text"
                      placeholder="email"
                      name="email"
                      value={formValues.email}
                      onChange={handleChange}
                    />
                  </div>
                  <p className="error-message">{formErrors.email}</p>
                  <div className="input-container well">
                    <i className="fa fa-user icon"></i>
                    <input
                      className="input-field"
                      type="number"
                      placeholder="Mobile Number"
                      name="mno"
                      value={formValues.mno}
                      onChange={handleChange}
                    />
                  </div>
                  <p className="error-message">{formErrors.mno}</p>

                  <div className="input-container">
                    <i className="fa fa-key icon"></i>
                    <input
                      className="input-field"
                      type="password"
                      placeholder="Password"
                      name="password"
                      value={formValues.password}
                      onChange={handleChange}
                    />
                  </div>
                  <p className="error-message">{formErrors.password}</p>
                  <div className="input-container">
                    <i className="fa fa-key icon"></i>
                    <input
                      className="input-field"
                      type="password"
                      placeholder="Confirm Password"
                      name="cPassword"
                      value={formValues.cPassword}
                      onChange={handleChange}
                    />
                  </div>
                  <p className="error-message">{formErrors.cPassword}</p>

                  <button type="submit" className="btn primary-btn">
                    Register{" "}
                  </button>
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
  );
};
export default SignUp;
