import { useEffect, useState } from "react"
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import AdminHeader from "../AdminHeader"
import Sidebar from "../Sidebar"

const EditCustomer = (props) => {
    const data = props.user[5]
    console.log("clicked user", data);
    console.log("user", props.user);
    const initialValues = { username: props.user[5].username, email: props.user[5].email, password: '', cPassword: '', phone: props.user[5].phone, };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    let uId = ''
    const errors = {};
    const userData = {
        username:formValues.username,
        password: formValues.password,
        confirmPassword: formValues.cPassword,
        email:formValues.email,
        phone: formValues.phone
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };
    const ID = (id) => {
        uId = id
    }
    useEffect(() => {
        // console.log(formErrors);
        if (Object.keys(formErrors).length === 0) {
            // console.log(formValues);
        }
    }, [formErrors]);
    const validate = (values) => {

        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!values.username) {
            errors.username = "Username is required"
        }
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
        if (!values.cPassword) {
            errors.password = "Password is required!";
        } else if (values.cPassword.length < 6) {
            errors.cPassword = "Password must be more than 6 characters";
        } else if (values.cPassword !== values.password) {
            errors.cPassword = "Password must be same";
        }
        if (!values.phone) {
            errors.phone = "Mobile number is required!";
        }
        else if (values.phone.length < 10) {
            errors.phone = "Mobile number must be 10 digit";
        } else if (values.phone.length > 10) {
            errors.phone = "Mobile number cannot exceed more than 10 digit";
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
                method: 'put',
                url: `http://localhost:5000/user/update/${uId}`,
                headers: {
                    'Content-Type': 'application/json'
                },
                data: data
            };

            axios(config)
                .then(function (response) {

                    alert("Updated successfully.");
                    setFormValues(initialValues)
                })
                .catch(function (error) {
                    console.log(error);
                    alert("Update failed.")
                });

            // console.log(userData)
        }
    }


    return (
        <>
            <AdminHeader />
            <Sidebar />
            <div className="main-container">

                <div className="main-heading">
                    <div className="row">
                        <div className="col-lg-9 col-md-8">
                            <h1>Edit Customer</h1>
                        </div>
                        <div className="col-lg-3 col-md-4">
                            <Link to="/customers" ><img src="../../../assets/images/button-plus.png" alt="" /> Close</Link>
                        </div>
                    </div>
                </div>

                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="addnewModalLabel">Edit Customer</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            {Object.keys(formErrors).length === 0 ? (
                                <div className="ui message success">sucessful</div>
                            ) : (
                                <pre>{JSON.stringify(formValues, 5)}</pre>
                            )}


                            <form onSubmit={onSubmitHandler} method="post" >

                                <div className="form-group">
                                    <label>Username</label>
                                    <input type="text" className="form-control" placeholder="" name="username"
                                        value={formValues.username}
                                        onChange={handleChange} />
                                </div>
                                <p className='error-message'>{formErrors.username}</p>
                                <div className="form-group">
                                    <label>Email</label>
                                    <input type="text" placeholder="" className="form-control" name="email"
                                        value={formValues.email}
                                        onChange={handleChange} />
                                </div>
                                <p className='error-message'>{formErrors.email}</p>
                                <div className="form-group">
                                    <label>Password</label>
                                    <input type="text" placeholder="password" className="form-control" name="password"
                                        value={formValues.password}
                                        onChange={handleChange} />
                                </div>
                                <p className='error-message'>{formErrors.password}</p>
                                <div className="form-group">
                                    <label>Confirm Password</label>
                                    <input type="text" placeholder="cPassword" className="form-control" name="cPassword"
                                        value={formValues.cPassword}
                                        onChange={handleChange} />
                                </div>
                                <p className='error-message'>{formErrors.cPassword}</p>
                                <div className="form-group">
                                    <label>Mobile no.</label>
                                    <input type="text" placeholder="" className="form-control" name="phone"
                                        value={formValues.phone}
                                        onChange={handleChange} />
                                </div>
                                <p className='error-message'>{formErrors.phone}</p>
                                <div className="modal-footer">
                                    <button type="submit" onClick={() => { ID(props.user[5]._id) }} className="">Update</button>
                                </div>

                            </form>
                        </div>

                    </div>
                </div>


            </div>


        </>
    )
}
const mapStateToProps = (state) => {
    return {
        user: Object.values(state.ShoppinReducer)
    }

}

export default connect(mapStateToProps, null)(EditCustomer)
