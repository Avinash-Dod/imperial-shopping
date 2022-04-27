import AdminHeader from "../Components/AdminHeader"

const Dashboard = () => {
    return (
        <>
            <AdminHeader />

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
                                    <h2>Customer</h2>
                                    <h1>150 +</h1>
                                    <h6><a href="customer.html">View <img src="images/right-icon.png" /></a></h6>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-6">
                                <div class="box-index">
                                    <h2>Vendor</h2>
                                    <h1>10 +</h1>
                                    <h6><a href="vendor.html">View <img src="images/right-icon.png" alt="" /></a></h6>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-6">
                                <div class="box-index">
                                    <h2>Rider</h2>
                                    <h1>350 +</h1>
                                    <h6><a href="rider.html">View <img src="images/right-icon.png" alt="" /></a></h6>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-6">
                                <div class="box-index">
                                    <h2>User</h2>
                                    <h1>450 +</h1>
                                    <h6><a href="user.html">View <img src="images/right-icon.png" alt="" /></a></h6>
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