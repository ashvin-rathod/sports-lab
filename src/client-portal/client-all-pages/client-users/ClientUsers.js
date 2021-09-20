import React from 'react'
import { Link } from 'react-router-dom'

const ClientUsers = () => {
    return (
        <>
            <div id="sidemenu"></div>
<div className="lrm-content">
  <div className="row align-items-center">
    <div className="col-lg-4">
      <h4 className="small-title">Users
      </h4>
    </div>
    <div className="col-lg-8">
      <div className="search-flex">
        
        <input type="text" name="" placeholder="Search" className="form-control"/>
        <button className="btn btn-primary"><i className="fa fa-search"></i> </button>
        
        <Link to="/clientaddusers" className="btn btn-primary add">Add Users</Link>
        <select className="form-control">
          <option>View All.</option>
          <option>View All.</option>
          <option>View All.</option>
        </select>
      </div>
    </div>
  </div>
  <div className="card mt-3">
    <div className="table-responsive">
       <table className="table">
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col">Full Name</th>
              <th scope="col">Address</th>
              <th scope="col">Assigned venue</th>
              <th scope="col">Email</th>
              <th scope="col">Status</th>
              <th scope="col" style={{minWidth: '150px'}}>Actions</th>       
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><img src="images/users.png" alt='users'/></td>
              <td>Charles Grand</td>
              <td>4549 Alean Rd, Boones Mill, VA, 24065</td>
              <td>Abu Dhabi Cricket #3</td>
              <td>cgrand@email.com</td>
              <td><span className="badge badge-lightgreen">Active</span> </td>
              <td>
                <a href="#" className="action-btn"> <img src="images/svg/View.svg" alt='users' /></a>
                <a href="#" className="action-btn"> <img src="images/svg/edit-fill.svg" alt='users' /></a>
                <a href="#" className="action-btn" data-toggle="modal" data-target="#delete-modal"> <img src="images/svg/BinV1.svg" alt='users' /></a>
              </td>            
            </tr>
            <tr>
              <td><img src="images/users.png" alt='users' /></td>
              <td>Charles Grand</td>
              <td>4549 Alean Rd, Boones Mill, VA, 24065</td>
              <td>Abu Dhabi Cricket #3</td>
              <td>cgrand@email.com</td>
              <td><span className="badge badge-lightgreen">Active</span> </td>
              <td>
                <a href="#" className="action-btn"> <img src="images/svg/View.svg" alt='users' /></a>
                <a href="#" className="action-btn"> <img src="images/svg/edit-fill.svg" alt='users' /></a>
                <a href="#" className="action-btn" data-toggle="modal" data-target="#delete-modal"> <img src="images/svg/BinV1.svg" alt='users' /></a>
              </td>            
            </tr>
           <tr>
              <td><img src="images/users.png" alt='users' /></td>
              <td>Charles Grand</td>
              <td>4549 Alean Rd, Boones Mill, VA, 24065</td>
              <td>Abu Dhabi Cricket #3</td>
              <td>cgrand@email.com</td>
              <td><span className="badge badge-orange">In-Active</span> </td>
              <td>
                <a href="#" className="action-btn"> <img src="images/svg/View.svg" alt='users' /></a>
                <a href="#" className="action-btn"> <img src="images/svg/edit-fill.svg" alt='users' /></a>
                <a href="#" className="action-btn" data-toggle="modal" data-target="#delete-modal"> <img src="images/svg/BinV1.svg" alt='users' /></a>
              </td>            
            </tr>
            <tr>
              <td><img src="images/users.png" alt='users' /></td>
              <td>Charles Grand</td>
              <td>4549 Alean Rd, Boones Mill, VA, 24065</td>
              <td>Abu Dhabi Cricket #3</td>
              <td>cgrand@email.com</td>
              <td><span className="badge badge-lightgreen">Active</span> </td>
              <td>
                <a href="#" className="action-btn"> <img src="images/svg/View.svg" alt='users' /></a>
                <a href="#" className="action-btn"> <img src="images/svg/edit-fill.svg" alt='users' /></a>
                <a href="#" className="action-btn" data-toggle="modal" data-target="#delete-modal"> <img src="images/svg/BinV1.svg" alt='users' /></a>
              </td>            
            </tr>
           <tr>
              <td><img src="images/users.png" alt='users' /></td>
              <td>Charles Grand</td>
              <td>4549 Alean Rd, Boones Mill, VA, 24065</td>
              <td>Abu Dhabi Cricket #3</td>
              <td>cgrand@email.com</td>
              <td><span className="badge badge-lightgreen">Active</span> </td>
              <td>
                <a href="#" className="action-btn"> <img src="images/svg/View.svg" alt='users' /></a>
                <a href="#" className="action-btn"> <img src="images/svg/edit-fill.svg" alt='users' /></a>
                <a href="#" className="action-btn" data-toggle="modal" data-target="#delete-modal"> <img src="images/svg/BinV1.svg" alt='users' /></a>
              </td>            
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

export default ClientUsers
