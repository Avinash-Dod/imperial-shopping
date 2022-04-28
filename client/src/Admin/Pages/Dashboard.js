import AdminHeader from "../Components/AdminHeader"
import Sidebar from "../Components/Sidebar"

const Dashboard = () => {
    return (
        <>
            <AdminHeader />
            <Sidebar/>

            <div class="main-container">

                <div class="main-heading">
                    <div class="row">
                        <div class="col-lg-12">
                            <h1>Dashboard</h1>
                        </div>
                    </div>


                    <div class="dashboard-page">
                        <div class="row">
                            <div class="col-lg-3 col-md-6">
                                <div class="box-index">
                                    <h2>Orders</h2>
                                    <h1>150 +</h1>
                                    <h6><a href="customer.html">View  <i className="fa fa-arrow-right" alt="" /></a></h6>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-6">
                                <div class="box-index">
                                    <h2>Products</h2>
                                    <h1>10 +</h1>
                                    <h6><a href="vendor.html">View <i className="fa fa-arrow-right" alt="" /></a></h6>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-6">
                                <div class="box-index">
                                    <h2>Customers</h2>
                                    <h1>350 +</h1>
                                    <h6><a href="rider.html">View  <i className="fa fa-arrow-right" alt="" /></a></h6>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-6">
                                <div class="box-index">
                                    <h2>Reviews</h2>
                                    <h1>450 +</h1>
                                    <h6><a href="user.html">View  <i className="fa fa-arrow-right" alt="" /></a></h6>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>

            </div>
        </>

    )
}
export default Dashboard