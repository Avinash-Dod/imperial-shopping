import { connect } from 'react-redux'
import Header from "../components/Header"
import Footer from "../components/Footer";
import { applyCoupon, emptyCart } from '../redux/actions/action';
// import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const Checkout = (props) => {
    //     componentWillUnmount () {
    //         if(shipping.checked)
    //              props.substractShipping()
    //    };
    const navigate = useNavigate()
    const PlaceOrder = () => {
        alert("Order placed Successfully")
        navigate("/")
        props.emptyCart()

    }
    const message ={}
    
    const handleChecked = (e) => {
        if (e.target.checked) {
            props.addShipping();
            message.item="Shipping Charge"
            message.price=49            
        }
        else {
            props.substractShipping();
        }
    }
    console.log(props.addedItems)
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
                        <form action="#" method='post'>
                            <div class="row">
                                <div class="col-lg-8 col-md-6">
                                    <div class="row">
                                        <div class="col-lg-6">
                                            <div class="checkout__input">
                                                <p>Fist Name<span>*</span></p>
                                                <input type="text" />
                                            </div>
                                        </div>
                                        <div class="col-lg-6">
                                            <div class="checkout__input">
                                                <p>Last Name<span>*</span></p>
                                                <input type="text" />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="checkout__input">
                                        <p>Address<span>*</span></p>
                                        <input type="text" placeholder="Street Address" class="checkout__input__add" />
                                        <input type="text" placeholder="Apartment, suite, unite ect (optinal)" />
                                    </div>
                                    <div class="checkout__input">
                                        <p>Town/City<span>*</span></p>
                                        <input type="text" />
                                    </div>
                                    <div class="checkout__input">
                                        <p>Country/State<span>*</span></p>
                                        <input type="text" />
                                    </div>
                                    <div class="checkout__input">
                                        <p>Postcode / ZIP<span>*</span></p>
                                        <input type="text" />
                                    </div>
                                    <div class="row">
                                        <div class="col-lg-6">
                                            <div class="checkout__input">
                                                <p>Phone<span>*</span></p>
                                                <input type="text" />
                                            </div>
                                        </div>
                                        <div class="col-lg-6">
                                            <div class="checkout__input">
                                                <p>Email<span>*</span></p>
                                                <input type="text" />
                                            </div>
                                        </div>
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
                                        <p>Order notes<span>*</span></p>
                                        <input type="text"
                                            placeholder="Notes about your order, e.g. special notes for delivery." />
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-6">
                                    <div class="checkout__order">
                                        <h4>Your Order</h4>
                                        <div class="checkout__order__products">Products &nbsp; Qty<span>Total</span></div>
                                        {props.addedItems[1].length ?
                                            (
                                                props.addedItems[1].map(item => {
                                                    return (<ul>
                                                        <li>{item.title}  &nbsp;*&nbsp; {item.quantity}<span> <i class='fa fa-rupee'></i> {item.price}</span></li>
                                                    </ul>)
                                                })
                                            ) : <ul>
                                                <li>Nothing Here</li>
                                            </ul>
                                        }


                                        {/* <div class="checkout__order__subtotal">Subtotal <span><i class='fa fa-rupee'></i> <p>{msg}</p> </span></div> */}
                                        <div class="checkout__order__total">Total <span><i class='fa fa-rupee'></i>{props.total[2]}</span></div>
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
                                                <p>* will take <i class='fa fa-rupee'></i>49 Shipping Charges</p>
                                                <input type="checkbox" id="COD" onChange={handleChecked} />
                                                <span class="checkmark"></span>
                                            </label>
                                        </div>
                                        <button type="submit" class="site-btn" onClick={() => PlaceOrder()}>PLACE ORDER</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>


            <Footer />

        </>
    )
}

const mapStateToProps = (state) => {

    return {
        addedItems: Object.values(state.ShoppinReducer),
        total: Object.values(state.ShoppinReducer)
    }

}
const mapDispatchToProps = (dispatch) => {
    return {
        emptyCart: () => { dispatch(emptyCart()) },
        //   addQuantity: (id) => { dispatch(addQuantity(id)) },
        //   subtractQuantity: (id) => { dispatch(subtractQuantity(id)) },
        applyCoupon: (code) => { dispatch(applyCoupon(code)) },
        addShipping: () => { dispatch({ type: 'ADD_SHIPPING' }) },
        substractShipping: () => { dispatch({ type: 'SUB_SHIPPING' }) }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Checkout)