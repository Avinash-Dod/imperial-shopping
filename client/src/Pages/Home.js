
import { connect } from 'react-redux'
import { addToCart } from '../redux/actions/action';
import Footer from "../components/Footer";
import BannerHome from "../components/BannerHome";
import Header from '../components/Header';
import { useNavigate } from 'react-router-dom';

function Home(props) {
  const navigate=useNavigate()
  const handleClick = (id) => {
    if(sessionStorage.getItem('user'))
    {
      props.addToCart(id)
    }
    else{
      alert("Please Login First.")
     navigate("/login")
    }
  }
console.log(props.items[4]);
console.log(props.items[0]);

  return (
    <>
      <Header />
      <BannerHome />

      <div className="latest-products">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-heading">
                <h2>Latest Products </h2>
                <div>&nbsp;&nbsp;&nbsp;</div>
                <a href="/ourproducts">view all products <i className="fa fa-angle-right"></i></a>
              </div>
              <div className="section-title product__discount__title">
                <h2>Sale Off</h2>
              </div>

              <div className="col-lg-12">
                <div className="product__discount">
                {/* "https://thumbnail.imgbin.com/3/20/21/imgbin-new-product-development-pricing-strategies-marketing-marketing-WjDDZCqUqADtEbY8DSWx9JTNQ_t.jpg" */}
                  <div className="row">

                    {props.items[0].map((product) => (
                      <div className="col-lg-3 " key={product.id}>
                        <div className="product__discount__item">
                          <div className="product__discount__item__pic ">
                            <a href="/productDetail "><img src={product.img} alt={product.title} /></a>
                            <div className="product__discount__percent">-20%</div>

                          </div>
                          <div class="product__details__rating">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star-half-o"></i>
                            <span>(18 reviews)</span>
                          </div>
                          
                          <div className="product__discount__item__text">
                          <h5><a href="/productDetail " data-content={product.category} data-placement="bottom">{product.category}</a></h5>
                            <span><></>{product.productName}</span>
                            <h5><a href="/productDetail " data-content={product.description} data-placement="bottom">{product.description}</a></h5>
                            <div className="product__item__price"><a href='/productDetail' ><i class='fa fa-rupee'></i> {product.price}<span><i class='fa fa-rupee'></i> {product.price}</span></a></div>
                            <button type="button" className='site-btnn '><i className="fa fa-heart"></i></button>
                            <button type="button" className='site-btnn '
                              onClick={() => { handleClick(product.id) }}
                            ><i className="fa fa-shopping-cart"></i></button>
                          </div>

                        </div>
                      </div>
                    ))}
                  </div>




                  <div className="filter__item">
                    <div className="row">
                      <div className="col-lg-4 col-md-5">
                        <div className="filter__sort">
                          <span>Sort By </span>
                          <select>
                            <option value="0"> Default</option>
                            <option value="0"> Default</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-4">
                        <div className="filter__found">
                          <h6><span>16</span> Products found</h6>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-3">
                        <div className="filter__option">
                          <span className="fa fa-search"></span>
                          <span className="fa fa-car"> </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="product__pagination">
                    <a href=" ">1</a>
                    <a href=" ">2</a>
                    <a href=" ">3</a>
                    <a href=" "><i className="fa fa-long-arrow-right"></i></a>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>



      <Footer />
    </>
  )

}
const mapStateToProps = (state) => {
  return {
    items: Object.values(state.ShoppinReducer)
  }

}
const mapDispatchToProps = (dispatch) => {

  return {
    addToCart: (id) => { dispatch(addToCart(id)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)