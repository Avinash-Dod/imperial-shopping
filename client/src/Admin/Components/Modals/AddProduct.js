import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AdminHeader from "../AdminHeader";
import Sidebar from "../Sidebar";

const AddProduct = () => {
  const initialValues = {
    category: "",
    productName: "",
    price: "",
    description: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const errors = {};
  // const userData = {
  //   username: formValues.email,
  //   password: formValues.password
  // };

  const productData = {
    category: formValues.category,
    productName: formValues.productName,
    price: formValues.price,
    description: formValues.description,
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
    if (!values.category) {
      errors.category = "category is required!";
    }
    if (!values.productName) {
      errors.productName = "Username is required!";
    }
    if (!values.price) {
      errors.price = "price is required!";
    }

    if (!values.description) {
      errors.description = "description is required!";
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
      var data = JSON.stringify(productData);

      var config = {
        method: "post",
        url: "http://localhost:5000/product/addProducts",
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      };

      axios(config)
        .then(function (response) {
          alert("Added successfully.");
          setFormValues(initialValues);
        })
        .catch(function (error) {
          console.log(error);
          alert("Adding failed.");
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
              <h1>Add Product</h1>
            </div>
            <div className="col-lg-3 col-md-4">
              <Link to="/products">
                <img src="../../../assets/images/button-plus.png" alt="" />{" "}
                Close
              </Link>
            </div>
          </div>
        </div>

        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="addnewModalLabel">
                Add New Product
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              {/* {Object.keys(formErrors).length === 0 ? (
                  <div className="ui message success">Signed in successfully</div>
                ) : (
                  <pre>{JSON.stringify(formValues, 5)}</pre>
                )} */}
              <form onSubmit={onSubmitHandler} method="post">
                <div className="form-group">
                  <label>Product Name</label>
                  <input
                    type="text"
                    placeholder="Enter Product Name"
                    name="productName"
                    value={formValues.productName}
                    onChange={handleChange}
                    className="form-control"
                  />
                </div>
                <p className="error-message">{formErrors.productName}</p>
                <div className="form-group">
                  <label>Product Category</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Category Name"
                    name="category"
                    value={formValues.category}
                    onChange={handleChange}
                  />
                </div>
                <p className="error-message">{formErrors.category}</p>
                <div className="form-group">
                  <label>Description</label>
                  <input
                    type="text"
                    placeholder="Enter Description"
                    name="description"
                    value={formValues.description}
                    onChange={handleChange}
                    className="form-control"
                  />
                </div>
                <p className="error-message">{formErrors.description}</p>
                <div className="form-group">
                  <label>Price</label>
                  <input
                    type="text"
                    placeholder="Enter Price"
                    name="price"
                    value={formValues.price}
                    onChange={handleChange}
                    className="form-control"
                  />
                  <p className="error-message">{formErrors.price}</p>
                </div>
                {/* <div className="form-group">
                  <label>Image</label>
                  <input type="file" name="profile-file" required />
                </div> */}
                <div className="modal-footer">
                  <button type="submit" className="btn primary-btn">
                    Add Product
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default AddProduct;
