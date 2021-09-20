import React from 'react'

const AdminRecordMaintenanceActivity = () => {
    return (
        <>
            <div className="lrm-content">
                <div className="row align-items-center">
                    <div className="col-lg-4">
                        <h4 className="small-title">Record Maintenance Activity <span className="mini-dot"></span>
                            <a href="subscriptions.html" className="ml-2 subs">List of Reports</a>
                        </h4>
                    </div>
                    <div className="col-lg-8">
                        <div className="search-flex">
                            <input type="text" name="" placeholder="Search" className="form-control" />
                            <button className="btn btn-primary"><i className="fa fa-search"></i> </button>
                            <a href="#" className="btn btn-primary add">Record Maintenance</a>

                        </div>
                    </div>
                </div>
                <div className="card mt-3">
                    <div className="table-responsive">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">Venue ID</th>
                                    <th scope="col">Venue Name</th>
                                    <th scope="col">State</th>
                                    <th scope="col">Address</th>
                                    <th scope="col">City</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><a href="#">2358</a> </td>
                                    <td>Abu Dhabi Cricket #3</td>
                                    <td>Missouri</td>
                                    <td>2331 Villager Park Ct</td>
                                    <td>Mexico City</td>

                                </tr>
                                <tr>
                                    <td><a href="#">2358</a> </td>
                                    <td>Abu Dhabi Cricket #3</td>
                                    <td>Missouri</td>
                                    <td>2331 Villager Park Ct</td>
                                    <td>Mexico City</td>

                                </tr>
                                <tr>
                                    <td><a href="#">2358</a> </td>
                                    <td>Abu Dhabi Cricket #3</td>
                                    <td>Missouri</td>
                                    <td>2331 Villager Park Ct</td>
                                    <td>Mexico City</td>

                                </tr>
                                <tr>
                                    <td><a href="#">2358</a> </td>
                                    <td>Abu Dhabi Cricket #3</td>
                                    <td>Missouri</td>
                                    <td>2331 Villager Park Ct</td>
                                    <td>Mexico City</td>

                                </tr>
                                <tr>
                                    <td><a href="#">2358</a> </td>
                                    <td>Abu Dhabi Cricket #3</td>
                                    <td>Missouri</td>
                                    <td>2331 Villager Park Ct</td>
                                    <td>Mexico City</td>

                                </tr>
                                <tr>
                                    <td><a href="#">2358</a> </td>
                                    <td>Abu Dhabi Cricket #3</td>
                                    <td>Missouri</td>
                                    <td>2331 Villager Park Ct</td>
                                    <td>Mexico City</td>

                                </tr>
                                <tr>
                                    <td><a href="#">2358</a> </td>
                                    <td>Abu Dhabi Cricket #3</td>
                                    <td>Missouri</td>
                                    <td>2331 Villager Park Ct</td>
                                    <td>Mexico City</td>

                                </tr>
                                <tr>
                                    <td><a href="#">2358</a> </td>
                                    <td>Abu Dhabi Cricket #3</td>
                                    <td>Missouri</td>
                                    <td>2331 Villager Park Ct</td>
                                    <td>Mexico City</td>

                                </tr>
                                <tr>
                                    <td><a href="#">2358</a> </td>
                                    <td>Abu Dhabi Cricket #3</td>
                                    <td>Missouri</td>
                                    <td>2331 Villager Park Ct</td>
                                    <td>Mexico City</td>

                                </tr>
                                <tr>
                                    <td><a href="#">2358</a> </td>
                                    <td>Abu Dhabi Cricket #3</td>
                                    <td>Missouri</td>
                                    <td>2331 Villager Park Ct</td>
                                    <td>Mexico City</td>

                                </tr>
                                <tr>
                                    <td><a href="#">2358</a> </td>
                                    <td>Abu Dhabi Cricket #3</td>
                                    <td>Missouri</td>
                                    <td>2331 Villager Park Ct</td>
                                    <td>Mexico City</td>

                                </tr>
                                <tr>
                                    <td><a href="#">2358</a> </td>
                                    <td>Abu Dhabi Cricket #3</td>
                                    <td>Missouri</td>
                                    <td>2331 Villager Park Ct</td>
                                    <td>Mexico City</td>

                                </tr>
                                <tr>
                                    <td><a href="#">2358</a> </td>
                                    <td>Abu Dhabi Cricket #3</td>
                                    <td>Missouri</td>
                                    <td>2331 Villager Park Ct</td>
                                    <td>Mexico City</td>

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

export default AdminRecordMaintenanceActivity
