import React from 'react'

const ClientSettings = () => {
    return (
        <>
            <div class="mobile-show">
<div id="sidemenu"></div>
</div>
<div class="full-content">
  <div class="row">
    <div class="col-md-4 col-lg-3 mb-4">
      <h4 class="small-title">Country </h4>
      <select class="form-control">
          <option>United States of America</option>
          <option>View All</option>
        </select>
    </div>
  </div>
  <div class="row align-items-center">
    <div class="col-lg-4">
      <h4 class="small-title">Role Management </h4>
    </div>
    <div class="col-lg-8">
      <div class="search-flex">
        <input type="text" name="" placeholder="Search" class="form-control"/>
        <button class="btn btn-primary"><i class="fa fa-search"></i> </button>
        <a href="add-venues.html" class="btn btn-primary add">Add Users</a>
      </div>
    </div>
  </div>
  <div class="card mt-3">
    <div class="table-responsive">
       <table class="table">
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
              <td><a href="#" class="btn btn-outline-primary">Deactivate</a> </td>                       
            </tr>
            <tr>
              <td>John Doe</td>
              <td>johndoe@email.com</td>
              <td>Admin</td>
              <td><a href="#" class="btn btn-outline-primary">Deactivate</a> </td>                       
            </tr>
            <tr>
              <td>John Doe</td>
              <td>johndoe@email.com</td>
              <td>Admin</td>
              <td><a href="#" class="btn btn-outline-primary">Deactivate</a> </td>                       
            </tr>
            <tr>
              <td>John Doe</td>
              <td>johndoe@email.com</td>
              <td>Admin</td>
              <td><a href="#" class="btn btn-outline-primary">Deactivate</a> </td>                       
            </tr>
            <tr>
              <td>John Doe</td>
              <td>johndoe@email.com</td>
              <td>Admin</td>
              <td><a href="#" class="btn btn-outline-primary">Deactivate</a> </td>                       
            </tr>
          </tbody>
        </table>
    </div>
    <nav aria-label="...">
      <ul class="pagination justify-content-center">
        <li class="page-item pre">
          <span class="page-link">&lt;</span>
        </li>
        <li class="page-item"><a class="page-link" href="#">01</a></li>
        <li class="page-item"><a class="page-link" href="#">02</a></li>
        <li class="page-item"><a class="page-link" href="#">03</a></li>
        <li class="page-item"><a class="page-link" href="#">...</a></li>
        <li class="page-item"><a class="page-link" href="#">10</a></li>
        <li class="page-item next">
          <a class="page-link" href="#">&gt;</a>
        </li>
      </ul>
    </nav>
  </div>
  <div class="mb-5 pt-5">
      <div class="row">
        <div class="col-lg-2 col-md-3">
          <h5 class="activities-title d-flex">Surface Types <i class="fa fa-chevron-up text-primary ml-auto"></i> </h5>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-2 col-md-3">
          <div class="activities-card">
            <div class="text">
              <h6>3G</h6>
              <p>30 Hours</p>
            </div>
            <div>
              <button class="delete-btn"> <img src="images/svg/BinV1.svg" alt='BinV1'/></button>
            </div>
          </div>
        </div>
        <div class="col-lg-2 col-md-3">
          <div class="activities-card">
            <div class="text">
              <h6>2G</h6>
              <p>30 Hours</p>
            </div>
            <div>
              <button class="delete-btn"> <img src="images/svg/BinV1.svg"alt='BinV1'/></button>
            </div>
          </div>
        </div>
        <div class="col-lg-2 col-md-3">
          <div class="activities-card">
            <div class="text">
              <h6>Non Filled</h6>
              <p>30 Hours</p>
            </div>
            <div>
              <button class="delete-btn"> <img src="images/svg/BinV1.svg"alt='BinV1'/></button>
            </div>
          </div>
        </div>
        <div class="col-lg-2 col-md-3">
          <button class="maintenance-button" style={{height: "62px"}}><img src="images/svg/plus.svg"alt='BinV1'/> Add More</button>
        </div>
      </div>
  </div>
  <div class="mb-5">
      <div class="row">
        <div class="col-lg-2 col-md-3">
          <h5 class="activities-title d-flex">Surface Types <i class="fa fa-chevron-up text-primary ml-auto"></i> </h5>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-2 col-md-3">
          <div class="activities-card">
            <div class="text">
              <h6>3G</h6>
              <p>30 Hours</p>
            </div>
            <div>
              <button class="delete-btn"> <img src="images/svg/BinV1.svg"alt='BinV1'/></button>
            </div>
          </div>
        </div>
        <div class="col-lg-2 col-md-3">
          <div class="activities-card">
            <div class="text">
              <h6>2G</h6>
              <p>30 Hours</p>
            </div>
            <div>
              <button class="delete-btn"> <img src="images/svg/BinV1.svg"alt='BinV1'/></button>
            </div>
          </div>
        </div>
        <div class="col-lg-2 col-md-3">
          <div class="activities-card">
            <div class="text">
              <h6>Non Filled</h6>
              <p>30 Hours</p>
            </div>
            <div>
              <button class="delete-btn"> <img src="images/svg/BinV1.svg"alt='BinV1'/></button>
            </div>
          </div>
        </div>
        <div class="col-lg-2 col-md-3">
          <button class="maintenance-button" style={{height: "62px"}}><img src="images/svg/plus.svg"alt='BinV1'/> Add More</button>
        </div>
      </div>
  </div>
  <div class="mb-5">
      <div class="row">
        <div class="col-lg-2 col-md-3">
          <h5 class="activities-title d-flex">Surface Types <i class="fa fa-chevron-up text-primary ml-auto"></i> </h5>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-2 col-md-3">
          <div class="activities-card">
            <div class="text">
              <h6>3G</h6>
              <p>30 Hours</p>
            </div>
            <div>
              <button class="delete-btn"> <img src="images/svg/BinV1.svg"alt='BinV1'/></button>
            </div>
          </div>
        </div>
        <div class="col-lg-2 col-md-3">
          <div class="activities-card">
            <div class="text">
              <h6>2G</h6>
              <p>30 Hours</p>
            </div>
            <div>
              <button class="delete-btn"> <img src="images/svg/BinV1.svg"alt='BinV1'/></button>
            </div>
          </div>
        </div>
        <div class="col-lg-2 col-md-3">
          <div class="activities-card">
            <div class="text">
              <h6>Non Filled</h6>
              <p>30 Hours</p>
            </div>
            <div>
              <button class="delete-btn"> <img src="images/svg/BinV1.svg"alt='BinV1'/></button>
            </div>
          </div>
        </div>
        <div class="col-lg-2 col-md-3">
          <button class="maintenance-button" style={{height: "62px"}}><img src="images/svg/plus.svg"alt='BinV1'/> Add More</button>
        </div>
      </div>
  </div>
  <div class="mb-5">
      <div class="row">
        <div class="col-lg-2 col-md-3">
          <h5 class="activities-title d-flex">Surface Types <i class="fa fa-chevron-up text-primary ml-auto"></i> </h5>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-2 col-md-3">
          <div class="activities-card">
            <div class="text">
              <h6>Non Filled</h6>
              <p>30 Hours</p>
            </div>
            <div>
              <button class="delete-btn"> <img src="images/svg/BinV1.svg"alt='BinV1'/></button>
            </div>
          </div>
        </div>
        <div class="col-lg-2 col-md-3">
          <button class="maintenance-button" style={{height: "62px"}}><img src="images/svg/plus.svg"alt='BinV1'/> Add More</button>
        </div>
      </div>
  </div>
  <div class="mb-5">
    <h4 class="small-title">Push Notification </h4>
    <div class="toggle" style={{width: "300px"}}>
        <input type="checkbox" name="" defaultChecked="true"/>
        <div class="tbox"><span></span> </div>
        <div class="txt">Push Notification &nbsp; <span> OFF</span><span> ON</span></div>
      </div>
  </div>
  <div class="mb-5">
    <h5 class="activities-title">Blogs &nbsp;&nbsp;<i class="fa fa-chevron-up text-primary ml-auto"></i> </h5>
    <div class="row">
      <div class="col-lg-3 col-md-4">
        <div class="card">
          <div class="card-body">
              <label>Blog 01</label>
            <div class="form-group">
              <input type="text" class="form-control" id="" placeholder="Blog Heading"/>
            </div>
            <div class="form-group">
              <textarea class="form-control" id="" placeholder="Blog Paragraph" rows="4"></textarea>
            </div>
            <div class="form-group">
              <div class="blog-image">
                <button class="delete-btn"><img class="icon" src="images/svg/delete.svg"alt='BinV1'/></button>
                <img class="mimg" src="images/Image.png"alt='BinV1'/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-3 col-md-4">
        <button class="maintenance-button h-100 mt-3 mt-lg-0 mt-md-0" ><img src="images/svg/plus.svg" alt='BinV1'/> Add More</button>
      </div>
    </div>
  </div>
  <div class="mb-5">
    <h5 class="activities-title">Turf FAQs &nbsp;&nbsp;<i class="fa fa-chevron-up text-primary ml-auto"></i> </h5>
    <div class="row">
      <div class="col-md-6 mb-3">
        <div class="card">
          <div class="card-body">
            <div class="d-flex">
              <h5 class="activities-title">How does this app work?</h5>
              <div class="ml-auto">
                 <button class="delete-btn2"> <img class="hw22" src="images/svg/edit-fill.svg"alt='BinV1'/></button>
                  <button class="delete-btn2"> <img class="hw22" src="images/svg/BinV1.svg"alt='BinV1'/></button>
              </div>
            </div>
            <p class="font-size-13">Duis pretium gravida enim, vel rnaximus ligula fermentum a. Sed rhoncus eget ex id egestas. Nam nec nisl placerat, tempus erat a, condimentum metus. Curabitur nulla nisi, lacinia at !Mourns at, suscipit at nibh. Proin gun lectus finibus purus vitae, rutrum neque. Pellentesque habitant morbi tristique senecrus et netus et malesuada fames ac turpis egestas. Etiarn sed cursus metus, vel viverra mi. Mauris aliquet egestas eros ac placerat. Proin condimentum ligula at diam euismod fringilla et quis lacus. Pellentesque habitant mold, tristique senectus et netus et males.. fames ac turpis egestas. Etiarn sed cursus metus, vel viverra mi. Mauris aliquet egestas eros ac placerat.</p>
          </div>
        </div>
      </div>
      <div class="col-md-6 mb-3">
        <button class="maintenance-button h-100" ><img src="images/svg/plus.svg"alt='BinV1'/> Add More</button>
      </div>
    </div>
  </div>
  <div class="mb-5">
    <h5 class="activities-title">System FAQs &nbsp;&nbsp;<i class="fa fa-chevron-up text-primary ml-auto"></i> </h5>
    <div class="row">
      <div class="col-md-6 mb-3">
        <div class="card">
          <div class="card-body">
            <div class="d-flex">
              <h5 class="activities-title">How does this app work?</h5>
              <div class="ml-auto">
                 <button class="delete-btn2"> <img class="hw22" src="images/svg/edit-fill.svg"alt='BinV1'/></button>
                  <button class="delete-btn2"> <img class="hw22" src="images/svg/BinV1.svg"alt='BinV1'/></button>
              </div>
            </div>
            <p class="font-size-13">Duis pretium gravida enim, vel rnaximus ligula fermentum a. Sed rhoncus eget ex id egestas. Nam nec nisl placerat, tempus erat a, condimentum metus. Curabitur nulla nisi, lacinia at !Mourns at, suscipit at nibh. Proin gun lectus finibus purus vitae, rutrum neque. Pellentesque habitant morbi tristique senecrus et netus et malesuada fames ac turpis egestas. Etiarn sed cursus metus, vel viverra mi. Mauris aliquet egestas eros ac placerat. Proin condimentum ligula at diam euismod fringilla et quis lacus. Pellentesque habitant mold, tristique senectus et netus et males.. fames ac turpis egestas. Etiarn sed cursus metus, vel viverra mi. Mauris aliquet egestas eros ac placerat.</p>
          </div>
        </div>
      </div>
      <div class="col-md-6 mb-3">
        <button class="maintenance-button h-100" ><img src="images/svg/plus.svg"alt='BinV1'/> Add More</button>
      </div>
    </div>
  </div>
  <div class="mb-5">
    <h5 class="activities-title">CMS &nbsp;&nbsp;<i class="fa fa-chevron-up text-primary ml-auto"></i> </h5>
    <div class="row">
      <div class="col-md-6 mb-3">
        <div class="card">
          <div class="card-body">
            <div class="d-flex">
              <h5 class="activities-title">How does this app work?</h5>
              <div class="ml-auto">
                 <button class="delete-btn2"> <img class="hw22" src="images/svg/edit-fill.svg"alt='BinV1'/></button>
                  <button class="delete-btn2"> <img class="hw22" src="images/svg/BinV1.svg"alt='BinV1'/></button>
              </div>
            </div>
            <p class="font-size-13">Duis pretium gravida enim, vel rnaximus ligula fermentum a. Sed rhoncus eget ex id egestas. Nam nec nisl placerat, tempus erat a, condimentum metus. Curabitur nulla nisi, lacinia at !Mourns at, suscipit at nibh. Proin gun lectus finibus purus vitae, rutrum neque. Pellentesque habitant morbi tristique senecrus et netus et malesuada fames ac turpis egestas. Etiarn sed cursus metus, vel viverra mi. Mauris aliquet egestas eros ac placerat. Proin condimentum ligula at diam euismod fringilla et quis lacus. Pellentesque habitant mold, tristique senectus et netus et males.. fames ac turpis egestas. Etiarn sed cursus metus, vel viverra mi. Mauris aliquet egestas eros ac placerat.</p>
          </div>
        </div>
      </div>
      <div class="col-md-6 mb-3">
        <div class="card">
          <div class="card-body">
            <div class="d-flex">
              <h5 class="activities-title">How does this app work?</h5>
              <div class="ml-auto">
                 <button class="delete-btn2"> <img class="hw22" src="images/svg/edit-fill.svg"alt='BinV1'/></button>
                  <button class="delete-btn2"> <img class="hw22" src="images/svg/BinV1.svg"alt='BinV1'/></button>
              </div>
            </div>
            <p class="font-size-13">Duis pretium gravida enim, vel rnaximus ligula fermentum a. Sed rhoncus eget ex id egestas. Nam nec nisl placerat, tempus erat a, condimentum metus. Curabitur nulla nisi, lacinia at !Mourns at, suscipit at nibh. Proin gun lectus finibus purus vitae, rutrum neque. Pellentesque habitant morbi tristique senecrus et netus et malesuada fames ac turpis egestas. Etiarn sed cursus metus, vel viverra mi. Mauris aliquet egestas eros ac placerat. Proin condimentum ligula at diam euismod fringilla et quis lacus. Pellentesque habitant mold, tristique senectus et netus et males.. fames ac turpis egestas. Etiarn sed cursus metus, vel viverra mi. Mauris aliquet egestas eros ac placerat.</p>
          </div>
        </div>
      </div>
      <div class="col-md-6 mb-3">
        <div class="card">
          <div class="card-body">
            <div class="d-flex">
              <h5 class="activities-title">How does this app work?</h5>
              <div class="ml-auto">
                 <button class="delete-btn2"> <img class="hw22" src="images/svg/edit-fill.svg"alt='BinV1'/></button>
                  <button class="delete-btn2"> <img class="hw22" src="images/svg/BinV1.svg"alt='BinV1'/></button>
              </div>
            </div>
            <p class="font-size-13">Duis pretium gravida enim, vel rnaximus ligula fermentum a. Sed rhoncus eget ex id egestas. Nam nec nisl placerat, tempus erat a, condimentum metus. Curabitur nulla nisi, lacinia at !Mourns at, suscipit at nibh. Proin gun lectus finibus purus vitae, rutrum neque. Pellentesque habitant morbi tristique senecrus et netus et malesuada fames ac turpis egestas. Etiarn sed cursus metus, vel viverra mi. Mauris aliquet egestas eros ac placerat. Proin condimentum ligula at diam euismod fringilla et quis lacus. Pellentesque habitant mold, tristique senectus et netus et males.. fames ac turpis egestas. Etiarn sed cursus metus, vel viverra mi. Mauris aliquet egestas eros ac placerat.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="mb-5">
    <h5 class="activities-title">Glossary &nbsp;&nbsp;<i class="fa fa-chevron-up text-primary ml-auto"></i> </h5>
    <div class="row">
      <div class="col-md-6 mb-3">
        <div class="activities-card">
            <div class="text">
            <h6>Physical Quality</h6>
            <p>Category </p>
          </div>
          <div>
            <button class="delete-btn"> <img src="images/svg/edit-fill.svg"alt='BinV1'/></button>
            <button class="delete-btn"> <img src="images/svg/BinV1.svg"alt='BinV1'/></button>
          </div>
        </div>
        <div class="activities-card">
            <div class="text">
            <h6>Hardness</h6>
            <p>Duffs pretium gravida enim, vel maximus ligula fermentum...  </p>
          </div>
        </div>
        <button class="maintenance-button" style={{height: "60px"}}><img src="images/svg/plus.svg"alt='BinV1'/> Add More</button>
      </div>
   
    </div>
  </div>
</div>

{/* <!-- Modal --> */}
<div class="modal fade delete-modal" id="delete-modal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document" style={{maxWidth: "450px"}}>
    <div class="modal-content">
      <div class="modal-body">
        <h5>Before you proceed!</h5>
        <p>Are you sure you want to delete this venue?</p>
        <div class="bottom">
          <button type="button" class="btn btn-primary">Yes</button>
          <button type="button" class="btn btn-outline-primary" data-dismiss="modal">No</button>
        </div>
      </div>
    </div>
  </div>
</div>

        </>
    )
}

export default ClientSettings
