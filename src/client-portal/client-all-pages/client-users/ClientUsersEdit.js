import React from 'react'

const ClientUserEdit = () => {
    return (
        <>
            <div className="full-content">
                <div className="row justify-content-center">
                    <div className="col-lg-8 col-md-10">
                        <div className="card">

                            <div className="card-body">
                                <ul className="edit-user-nav nav nav-tabs" id="myTab" role="tablist">
                                    <li className="nav-item" role="presentation">
                                        <a className="nav-link active" id="home-tab1" data-toggle="tab" href="#home1" role="tab" aria-controls="home1" aria-selected="true">Admin</a>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <a className="nav-link" id="home-tab2" data-toggle="tab" href="#home2" role="tab" aria-controls="home2" aria-selected="true">MAINT Contractor</a>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <a className="nav-link" id="home-tab3" data-toggle="tab" href="#home3" role="tab" aria-controls="home3" aria-selected="true">Testing Company</a>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <a className="nav-link" id="home-tab4" data-toggle="tab" href="#home4" role="tab" aria-controls="home4" aria-selected="true">Client</a>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <a className="nav-link" id="home-tab5" data-toggle="tab" href="#home5" role="tab" aria-controls="home5" aria-selected="true">Sub-Client</a>
                                    </li>
                                </ul>
                                <div className="tab-content">
                                    <div className="tab-pane active" id="home1" role="tabpanel" aria-labelledby="home-tab1">
                                        <form action="">
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <input type="text" className="form-control" id="" placeholder="First Name" />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <input type="text" className="form-control" id="" placeholder="Last Name" />
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="form-group">
                                                        <input type="text" className="form-control" id="" placeholder="Email" />
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="form-group">
                                                        <input type="text" className="form-control" id="" placeholder="Phone" />
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="form-group password-icon">
                                                        <input type="password" className="form-control" id="typepass" placeholder="Password" />
                                                        <img src="images/svg/eye-close-line.svg" alt='eye' className="icon" onclick="hide_show_pass()" />
                                                    </div>
                                                </div>
                                                <div className="col-md-12 pt-2">
                                                    <h4 className="small-title">Permissions</h4>
                                                    <div className="form-group d-inline-block mr-3">
                                                        <div className="toggle">
                                                            <input type="checkbox" name="" defaultChecked="true" />
                                                            <div className="tbox"><span></span> </div>
                                                            <div className="txt">Venue Approval Required</div>
                                                        </div>
                                                    </div>
                                                    <div className="form-group d-inline-block mr-3">
                                                        <div className="toggle">
                                                            <input type="checkbox" name="" defaultChecked="true"/>
                                                            <div className="tbox"><span></span> </div>
                                                            <div className="txt">Comment on Reports</div>
                                                        </div>

                                                    </div>

                                                </div>
                                                <div className="col-md-12 pt-2">
                                                    <h4 className="small-title">Upload image</h4>
                                                    <div className="form-group">
                                                        <div className="upload-file-input">
                                                            <label>Choose file</label>
                                                            <input id="uploadFile" value="No file chosen!" className="" />
                                                            <div className="fileUpload btn btn-primary">
                                                                <span>Upload</span>
                                                                <input id="uploadBtn" type="file" className="upload" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-12 pt-3 text-center">
                                                    <div className="form-group">
                                                        <button className=" btn btn-primary btn-width">Add User</button>
                                                    </div>
                                                </div>



                                            </div>

                                        </form>
                                    </div>
                                    <div className="tab-pane" id="home2" role="tabpanel" aria-labelledby="home-tab2">
                                        <form>
                                            <div className="row">
                                                <div className="col-md-12 text-center">
                                                    <div className="row align-items-center justify-content-center" style={{minHeight: '400px'}}>
                                                        <div className="col-md-10">
                                                            <button className="maintenance-button"><img src="images/svg/plus.svg" alt='plus' /> Add Maintenance Contractor</button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-12 pt-3 text-center">
                                                    <div className="form-group">
                                                        <button className=" btn btn-primary btn-width">Add User</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="tab-pane" id="home3" role="tabpanel" aria-labelledby="home-tab3">
                                        <form>
                                            <div className="row">
                                                <div className="col-md-12 text-center">
                                                    <div className="row align-items-center justify-content-center" style={{minHeight: '400px'}}>
                                                        <div className="col-md-10">
                                                            <button className="maintenance-button"><img src="images/svg/plus.svg" alt='plus' /> Add Testing Company</button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-12 pt-3 text-center">
                                                    <div className="form-group">
                                                        <button className=" btn btn-primary btn-width">Add User</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="tab-pane" id="home4" role="tabpanel" aria-labelledby="home-tab4">
                                        <form action="">
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <input type="text" className="form-control" id="" placeholder="First Name" />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <input type="text" className="form-control" id="" placeholder="Last Name" />
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="form-group">
                                                        <input type="text" className="form-control" id="" placeholder="Email" />
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="form-group">
                                                        <input type="text" className="form-control" id="" placeholder="Phone" />
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="form-group password-icon">
                                                        <input type="password" className="form-control" id="typepass2" placeholder="Password" />
                                                        <img src="images/svg/eye-close-line.svg" alt='plus' className="icon" onclick="hide_show_pass2()" />
                                                    </div>
                                                </div>
                                                <div className="col-md-12 pt-2">
                                                    <h4 className="small-title">Permissions</h4>
                                                    <div className="form-group d-inline-block mr-3">
                                                        <div className="toggle">
                                                            <input type="checkbox" name="" checked="" />
                                                            <div className="tbox"><span></span> </div>
                                                            <div className="txt">Venue Approval Required</div>
                                                        </div>
                                                    </div>
                                                    <div className="form-group d-inline-block mr-3">
                                                        <div className="toggle">
                                                            <input type="checkbox" name="" checked="" />
                                                            <div className="tbox"><span></span> </div>
                                                            <div className="txt">Comment on Reports</div>
                                                        </div>

                                                    </div>

                                                </div>
                                                <div className="col-md-12 pt-2">
                                                    <h4 className="small-title">Upload image</h4>
                                                    <div className="form-group">
                                                        <div className="upload-file-input">
                                                            <label>Choose file</label>
                                                            <input id="uploadFile" value="No file chosen!" className="" />
                                                            <div className="fileUpload btn btn-primary">
                                                                <span>Upload</span>
                                                                <input id="uploadBtn" type="file" className="upload" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-12 pt-3 text-center">
                                                    <div className="form-group">
                                                        <button className=" btn btn-primary btn-width">Add User</button>
                                                    </div>
                                                </div>



                                            </div>

                                        </form>
                                    </div>
                                    <div className="tab-pane" id="home5" role="tabpanel" aria-labelledby="home-tab5">
                                        <form action="">
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <input type="text" className="form-control" id="" placeholder="First Name" />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <input type="text" className="form-control" id="" placeholder="Last Name" />
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="form-group">
                                                        <input type="text" className="form-control" id="" placeholder="Email" />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <input type="text" className="form-control" id="" placeholder="Phone" />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <input type="text" className="form-control" id="" placeholder="Job Title" />
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="form-group">
                                                        <select className="form-control">
                                                            <option>Choose User Type</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="form-group password-icon">
                                                        <input type="password" className="form-control" id="typepass3" placeholder="Password" />
                                                        <img src="images/svg/eye-close-line.svg" alt='plus' className="icon" onclick="hide_show_pass3()" />
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="form-group">
                                                        <input type="text" className="form-control" id="" placeholder="Address" />
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="form-group">
                                                        <select className="form-control">
                                                            <option>Choose Client</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-md-12 pt-2">
                                                    <h4 className="small-title">Permissions</h4>
                                                    <div className="form-group d-inline-block mr-3">
                                                        <div className="toggle">
                                                            <input type="checkbox" name="" checked="" />
                                                            <div className="tbox"><span></span> </div>
                                                            <div className="txt">Add Venues</div>
                                                        </div>
                                                    </div>
                                                    <div className="form-group d-inline-block mr-3">
                                                        <div className="toggle">
                                                            <input type="checkbox" name="" checked="true" />
                                                            <div className="tbox"><span></span> </div>
                                                            <div className="txt">Submit Test Results</div>
                                                        </div>
                                                    </div>
                                                    <div className="form-group d-inline-block mr-3">
                                                        <div className="toggle">
                                                            <input type="checkbox" name="" checked="true" />
                                                            <div className="tbox"><span></span> </div>
                                                            <div className="txt">Under take Tests</div>
                                                        </div>
                                                    </div>
                                                    <div className="form-group d-inline-block mr-3">
                                                        <div className="toggle">
                                                            <input type="checkbox" name="" checked="true" />
                                                            <div className="tbox"><span></span> </div>
                                                            <div className="txt">Make MAINT Request</div>
                                                        </div>
                                                    </div>
                                                    <div className="form-group d-inline-block mr-3">
                                                        <div className="toggle">
                                                            <input type="checkbox" name="" checked="true" />
                                                            <div className="tbox"><span></span> </div>
                                                            <div className="txt">Add Users</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-12 pt-2">
                                                    <h4 className="small-title">Upload image</h4>
                                                    <div className="form-group">
                                                        <div className="upload-file-input">
                                                            <label>Choose file</label>
                                                            <input id="uploadFile" value="No file chosen!" className="" />
                                                            <div className="fileUpload btn btn-primary">
                                                                <span>Upload</span>
                                                                <input id="uploadBtn" type="file" className="upload" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-12 pt-3 text-center">
                                                    <div className="form-group">
                                                        <button className=" btn btn-primary btn-width">Add User</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ClientUserEdit
