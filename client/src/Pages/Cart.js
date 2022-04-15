import { connect } from 'react-redux'

import Header from "../components/Header"
import Footer from "../components/Footer";
import { removeItem, addQuantity, subtractQuantity } from '../redux/actions/action';
import { Link } from 'react-router-dom';

const Cart = (props) => {
  // console.log(props.addedItems[1])
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
                                <img src={item.img} alt={item.img} />
                                <h5>{item.title}</h5>
                              </td>
                              <td className="shoping__cart__price">
                                {item.price}
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
                                        {item.sum}
                                    </td>

                              <td className="shoping__cart__item__close">
                                <span class="fa fa-close" onClick={() => { handleRemove(item.id) }} ></span>
                              </td>
                            </tr>

                          )
                        })
                      ) :
                      <p>Nothing in cart</p>
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
                  <form action=" ">
                    <input type="text" placeholder="Enter your coupon code" />
                    <button type="submit" className="site-btn">APPLY COUPON</button>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="shoping__checkout">
                <h5>Cart Total</h5>
                <ul>
                  <li>Subtotal <span>$454.98</span></li>
                  <li>Total <span>$454.98</span></li>
                </ul>
                <a href=" " className="primary-btn">PROCEED TO CHECKOUT</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />

    </>
  )
}
const mapStateToProps = (state) => {

  return {
    addedItems: Object.values(state.ShoppinReducer)
  }

}
const mapDispatchToProps = (dispatch) => {
  return {
    removeItem: (id) => { dispatch(removeItem(id)) },
    addQuantity: (id) => { dispatch(addQuantity(id)) },
    subtractQuantity: (id) => { dispatch(subtractQuantity(id)) }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Cart)

