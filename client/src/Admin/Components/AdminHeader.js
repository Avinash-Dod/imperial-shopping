const AdminHeader = () => {
    return (
        <header>
            <div class="container-fluid">
                <nav class="navbar navbar-expand-md navbar-dark">
                <a className="navbar-brand" href="index.html"><h2><i className="fa fa-shopping-bag" aria-hidden="true"></i> Imperial <em>Shopping</em></h2></a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarCollapse">
                        <ul class="navbar-nav ml-auto">
                            <li class="nav-item dropdown">
                                <a class="nav-link profile-droup dropdown-toggle" href=" " id="navbarDropdownMenuLink" data-toggle="dropdown" aria-expanded="false">
                                    <img src="images/marvin-kinney-profile.png" alt=" " />
                                    <span>
                                       Admin Name
                                        <p>adminemail@gmail.com</p>
                                    </span>
                                    <img src="images/drop-down.png" class="right-doun" alt=" " />
                                </a>
                                <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <a class="dropdown-item" href="profile.html">
                                        Your Profile
                                    </a>
                                    <a class="dropdown-item" href=" ">
                                        Logout
                                    </a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>

        </header>

    )
}
export default AdminHeader