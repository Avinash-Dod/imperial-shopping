import { connect } from 'react-redux'
import Header from "../components/Header"
import Footer from "../components/Footer";
import { removeItem, addQuantity, subtractQuantity, applyCoupon } from '../redux/actions/action';
import { Link, useNavigate } from 'react-router-dom';

const Cart = (props) => {
  console.log(props.addedItems)
  console.log(props.addedItems[4])
  const navigate = useNavigate()
  //to remove the item completely
  const handleRemove = (id) => {
    props.removeItem(id);
  }
  //to add the quantity
  const handleAddQuantity = (id) => {
    props.addQuantity(id);
  }
  //to substruct from the quantity
  const handleSubtractQuantity = (id) => {
    props.subtractQuantity(id);
  }
  const check = () => {
    if (props.addedItems[3] === 0) {
      alert("Please add product in cart first")
      return
    }
    else {
      navigate("/checkout")
    }

  }

  const handleChange = () => {
    // event.preventDefault()
    let code = document.getElementById("couponCode").value
    console.log(code);
    props.applyCoupon(code)

  }
  if (props.addedItems[4] === false && !sessionStorage.getItem('login')) {
    navigate("/")
  }
  else {

    return (
      <>
        <Header />
        <section className="shoping-cart spad">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <span className="heading"><h2>Cart Items</h2></span>
                <div className="shoping__cart__table">
                  <table>
                    <thead>
                      <tr>
                        <th className="shoping__product">Products</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                        <th></th>
                      </tr>
                    </thead>

                    <tbody>

                      {props.addedItems[1].length ?
                        (
                          props.addedItems[1].map(item => {
                            return (
                              <tr>
                                <td className="shoping__cart__item">
                                  <img src="https://thumbnail.imgbin.com/3/20/21/imgbin-new-product-development-pricing-strategies-marketing-marketing-WjDDZCqUqADtEbY8DSWx9JTNQ_t.jpg" alt={item.img} />
                                  <h5>{item.productName}</h5>
                                </td>
                                <td className="shoping__cart__price">
                                  <i class='fa fa-rupee'></i> {item.price}
                                </td>
                                <td class="shoping__cart__quantity">
                                  <div class="quantity">
                                    <div class="pro-qty">
                                      <span class="dec qtybtn" onClick={() => { handleSubtractQuantity(item.id) }}>-</span>
                                      <input type="text" value={item.quantity} />
                                      <span class="inc qtybtn" onClick={() => { handleAddQuantity(item.id) }}>+</span>
                                    </div>
                                  </div>
                                </td>
                                <td class="shoping__cart__total">
                                  <i class='fa fa-rupee'></i>{item.sum}
                                </td>

                                <td className="shoping__cart__item__close">
                                  <span class="fa fa-close" onClick={() => { handleRemove(item.id) }} ></span>
                                </td>
                              </tr>
                            )
                          })
                        ) :
                        <tr><td colSpan={4}><h3> <i class="fa fa-times-circle"></i> Nothing in Cart</h3></td></tr>
                      }


                    </tbody>

                  </table>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="shoping__cart__btns" >
                  <Link to='/' className="primary-btn cart-btn">CONTINUE SHOPPING</Link>

                </div>
              </div>
              <div className="col-lg-6">
                <div className="shoping__continue">
                  <div className="shoping__discount">
                    <h5>Discount Codes</h5>
                    <form action=" "  >
                      <input type="text" placeholder="Enter your coupon code" id="couponCode" name="discount" />
                      <button type="button" onClick={() => handleChange()} className="site-btn">APPLY COUPON</button>
                    </form>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="shoping__checkout">
                  <h5>Cart Total</h5>
                  <ul>
                    <li>Total <span> <i class='fa fa-rupee'></i>{props.total[2]}</span></li>
                  </ul>
                  <button type="submit" class="site-btn" onClick={() => check()}>PROCEED TO CHECKOUT</button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />

      </>
    )
  }
}
const mapStateToProps = (state) => {

  return {
    addedItems: Object.values(state.ShoppinReducer),
    total: Object.values(state.ShoppinReducer),
  }

}
const mapDispatchToProps = (dispatch) => {
  return {
    removeItem: (id) => { dispatch(removeItem(id)) },
    addQuantity: (id) => { dispatch(addQuantity(id)) },
    subtractQuantity: (id) => { dispatch(subtractQuantity(id)) },
    applyCoupon: (code) => { dispatch(applyCoupon(code)) }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Cart)

