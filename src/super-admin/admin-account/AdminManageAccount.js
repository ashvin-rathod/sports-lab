import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const AdminManageAccount = () => {
const data = JSON.parse(localStorage.getItem('login-details'));
    console.log(data.id,'-------datatatatatatat');
    const [detail, setDetail] = useState('')
    const token = localStorage.getItem('admin-login');
    useEffect(async() => {
        await axios.get(`http://localhost:3000/auth/admin/login/${data.id}`,{
            headers: {
              'Access-Control-Allow-Origin': '*',
              "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE",
              "Content-Type": "application/x-www-form-urlencoded",
              "auth": localStorage.getItem('admin-login')
            },}
        ).then((result)=>{
           setDetail(result.data.data[0])
            console.log(result.data.data[0],'------------');
        })
    }, [])

    const {id, first_name, last_name,email,phone}=detail
    // console.log(detail);
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
                                        <h6>{first_name} {last_name}</h6>
                                        <p>Admin Manager</p>
                                    </div>
                                </div>
                                <div className="table-responsive">
                                    <table className="table table-borderless color-dark venues-tbl">
                                        <tbody>
                                            <tr>
                                                <th>First Name</th>
                                                <td className="opacity-06 text-right">{first_name}</td>
                                            </tr>
                                            <tr>
                                                <th>Last Name</th>
                                                <td className="opacity-06 text-right">{last_name}</td>
                                            </tr>
                                            <tr>
                                                <th>User ID</th>
                                                <td className="opacity-06 text-right">{id}</td>
                                            </tr>
                                            <tr>
                                                <th>Address</th>
                                                <td className="opacity-06 text-right">USER12340000</td>
                                            </tr>
                                            <tr>
                                                <th>Email</th>
                                                <td className="opacity-06 text-right">{email}</td>
                                            </tr>
                                            <tr>
                                                <th>Contact Number</th>
                                                <td className="opacity-06 text-right">{phone}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="mt-3 text-center">
                                    <div className="form-group">
                                        <Link to='/adminedit'>
                                        <button className=" btn btn-primary btn-width">Edit Profile</button></Link>
                                    </div>
                                    <div className="form-group">
                                        <Link to='/adminchangepass' className="btn btn-link bg-transparent border-0" style={{ textDecoration: 'underline' }}>Change Password</Link>
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

export default AdminManageAccount
