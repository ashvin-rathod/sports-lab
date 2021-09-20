import React from 'react'

const AdminSettings = () => {
    return (
        <>
            <div className="full-content">
  <div className="row">
    <div className="col-md-4 col-lg-3 mb-4">
      <h4 className="small-title">Country </h4>
      <select className="form-control">
          <option>United States of America</option>
          <option>View All</option>
        </select>
    </div>
  </div>
  <div className="row align-items-center">
    <div className="col-lg-4">
      <h4 className="small-title">Role Management </h4>
    </div>
    <div className="col-lg-8">
      <div className="search-flex">
        <input type="text" name="" placeholder="Search" className="form-control"/>
        <button className="btn btn-primary"><i className="fa fa-search"></i> </button>
        <a href="add-venues.html" className="btn btn-primary add">Add Users</a>
      </div>
    </div>
  </div>
  <div className="card mt-3">
    <div className="table-responsive">
       <table className="table">
          <thead>
            <tr>
              <th scope="col">Users</th>
              <th scope="col">Email</th>
              <th scope="col">Role</th>
              <th scope="col">Action</th>       
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>John Doe</td>
              <td>johndoe@email.com</td>
              <td>Admin</td>
              <td><a href="#" className="btn btn-outline-primary">Deactivate</a> </td>                       
            </tr>
            <tr>
              <td>John Doe</td>
              <td>johndoe@email.com</td>
              <td>Admin</td>
              <td><a href="#" className="btn btn-outline-primary">Deactivate</a> </td>                       
            </tr>
            <tr>
              <td>John Doe</td>
              <td>johndoe@email.com</td>
              <td>Admin</td>
              <td><a href="#" className="btn btn-outline-primary">Deactivate</a> </td>                       
            </tr>
            <tr>
              <td>John Doe</td>
              <td>johndoe@email.com</td>
              <td>Admin</td>
              <td><a href="#" className="btn btn-outline-primary">Deactivate</a> </td>                       
            </tr>
            <tr>
              <td>John Doe</td>
              <td>johndoe@email.com</td>
              <td>Admin</td>
              <td><a href="#" className="btn btn-outline-primary">Deactivate</a> </td>                       
            </tr>
          </tbody>
        </table>
    </div>
    <nav aria-label="...">
      <ul className="pagination justify-content-center">
        <li className="page-item pre">
          <span className="page-link">&lt;</span>
        </li>
        <li className="page-item"><a className="page-link" href="#">01</a></li>
        <li className="page-item"><a className="page-link" href="#">02</a></li>
        <li className="page-item"><a className="page-link" href="#">03</a></li>
        <li className="page-item"><a className="page-link" href="#">...</a></li>
        <li className="page-item"><a className="page-link" href="#">10</a></li>
        <li className="page-item next">
          <a className="page-link" href="#">&gt;</a>
        </li>
      </ul>
    </nav>
  </div>
  <div className="mb-5 pt-5">
      <div className="row">
        <div className="col-lg-2 col-md-3">
          <h5 className="activities-title d-flex">Surface Types <i className="fa fa-chevron-up text-primary ml-auto"></i> </h5>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-2 col-md-3">
          <div className="activities-card">
            <div className="text">
              <h6>3G</h6>
              <p>30 Hours</p>
            </div>
            <div>
              <button className="delete-btn"> <img src="images/svg/BinV1.svg" alt='bin' /></button>
            </div>
          </div>
        </div>
        <div className="col-lg-2 col-md-3">
          <div className="activities-card">
            <div className="text">
              <h6>2G</h6>
              <p>20 Hours</p>
            </div>
            <div>
              <button className="delete-btn"> <img src="images/svg/BinV1.svg" alt='bin' /></button>
            </div>
          </div>
        </div>
        <div className="col-lg-2 col-md-3">
          <div className="activities-card">
            <div className="text">
              <h6>Non Filled</h6>
              <p>30 Hours</p>
            </div>
            <div>
              <button className="delete-btn"> <img src="images/svg/BinV1.svg" alt='bin' /></button>
            </div>
          </div>
        </div>
        <div className="col-lg-2 col-md-3">
          <button className="maintenance-button" style={{height: '62px'}}><img src="images/svg/plus.svg" alt='plus' /> Add More</button>
        </div>
      </div>
  </div>
  <div className="mb-5">
      <div className="row">
        <div className="col-lg-2 col-md-3">
          <h5 className="activities-title d-flex">Client User Types <i className="fa fa-chevron-up text-primary ml-auto"></i> </h5>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-2 col-md-3">
          <div className="activities-card">
            <div className="text">
              <h6>School</h6>
              <p>Any School</p>
            </div>
            <div>
              <button className="delete-btn"> <img src="images/svg/BinV1.svg" alt='bin' /></button>
            </div>
          </div>
        </div>
        <div className="col-lg-2 col-md-3">
          <div className="activities-card">
            <div className="text">
              <h6>Club</h6>
              <p>Any Club</p>
            </div>
            <div>
              <button className="delete-btn"> <img src="images/svg/BinV1.svg" alt='bin' /></button>
            </div>
          </div>
        </div>
        <div className="col-lg-2 col-md-3">
          <div className="activities-card">
            <div className="text">
              <h6>University </h6>
              <p>University of Florida</p>
            </div>
            <div>
              <button className="delete-btn"> <img src="images/svg/BinV1.svg" alt='bin' /></button>
            </div>
          </div>
        </div>
        <div className="col-lg-2 col-md-3">
          <button className="maintenance-button" style={{height: '62px'}}><img src="images/svg/plus.svg" alt='plus' /> Add More</button>
        </div>
      </div>
  </div>
  <div className="mb-5">
      <div className="row">
        <div className="col-lg-2 col-md-3">
          <h5 className="activities-title d-flex">User Types <i className="fa fa-chevron-up text-primary ml-auto"></i> </h5>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-2 col-md-3">
          <div className="activities-card">
            <div className="text">
              <h6>Contractor</h6>
              <p>User type</p>
            </div>
            <div>
              <button className="delete-btn"> <img src="images/svg/BinV1.svg" alt='bin' /></button>
            </div>
          </div>
        </div>
        <div className="col-lg-2 col-md-3">
          <div className="activities-card">
            <div className="text">
              <h6>Client</h6>
              <p>User type</p>
            </div>
            <div>
              <button className="delete-btn"> <img src="images/svg/BinV1.svg" alt='bin' /></button>
            </div>
          </div>
        </div>
        <div className="col-lg-2 col-md-3">
          <div className="activities-card">
            <div className="text">
              <h6>Sub Client</h6>
              <p>User type</p>
            </div>
            <div>
              <button className="delete-btn"> <img src="images/svg/BinV1.svg" alt='bin' /></button>
            </div>
          </div>
        </div>
        <div className="col-lg-2 col-md-3">
          <button className="maintenance-button" style={{height: '62px'}}><img src="images/svg/plus.svg" alt='plus' /> Add More</button>
        </div>
      </div>
  </div>
  <div className="mb-5">
      <div className="row">
        <div className="col-lg-2 col-md-3">
          <h5 className="activities-title d-flex">Construction Types  <i className="fa fa-chevron-up text-primary ml-auto"></i> </h5>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-2 col-md-3">
          <div className="activities-card">
            <div className="text">
              <h6>Gmax</h6>
              <p>Construction type</p>
            </div>
            <div>
              <button className="delete-btn"> <img src="images/svg/BinV1.svg" alt='bin' /></button>
            </div>
          </div>
        </div>
        
        <div className="col-lg-2 col-md-3">
          <button className="maintenance-button" style={{height: '62px'}}><img src="images/svg/plus.svg" alt='plus' />Add More</button>
        </div>
      </div>
  </div>
  <div className="mb-5">
    <h4 className="small-title">Push Notification </h4>
    <div className="toggle" style={{width: '300px'}}>
        <input type="checkbox" name="" checked=""/>
        <div className="tbox"><span></span> </div>
        <div className="txt">Push Notification are&nbsp; <span> OFF</span><span> ON</span></div>
      </div>
  </div>
  <div className="mb-5">
    <h5 className="activities-title">Blogs &nbsp;&nbsp;<i className="fa fa-chevron-up text-primary ml-auto"></i> </h5>
    <div className="row">
      <div className="col-lg-3 col-md-4">
        <div className="card">
          <div className="card-body">
              <label>Blog 01</label>
            <div className="form-group">
              <input type="text" className="form-control" id="" placeholder="Blog Heading"/>
            </div>
            <div className="form-group">
              <textarea className="form-control" id="" placeholder="Blog Paragraph" rows="4"></textarea>
            </div>
            <div className="form-group">
              <div className="blog-image">
                <button className="delete-btn"><img className="icon" src="images/svg/delete.svg" alt='bin' /></button>
                <img className="mimg" src="images/Image.png" alt='image' />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-4">
        <button className="maintenance-button h-100 mt-3 mt-lg-0 mt-md-0" ><img src="images/svg/plus.svg" alt='plus' /> Add More</button>
      </div>
    </div>
  </div>
  <div className="mb-5">
    <h5 className="activities-title">Turf FAQs &nbsp;&nbsp;<i className="fa fa-chevron-up text-primary ml-auto"></i> </h5>
    <div className="row">
      <div className="col-md-6 mb-3">
        <div className="card">
          <div className="card-body">
            <div className="d-flex">
              <h5 className="activities-title">How does this app work?</h5>
              <div className="ml-auto">
                 <button className="delete-btn2"> <img className="hw22" src="images/svg/edit-fill.svg" alt='edit' /></button>
                  <button className="delete-btn2"> <img className="hw22" src="images/svg/BinV1.svg" alt='bin' /></button>
              </div>
            </div>
            <p className="font-size-13">Duis pretium gravida enim, vel rnaximus ligula fermentum a. Sed rhoncus eget ex id egestas. Nam nec nisl placerat, tempus erat a, condimentum metus. Curabitur nulla nisi, lacinia at !Mourns at, suscipit at nibh. Proin gun lectus finibus purus vitae, rutrum neque. Pellentesque habitant morbi tristique senecrus et netus et malesuada fames ac turpis egestas. Etiarn sed cursus metus, vel viverra mi. Mauris aliquet egestas eros ac placerat. Proin condimentum ligula at diam euismod fringilla et quis lacus. Pellentesque habitant mold, tristique senectus et netus et males.. fames ac turpis egestas. Etiarn sed cursus metus, vel viverra mi. Mauris aliquet egestas eros ac placerat.</p>
          </div>
        </div>
      </div>
      <div className="col-md-6 mb-3">
        <button className="maintenance-button h-100" ><img src="images/svg/plus.svg" alt='plus' /> Add More</button>
      </div>
    </div>
  </div>
  <div className="mb-5">
    <h5 className="activities-title">System FAQs &nbsp;&nbsp;<i className="fa fa-chevron-up text-primary ml-auto"></i> </h5>
    <div className="row">
      <div className="col-md-6 mb-3">
        <div className="card">
          <div className="card-body">
            <div className="d-flex">
              <h5 className="activities-title">How does this app work?</h5>
              <div className="ml-auto">
                 <button className="delete-btn2"> <img className="hw22" src="images/svg/edit-fill.svg" alt='edit' /></button>
                  <button className="delete-btn2"> <img className="hw22" src="images/svg/BinV1.svg" alt='bin' /></button>
              </div>
            </div>
            <p className="font-size-13">Duis pretium gravida enim, vel rnaximus ligula fermentum a. Sed rhoncus eget ex id egestas. Nam nec nisl placerat, tempus erat a, condimentum metus. Curabitur nulla nisi, lacinia at !Mourns at, suscipit at nibh. Proin gun lectus finibus purus vitae, rutrum neque. Pellentesque habitant morbi tristique senecrus et netus et malesuada fames ac turpis egestas. Etiarn sed cursus metus, vel viverra mi. Mauris aliquet egestas eros ac placerat. Proin condimentum ligula at diam euismod fringilla et quis lacus. Pellentesque habitant mold, tristique senectus et netus et males.. fames ac turpis egestas. Etiarn sed cursus metus, vel viverra mi. Mauris aliquet egestas eros ac placerat.</p>
          </div>
        </div>
      </div>
      <div className="col-md-6 mb-3">
        <button className="maintenance-button h-100" ><img src="images/svg/plus.svg" alt='plus' /> Add More</button>
      </div>
    </div>
  </div>
  <div className="mb-5">
    <h5 className="activities-title">CMS &nbsp;&nbsp;<i className="fa fa-chevron-up text-primary ml-auto"></i> </h5>
    <div className="row">
      <div className="col-md-6 mb-3">
        <div className="card">
          <div className="card-body">
            <div className="d-flex">
              <h5 className="activities-title">About us</h5>
              <div className="ml-auto">
                 <button className="delete-btn2"> <img className="hw22" src="images/svg/edit-fill.svg" alt='edit' /></button>
                  <button className="delete-btn2"> <img className="hw22" src="images/svg/BinV1.svg" alt='bin' /></button>
              </div>
            </div>
            <p className="font-size-13">Duis pretium gravida enim, vel rnaximus ligula fermentum a. Sed rhoncus eget ex id egestas. Nam nec nisl placerat, tempus erat a, condimentum metus. Curabitur nulla nisi, lacinia at !Mourns at, suscipit at nibh. Proin gun lectus finibus purus vitae, rutrum neque. Pellentesque habitant morbi tristique senecrus et netus et malesuada fames ac turpis egestas. Etiarn sed cursus metus, vel viverra mi. Mauris aliquet egestas eros ac placerat. Proin condimentum ligula at diam euismod fringilla et quis lacus. Pellentesque habitant mold, tristique senectus et netus et males.. fames ac turpis egestas. Etiarn sed cursus metus, vel viverra mi. Mauris aliquet egestas eros ac placerat.</p>
          </div>
        </div>
      </div>
      <div className="col-md-6 mb-3">
        <div className="card">
          <div className="card-body">
            <div className="d-flex">
              <h5 className="activities-title">Privacy Policy</h5>
              <div className="ml-auto">
                 <button className="delete-btn2"> <img className="hw22" src="images/svg/edit-fill.svg" alt='edit' /></button>
                  <button className="delete-btn2"> <img className="hw22" src="images/svg/BinV1.svg" alt='bin' /></button>
              </div>
            </div>
            <p className="font-size-13">Duis pretium gravida enim, vel rnaximus ligula fermentum a. Sed rhoncus eget ex id egestas. Nam nec nisl placerat, tempus erat a, condimentum metus. Curabitur nulla nisi, lacinia at !Mourns at, suscipit at nibh. Proin gun lectus finibus purus vitae, rutrum neque. Pellentesque habitant morbi tristique senecrus et netus et malesuada fames ac turpis egestas. Etiarn sed cursus metus, vel viverra mi. Mauris aliquet egestas eros ac placerat. Proin condimentum ligula at diam euismod fringilla et quis lacus. Pellentesque habitant mold, tristique senectus et netus et males.. fames ac turpis egestas. Etiarn sed cursus metus, vel viverra mi. Mauris aliquet egestas eros ac placerat.</p>
          </div>
        </div>
      </div>
      <div className="col-md-6 mb-3">
        <div className="card">
          <div className="card-body">
            <div className="d-flex">
              <h5 className="activities-title">Term and conditions</h5>
              <div className="ml-auto">
                 <button className="delete-btn2"> <img className="hw22" src="images/svg/edit-fill.svg" alt='edit' /></button>
                  <button className="delete-btn2"> <img className="hw22" src="images/svg/BinV1.svg" alt='bin' /></button>
              </div>
            </div>
            <p className="font-size-13">Duis pretium gravida enim, vel rnaximus ligula fermentum a. Sed rhoncus eget ex id egestas. Nam nec nisl placerat, tempus erat a, condimentum metus. Curabitur nulla nisi, lacinia at !Mourns at, suscipit at nibh. Proin gun lectus finibus purus vitae, rutrum neque. Pellentesque habitant morbi tristique senecrus et netus et malesuada fames ac turpis egestas. Etiarn sed cursus metus, vel viverra mi. Mauris aliquet egestas eros ac placerat. Proin condimentum ligula at diam euismod fringilla et quis lacus. Pellentesque habitant mold, tristique senectus et netus et males.. fames ac turpis egestas. Etiarn sed cursus metus, vel viverra mi. Mauris aliquet egestas eros ac placerat.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="mb-5">
    <h5 className="activities-title">Glossary &nbsp;&nbsp;<i className="fa fa-chevron-up text-primary ml-auto"></i> </h5>
    <div className="row">
      <div className="col-md-6 mb-3">
        <div className="activities-card">
            <div className="text">
            <h6>Physical Quality</h6>
            <p>Category </p>
          </div>
          <div>
            <button className="delete-btn"> <img src="images/svg/edit-fill.svg" alt='edit' /></button>
            <button className="delete-btn"> <img src="images/svg/BinV1.svg" alt='bin' /></button>
          </div>
        </div>
        <div className="activities-card">
            <div className="text">
            <h6>Hardness</h6>
            <p>Duis pretium gravida enim, vel maximus ligula fermentum...  </p>
          </div>
        </div>
        <button className="maintenance-button" style={{height: '60px'}}><img src="images/svg/plus.svg" alt='plus' /> Add More</button>
      </div>
   
    </div>
  </div>
</div>

{/* <!-- Modal --> */}
<div className="modal fade delete-modal" id="delete-modal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered" role="document" style={{maxWidth: '450px'}}>
    <div className="modal-content">
      <div className="modal-body">
        <h5>Before you proceed!</h5>
        <p>Are you sure you want to delete this venue?</p>
        <div className="bottom">
          <button type="button" className="btn btn-primary">Yes</button>
          <button type="button" className="btn btn-outline-primary" data-dismiss="modal">No</button>
        </div>
      </div>
    </div>
  </div>
</div>
        </>
    )
}

export default AdminSettings
