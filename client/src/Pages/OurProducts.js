import BannerHome from "../components/BannerHome"
import Header from "../components/Header"
import productDetail from '../userData.json'
import ProductHover from "../components/productHover";
import Footer from "../components/Footer";

import { useState } from "react";

const productData = productDetail.productData;
const OurProducts = () => {
  const [search, setSearch] = useState('')

  return (
    <>
      <Header />
      <BannerHome />

      <div className="latest-products">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-heading">
                <h2>Latest Products</h2>
                <form action="#" >
                  <input type="text" placeholder="What do you need?" onChange={(e) => setSearch(e.target.value)} />
                  <button type="submit" class="site-btn"><i class="fa fa-search" aria-hidden="true"></i> </button>
                </form>

                <a href="/ourproducts">view all products <i className="fa fa-angle-right"></i></a>


              </div>
              <div className="section-title product__discount__title">
                <h2>Sale Off</h2>
              </div>

              <div className="col-lg-12">
                <div className="product__discount">

                  <div className="row">
                    {productData.filter((post) => {
                      if (search === '') {
                        return post;
                      } else if ((post.title.toLowerCase().includes(search.toLowerCase())) || (post.price.toLowerCase().includes(search.toLowerCase())) || (post.description.toLowerCase().includes(search.toLowerCase()))) {
                        return post;
                      }
                    }).map((exp, index) => (
                      <div className="col-lg-3 " key={index}>
                        <div className="product__discount__item">
                          <div className="product__discount__item__pic ">
                            <a href="  "><img src="https://thumbnail.imgbin.com/3/20/21/imgbin-new-product-development-pricing-strategies-marketing-marketing-WjDDZCqUqADtEbY8DSWx9JTNQ_t.jpg" alt="productnotfound" /></a>
                            <div className="product__discount__percent">-20%</div>
                            <ProductHover />
                          </div>
                          <div className="product__discount__item__text">
                            <span>{exp.description}</span>
                            <h5><a href=" ">{exp.title}</a></h5>
                            <div className="product__item__price">{exp.price}<span>$36.00</span></div>
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
export default OurProducts

