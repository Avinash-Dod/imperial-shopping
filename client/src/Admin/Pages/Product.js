
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import AdminHeader from "../Components/AdminHeader"
import Sidebar from "../Components/Sidebar"
import { deleteProduct } from "../../redux/actions/action"

const Products = (props) => {
    
const HandleDelete=(id)=>{
    console.log(id);
    if(window.confirm("Are you sure to delete user?")===true)
    {
        props.deleteProduct(id)

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
                            <h1>Products</h1>
                        </div>
                        <div className="col-lg-3 col-md-4">
                            <Link to="/addProduct" ><img src="images/button-plus.png" alt="" /> Add New Product</Link>
                        </div>
                    </div>
                </div>

                <div className="customer-page">
                    <table id="example" className="dataTables_main table table-striped table-responsive">
                        <thead>
                            <tr>
                                <th>ID.</th>
                                <th>Product Name</th>
                                <th>Product Category</th>
                                <th>Price</th>
                                <th>Desription</th>
                                <th>Active</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        {props.Products[0].length ? (
                            props.Products[0].map(product => {
                                return (
                                    <tbody key={product._id}>

                                        <tr>
                                            <td>{product._id}</td>
                                            <td>{product.productName}</td>
                                            <td>{product.category}</td>
                                            <td>{product.price}</td>
                                            <td>{product.description}</td>
                                            <td>
                                                <input type="checkbox" id="checkbox1" checked=" " />
                                                <label for="checkbox1"></label>
                                            </td>
                                            <td>
                                                <h6>
                                                    <button onClick={()=>HandleDelete(product._id)}><i className="fa fa-trash" aria-hidden="true"></i></button>
                                                    <Link to="/editCustomer"><i className="fa fa-edit" aria-hidden="true"></i></Link>
                                                </h6>
                                            </td>
                                        </tr>

                                    </tbody>



                                )


                            })


                        ) : <tr><td colSpan={4}><h3> <i className="fa fa-times-circle"></i> No Customer</h3></td></tr>
                        }

                    </table>
                </div>


            </div>
        </>
    )
}
const mapStateToProps = (state) => {
    return {
        Products: Object.values(state.ShoppinReducer)
    }

}
const mapDispatchToProps = (dispatch) => {
    return {
        deleteProduct: (id) => { dispatch(deleteProduct(id)) }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Products)