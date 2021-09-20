import React from 'react'
import { Link } from 'react-router-dom'
import './adminUser.css'
const AdminUsers = () => {
    return (
        <>
            <div className="lrm-content" style={{paddingTop:'70px'}}>
                <div className="row align-items-center">
                    <div className="col-lg-1">
                        <h4 className="small-title">Users
                        </h4>
                    </div>
                    <div className="col-lg-11">
                        <div className="search-flex">

                            <input type="text" name="" placeholder="Search" className="form-control" />
                            <button className="btn btn-primary"><i className="fa fa-search"></i> </button>
                            <button className="btn import-btn"><img src="images/svg/download-Import.svg" className="import-img" alt='view' />Import Excel</button>
                            <button className="btn import-btn"><img src="images/svg/export.svg" className="import-img" alt='view' />Export Excel</button>
                            <Link to='/adminadduser' className="btn btn-primary add">Add Users</Link>
                            <select className="form-control">
                                <option>View All</option>
                                <option>View All</option>
                                <option>View All</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="card mt-3">
                    <div className="table-responsive">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">Sr No.</th>
                                    <th scope="col">User ID</th>
                                    <th scope="col">Company Name</th>
                                    <th scope="col">Full Name</th>
                                    <th scope="col">Username</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Phone</th>
                                    <th scope="col">Category</th>
                                    <th scope="col">Status</th>
                                    <th scope="col" style={{minWidth: '150px'}}>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><a href="dashboard-summary.html">2358</a> </td>
                                    <td><a href="">4968</a></td>
                                    <td>X Corp</td>
                                    <td>Charles Grand</td>
                                    <td>@cgrand</td>
                                    <td>cgrand@email.com</td>
                                    <td>(291)241-1995</td>
                                    <td>MAINT Company</td>
                                    <td><span className="badge badge-lightgreen">Active</span> </td>
                                    <td>
                                        <a href="#" className="action-btn"> <img src="images/svg/edit-fill.svg" alt='view' /></a>
                                        <a href="#" className="action-btn"> <img src="images/svg/View.svg" alt='view' /></a>
                                        <a href="#" className="action-btn" data-toggle="modal" data-target="#delete-modal"> <img src="images/svg/BinV1.svg" alt='view' /></a>
                                    </td>
                                </tr>
                                <tr>
                                    <td><a href="dashboard-summary.html">2358</a> </td>
                                    <td><a href="">4968</a></td>
                                    <td>X Corp</td>
                                    <td>Charles Grand</td>
                                    <td>@cgrand</td>
                                    <td>cgrand@email.com</td>
                                    <td>(291)241-1995</td>
                                    <td>MAINT Company</td>
                                    <td><span className="badge badge-orange">In-Active</span> </td>
                                    <td>
                                        <a href="#" className="action-btn"> <img src="images/svg/edit-fill.svg" alt='view' /></a>
                                        <a href="#" className="action-btn"> <img src="images/svg/View.svg" alt='view' /></a>
                                        <a href="#" className="action-btn" data-toggle="modal" data-target="#delete-modal"> <img src="images/svg/BinV1.svg" alt='view' /></a>
                                    </td>
                                </tr>
                                <tr>
                                    <td><a href="dashboard-summary.html">2358</a> </td>
                                    <td><a href="">4968</a></td>
                                    <td>X Corp</td>
                                    <td>Charles Grand</td>
                                    <td>@cgrand</td>
                                    <td>cgrand@email.com</td>
                                    <td>(291)241-1995</td>
                                    <td>MAINT Company</td>
                                    <td><span className="badge badge-lightgreen">Active</span> </td>
                                    <td>
                                        <a href="#" className="action-btn"> <img src="images/svg/edit-fill.svg" alt='view' /></a>
                                        <a href="#" className="action-btn"> <img src="images/svg/View.svg" alt='view' /></a>
                                        <a href="#" className="action-btn" data-toggle="modal" data-target="#delete-modal"> <img src="images/svg/BinV1.svg" alt='view' /></a>
                                    </td>
                                </tr>
                                <tr>
                                    <td><a href="dashboard-summary.html">2358</a> </td>
                                    <td><a href="">4968</a></td>
                                    <td>X Corp</td>
                                    <td>Charles Grand</td>
                                    <td>@cgrand</td>
                                    <td>cgrand@email.com</td>
                                    <td>(291)241-1995</td>
                                    <td>MAINT Company</td>
                                    <td><span className="badge badge-lightgreen">Active</span> </td>
                                    <td>
                                        <a href="#" className="action-btn"> <img src="images/svg/edit-fill.svg" alt='view' /></a>
                                        <a href="#" className="action-btn"> <img src="images/svg/View.svg" alt='view' /></a>
                                        <a href="#" className="action-btn" data-toggle="modal" data-target="#delete-modal"> <img src="images/svg/BinV1.svg" alt='view' /></a>
                                    </td>
                                </tr>
                                <tr>
                                    <td><a href="dashboard-summary.html">2358</a> </td>
                                    <td><a href="">4968</a></td>
                                    <td>X Corp</td>
                                    <td>Charles Grand</td>
                                    <td>@cgrand</td>
                                    <td>cgrand@email.com</td>
                                    <td>(291)241-1995</td>
                                    <td>MAINT Company</td>
                                    <td><span className="badge badge-lightgreen">Active</span> </td>
                                    <td>
                                        <a href="#" className="action-btn"> <img src="images/svg/edit-fill.svg" alt='view' /></a>
                                        <a href="#" className="action-btn"> <img src="images/svg/View.svg" alt='view' /></a>
                                        <a href="#" className="action-btn" data-toggle="modal" data-target="#delete-modal"> <img src="images/svg/BinV1.svg" alt='view' /></a>
                                    </td>
                                </tr>



                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {/* <!-- Modal --> */}
            <div className="modal fade delete-modal" id="delete-modal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document" style={{ maxWidth: '450px' }}>
                    <div className="modal-content">
                        <div className="modal-body">
                            <h5>Before you proceed!</h5>
                            <p>Are you sure you want to remove this user?</p>
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

export default AdminUsers
