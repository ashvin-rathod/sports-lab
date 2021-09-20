import React from 'react'

const ClientCreateAccount = () => {
    return (
      <>
      <div className="full-content">
  <div className="row justify-content-center">
    <div className="col-lg-8 col-md-10">
      <div className="card">
        <div className="card-body">
          <div className="logo-create">
            <img src="images/logo.svg" alt='logo' />
          </div>
          <form action="">
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <input type="text" className="form-control" id="" placeholder="First Name" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <input type="text" className="form-control" id="" placeholder="Last Name"/>
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-group">
                  <input type="text" className="form-control" id="" placeholder="Address"/>
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-group">
                  <select className="form-control">
                    <option>Country</option>
                  </select>
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-group">
                  <select className="form-control">
                    <option>State</option>
                  </select>
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-group">
                  <select className="form-control">
                    <option>City</option>
                  </select>
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-group">
                  <input type="text" className="form-control" id="" placeholder="Phone"/>
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-group">
                  <input type="text" className="form-control" id="" placeholder="Email"/>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <input type="password" className="form-control" id="" placeholder="Password"/>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <input type="password" className="form-control" id="" placeholder="Confirm Password"/>
                </div>
              </div>
              <div className="col-md-12 pt-2">
                <h4 className="small-title">Upload Profile Picture</h4>
                <div className="form-group">
                  <div className="upload-file-input">
                    <label>Choose file</label>
                    <input id="uploadFile" value="No file chosen!" className=""/>
                    <div className="fileUpload btn btn-primary">
                        <span>Upload</span>
                        <input id="uploadBtn" type="file" className="upload" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-12 mt-3 text-center">
                <div className="form-group">
                  <button type="button" className="btn btn-primary btn-width" data-toggle="modal" data-target="#exampleModal">
                   Sign Up
                  </button>
                </div>
              </div>

            </div>
            
          </form>
        </div>
      </div>
    </div>
  </div>  
</div>

<div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content">
       <div className="modal-body">
        <div className="sa-modal-center1">
          <h5 className="modal-success mt-3 mb-2">Success!</h5>
          <p>We'll notify you via email if your account<br/>has been approved.</p>
          <button className=" btn btn-primary btn-width mt-4 mb-2" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
</div>
      </>
    )
}

export default ClientCreateAccount
