import { Link } from "react-router-dom"
import AdminHeader from "../AdminHeader"
import Sidebar from "../Sidebar"

const AddCustomer = () => {
    return (
        <>
            <AdminHeader />
            <Sidebar />
            <div className="main-container">

                <div className="main-heading">
                    <div className="row">
                        <div className="col-lg-9 col-md-8">
                            <h1>Add Customer</h1>
                        </div>
                        <div className="col-lg-3 col-md-4">
                            <Link to="/customers" ><img src="../../../assets/images/button-plus.png" alt="" /> Close</Link>
                        </div>
                    </div>
                </div>

                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="addnewModalLabel">Add New Customer</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="form-group">
                                    <label>Name</label>
                                    <input type="text" name="" placeholder="Name" className="form-control" />
                                </div>
                                <div className="form-group">
                                    <label>Email</label>
                                    <input type="text" name="" placeholder="Email" className="form-control" />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button">Save</button>
                        </div>
                    </div>
                </div>


            </div>


        </>
    )
}
export default AddCustomer