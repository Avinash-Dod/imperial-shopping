const AdminLogin=()=>{
    return(
        <>
        <div class="container">
      <div class="row">
          <div class="col-lg-3 col-md-2"></div>
          <div class="col-lg-6 col-md-8 login-box">             
              <div class="col-lg-12 login-title">
                  IMPERIAL ADMIN PANEL
              </div>
              <div class="col-lg-12 login-form">
                  <div class="col-lg-12 login-form">
                      <form>
                          <div class="form-group">
                              <label class="form-control-label">USERNAME</label>
                              <input type="text" class="form-control" />
                          </div>
                          <div class="form-group">
                              <label class="form-control-label">PASSWORD</label>
                              <input type="password" class="form-control" />
                          </div>
                          <div class="col-lg-12 loginbttm">
                            <button type="submit" class="btn-long">LOGIN</button>
                          </div>
                      </form>
                  </div>
              </div>
              <div class="col-lg-3 col-md-2"></div>
          </div>
      </div>
  </div>

        </>
    )

}
export default AdminLogin