import { connect } from "react-redux";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { applyCoupon, emptyCart } from "../redux/actions/action";
// import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
const Checkout = (props) => {
  const initialValues = {
    fullName: "",
    phone: "",
    email: "",
    postCode: "",
    address: "",
    city: "",
    orderNote: "",
    productDetail: "",
    status: "",
    total: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const errors = {};
  const navigate = useNavigate();
  const orderData = {
    fullName: formValues.fullName,
    phone: formValues.phone,
    email: formValues.email,
    postCode: formValues.postCode,
    address: formValues.address,
    city: formValues.city,
    orderNote: formValues.orderNote,
    productDetail: props.addedItems[1],
    status: "Processing",
    total: props.total[2],
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
    if (!values.fullName) {
      errors.fullName = "Fullname is required!";
    }
    if (!values.postCode) {
      errors.postCode = "postCode is required!";
    }
    if (!values.phone) {
      errors.phone = "Mobile number is required!";
    } else if (values.phone.length < 10) {
      errors.mno = "Mobile number must be 10 digit";
    } else if (values.phone.length > 10) {
      errors.mno = "Mobile number cannot exceed more than 10 digit";
    }
    if (!values.city) {
      errors.city = "City is required";
    }
    if (!values.address) {
      errors.address = "Address is required";
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
      var data = JSON.stringify(orderData);

      var config = {
        method: "post",
        url: "http://localhost:5000/order/saveOrder",
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      };

      axios(config)
        .then(function (response) {
          alert("Order Placed Successfully.");
          setFormValues(initialValues);
          props.emptyCart();
          navigate("/");
        })
        .catch(function (error) {
          console.log(error);
          alert(" Failed.");
        });

      // console.log(userData)
    }
  }

  const PlaceOrder = () => {
    alert("Order placed Successfully");
    navigate("/");
    props.emptyCart();
  };

  const handleChecked = (e) => {
    if (e.target.checked) {
      props.addShipping();
    } else {
      props.substractShipping();
    }
  };
  console.log(props.addedItems);
  return (
    <>
      <Header />
      <section class="checkout spad">
        <div class="container">
          {/* <div class="row">
                        <div class="col-lg-12">
                            <h6><span class="icon_tag_alt"></span> Have a coupon? <a href="#">Click here</a> to enter your code
                            </h6>
                        </div>
                    </div> */}
          <div class="checkout__form">
            <h4>Billing Details</h4>
            <form action="#" method="post" onSubmit={onSubmitHandler}>
              <div class="row">
                <div class="col-lg-8 col-md-6">
                  <div class="row">
                    <div class="col-lg-6">
                      <div class="checkout__input">
                        <p>
                          Full Name<span>*</span>
                        </p>
                        <input
                          type="text"
                          placeholder="Enter Fullname"
                          name="fullName"
                          value={formValues.fullName}
                          onChange={handleChange}
                        />
                      </div>
                      <p className="error-message">{formErrors.fullName}</p>
                    </div>
                  </div>
                  <div class="checkout__input">
                    <p>
                      Address<span>*</span>
                    </p>
                    <input
                      type="text"
                      placeholder="Enter Address"
                      name="address"
                      value={formValues.address}
                      onChange={handleChange}
                      class="checkout__input__add"
                    />
                  </div>
                  <p className="error-message">{formErrors.address}</p>
                  <div class="checkout__input">
                    <p>
                      Town/City<span>*</span>
                    </p>
                    <input
                      type="text"
                      placeholder="Enter City"
                      name="city"
                      value={formValues.city}
                      onChange={handleChange}
                    />
                  </div>
                  <p className="error-message">{formErrors.city}</p>
                  <div class="checkout__input">
                    <p>
                      Postcode / ZIP<span>*</span>
                    </p>
                    <input
                      type="text"
                      placeholder="Enter Zip Code"
                      name="postCode"
                      value={formValues.postCode}
                      onChange={handleChange}
                    />
                  </div>
                  <p className="error-message">{formErrors.postCode}</p>
                  <div class="row">
                    <div class="col-lg-6">
                      <div class="checkout__input">
                        <p>
                          Phone<span>*</span>
                        </p>
                        <input
                          type="text"
                          placeholder="Enter Mobie no."
                          name="phone"
                          value={formValues.phone}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <p className="error-message">{formErrors.phone}</p>
                    <div class="col-lg-6">
                      <div class="checkout__input">
                        <p>
                          Email<span>*</span>
                        </p>
                        <input
                          type="text"
                          placeholder="Enter Email"
                          name="email"
                          value={formValues.email}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <p className="error-message">{formErrors.email}</p>
                  </div>
                  {/* <div class="checkout__input__checkbox">
                                        <label for="acc">
                                            Create an account?
                                            <input type="checkbox" id="acc" />
                                            <span class="checkmark"></span>
                                        </label>
                                    </div>
                                    <p>Create an account by entering the information below. If you are a returning customer
                                        please login at the top of the page</p>
                                    <div class="checkout__input">
                                        <p>Account Password<span>*</span></p>
                                        <input type="text" />
                                    </div>
                                    <div class="checkout__input__checkbox">
                                        <label for="diff-acc">
                                            Ship to a different address?
                                            <input type="checkbox" id="diff-acc" />
                                            <span class="checkmark"></span>
                                        </label>
                                    </div> */}
                  <div class="checkout__input">
                    <p>
                      Order notes<span>*</span>
                    </p>
                    <input
                      type="text"
                      placeholder="Notes about your order, e.g. special notes for delivery."
                      name="orderNote"
                      value={formValues.orderNote}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div class="col-lg-4 col-md-6">
                  <div class="checkout__order">
                    <h4>Your Order</h4>
                    <div class="checkout__order__products">
                      Products &nbsp; Qty<span>Total</span>
                    </div>
                    {props.addedItems[1].length ? (
                      props.addedItems[1].map((item) => {
                        return (
                          <ul>
                            <li>
                              {item.productName} &nbsp;*&nbsp; {item.quantity}
                              <span>
                                {" "}
                                <i class="fa fa-rupee"></i> {item.price}
                              </span>
                            </li>
                          </ul>
                        );
                      })
                    ) : (
                      <ul>
                        <li>Nothing Here</li>
                      </ul>
                    )}

                    {/* <div class="checkout__order__subtotal">Subtotal <span><i class='fa fa-rupee'></i> <p>{msg}</p> </span></div> */}
                    <div class="checkout__order__total">
                      Total{" "}
                      <span>
                        <i class="fa fa-rupee"></i>
                        {props.total[2]}
                      </span>
                    </div>
                    {/* <div class="checkout__input__checkbox">
                                            <label for="acc-or">
                                                Create an account?
                                                <input type="checkbox" id="acc-or" />
                                                <span class="checkmark"></span>
                                            </label>
                                        </div>
                                        <p>Lorem ipsum dolor sit amet, consectetur adip elit, sed do eiusmod tempor incididunt
                                            ut labore et dolore magna aliqua.</p> */}
                    <div class="checkout__input__checkbox">
                      <label for="payment">
                        Check Payment
                        <input type="checkbox" id="payment" />
                        <span class="checkmark"></span>
                      </label>
                    </div>
                    <div class="checkout__input__checkbox">
                      <label for="paypal">
                        Paypal
                        <input type="checkbox" id="paypal" />
                        <span class="checkmark"></span>
                      </label>
                    </div>
                    <div class="checkout__input__checkbox">
                      <label for="COD">
                        Cash On Delivery
                        <p>
                          * will take <i class="fa fa-rupee"></i>49 Shipping
                          Charges
                        </p>
                        <input
                          type="checkbox"
                          id="COD"
                          onChange={handleChecked}
                        />
                        <span class="checkmark"></span>
                      </label>
                    </div>
                    <button type="submit" class="site-btn">
                      PLACE ORDER
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    addedItems: Object.values(state.ShoppinReducer),
    total: Object.values(state.ShoppinReducer),
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    emptyCart: () => {
      dispatch(emptyCart());
    },
    //   addQuantity: (id) => { dispatch(addQuantity(id)) },
    //   subtractQuantity: (id) => { dispatch(subtractQuantity(id)) },
    applyCoupon: (code) => {
      dispatch(applyCoupon(code));
    },
    addShipping: () => {
      dispatch({ type: "ADD_SHIPPING" });
    },
    substractShipping: () => {
      dispatch({ type: "SUB_SHIPPING" });
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
