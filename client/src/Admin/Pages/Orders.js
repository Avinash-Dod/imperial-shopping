
import { Link, useNavigate } from "react-router-dom"
import { connect } from "react-redux"
import AdminHeader from "../Components/AdminHeader"
import Sidebar from "../Components/Sidebar"
import { getOrder } from "../../redux/actions/action"

const Orders = (props) => {

    return (
        <div>
            <AdminHeader />
            <Sidebar />
            <div className="main-container">

                <div className="main-heading">
                    <div className="row">
                        <div className="col-lg-9 col-md-8">
                            <h1>Customer</h1>
                        </div>
                        <div className="col-lg-3 col-md-4">
                            <Link to="/customeradd" ><img src="images/button-plus.png" alt="" /> Add New</Link>
                        </div>
                    </div>
                </div>

                <div className="customer-page">
                    {
                        props.Order[6].length ? (
                            props.Order[6].map(order => {
                                return (
                                    <div className="w3-container">
                                        <div className="w3-card-4" style={{ width: "100%" }}>
                                            <div className="w3-container">
                                                <p>Order Date :</p>
                                                <hr />
                                                <table className="w3-table">
                                                    <tr>
                                                        <strong><td>Customer Name</td></strong>
                                                        <td>{order.fullName}</td>
                                                        <strong><td>Phone</td></strong>
                                                        <td>{order.phone}</td>
                                                        <strong><td>Email</td></strong>
                                                        <td>{order.email}</td>
                                                        <strong><td>Address</td></strong>
                                                        <td>{order.address}</td>
                                                    </tr>
                                                    <tr colspan="8"><td>Order Details</td></tr>
                                                    <tr>
                                                        <td>Address</td>
                                                        <td>{order.address}</td>
                                                        <td>Pincode : </td>
                                                        <td>{order.postCode}</td>
                                                        <td>{Object.values(order.productDetail)}</td>

                                                    </tr>


                                                </table>

                                            </div>
                                        </div>
                                    </div>



                                )
                            }

                            )) :
                            <p>No New Product</p>

                    }

                </div>


            </div>
        </div>


    )
}
const mapStateToProps = (state) => {
    return {
        Order: Object.values(state.ShoppinReducer)
    }

}
const mapDispatchToProps = (dispatch) => {
    return {


    }
}
export default connect(mapStateToProps, null)(Orders)