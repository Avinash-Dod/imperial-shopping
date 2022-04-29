
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import AdminHeader from "../Components/AdminHeader"
import Sidebar from "../Components/Sidebar"
import { deleteUser } from "../../redux/actions/action"

const Customer = (props) => {
const HandleDelete=(id)=>{
    console.log(id);
    if(window.confirm("Are you sure to delete user?")===true)
    {
        props.deleteUser(id)

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
                            <h1>Customer</h1>
                        </div>
                        <div className="col-lg-3 col-md-4">
                            <Link to="/customeradd" ><img src="images/button-plus.png" alt="" /> Add New</Link>
                        </div>
                    </div>
                </div>

                <div className="customer-page">
                    <table id="example" className="dataTables_main table table-striped table-responsive">
                        <thead>
                            <tr>
                                <th>ID.</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Active</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        {props.user[4].length ? (
                            props.user[4].map(users => {
                                return (
                                    <tbody key={users._id}>

                                        <tr>
                                            <td>{users._id}</td>
                                            <td>{users.username}</td>
                                            <td>{users.email}</td>
                                            <td>{users.phone}</td>
                                            <td>
                                                <input type="checkbox" id="checkbox1" checked=" " />
                                                <label for="checkbox1"></label>
                                            </td>
                                            <td>
                                                <h6>
                                                    <button onClick={()=>HandleDelete(users._id)}><i className="fa fa-trash" aria-hidden="true"></i></button>
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
        user: Object.values(state.ShoppinReducer)
    }

}
const mapDispatchToProps = (dispatch) => {
    return {
        deleteUser: (id) => { dispatch(deleteUser(id)) }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Customer)