import React, { useState } from 'react';
import './dashboard.css';
import { useEffect } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [dashboardData, setDashboardData] = useState([]);

  // fatch api for get all data
  
  const token = localStorage.getItem('admin-login');
  useEffect( async() => {
    await axios
      .get('http://18.171.24.247:3000/admin/admindashboard', {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          auth: token,
        },
      })
      .then((res) => {
        return setDashboardData(res.data.data);
      })
      .catch((err) => console.log(err));
  }, []);
  console.log(dashboardData);

  return (
    <>
      <div id="sidemenu"></div>
      <div className="lrm-content">
        <div className="row align-items-center">
          <div className="col-lg-4">
            <h4 className="small-title">Dashboard</h4>
          </div>
          <div className="col-lg-8">
            <div className="search-flex">
              <input
                type="text"
                name=""
                placeholder="Search"
                className="form-control"
              />
              <button className="btn btn-primary">
                <i className="fa fa-search"></i>{' '}
              </button>
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
                  <th scope="col">Next Visit</th>
                  <th scope="col">Maintenance Type</th>
                  <th scope="col">Last Activity</th>
                  <th scope="col">Certificate Expiry</th>
                  <th scope="col">Field Life expectancy</th>
                </tr>
              </thead>
              <tbody>

                {             
                dashboardData.map((item) => {
                  const { id, venue_name, state } = item;
                  return (
                    <tr key={id}>
                      <td>
                        <a href="#">{id}</a>{' '}
                      </td>
                      <td>{venue_name}</td>
                      <td>{state}</td>
                      <td>10/30 Hours</td>
                      <td>Power Brush</td>
                      <td>dd/mm/yyyy</td>
                      <td>dd/mm/yyyy</td>
                      <td>
                        <span className="text-primary">3 years</span>
                      </td>
                    </tr>
                  );
                })}
                
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
