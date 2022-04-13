
import Header from "../components/Header";
import Footer from "../components/Footer";
import BannerHome from "../components/BannerHome";
import productDetail from '../userData.json'
import ProductHover from "../components/productHover";


const productData = productDetail.productData;
function Home() {
  

  
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

                  <div className="row">

                    {productData.map((exp) => (
                      <div className="col-lg-3 " key={Math.random()}>
                        <div className="product__discount__item">
                          <div className="product__discount__item__pic ">
                            <a href="  "><img src={exp.image} alt="productnotfound" /></a>
                            <div className="product__discount__percent">-20%</div>
                            <ProductHover/>
                            
                          </div>
                          <div className="product__discount__item__text">
                            <span>Dried Fruit</span>
                            <h5><a href=" ">Raisin’n’nuts</a></h5>
                            <div className="product__item__price">$30.00 <span>$36.00</span></div>
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
export default Home;