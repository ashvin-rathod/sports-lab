import React from 'react'

const ClientManageAccount = () => {
    return (
        <>
            <div className="full-content">
                <div className="row justify-content-center w-100 m-0">
                    <div className="col-lg-6 col-md-8">
                        <div className="card">
                            <div className="card-body">
                                <div className="mt-3 text-center">
                                    <img src="images/dummy.png" className="dummy-profile" alt='dummy' />
                                </div>
                                <div className="mt-4 mb-4">
                                    <div className="profile-name text-center">
                                        <h6>Martin Williams</h6>
                                        <p>Admin Manager</p>
                                    </div>
                                </div>
                                <div className="table-responsive">
                                    <table className="table table-borderless color-dark venues-tbl">
                                        <tbody>
                                            <tr>
                                                <th>First Name</th>
                                                <td className="opacity-06 text-right">Martin</td>
                                            </tr>
                                            <tr>
                                                <th>Last Name</th>
                                                <td className="opacity-06 text-right">Williams</td>
                                            </tr>
                                            <tr>
                                                <th>User ID</th>
                                                <td className="opacity-06 text-right">USER12340000</td>
                                            </tr>
                                            <tr>
                                                <th>Address</th>
                                                <td className="opacity-06 text-right">USER12340000</td>
                                            </tr>
                                            <tr>
                                                <th>Email</th>
                                                <td className="opacity-06 text-right">martwilli@email.com</td>
                                            </tr>
                                            <tr>
                                                <th>Contact Number</th>
                                                <td className="opacity-06 text-right">(494)826-6296</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="mt-3 text-center">
                                    <div className="form-group">
                                        <button className=" btn btn-primary btn-width">Edit Profile</button>
                                    </div>
                                    <div className="form-group add-column">
                                        <a href="change-password.html" className="btn btn-link bg-transparent border-0" style={{ textDecoration: 'underline' }}>Change Password</a>
                                        <a className="btn btn-link bg-transparent border-0" style={{textDecoration: 'underline'}}>Terms and Conditions</a>
                                        <a className="btn btn-link bg-transparent border-0" style={{textDecoration: 'underline'}}>About us</a>
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

export default ClientManageAccount
