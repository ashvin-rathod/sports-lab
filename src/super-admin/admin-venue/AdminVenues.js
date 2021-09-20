import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import instence from '../../helpers/axiosistence';
// import axios from 'axios'

const AdminVenues = () => {
  const [venuesData, setVenuesData] = useState([]);

  const token = localStorage.getItem('admin-login');

  // const getData = async()=>{
  //   await axios
  //     .get('http://localhost:3000/admin/venues', {
  //       headers: {
  //         'Content-Type': 'application/x-www-form-urlencoded',
  //         auth: token,
  //       },
  //     })
  //     .then((res) => {
  //       return setVenuesData(res.data.data);
  //     })
  //     .catch((err) => console.log(err));
  // }
  // // useEffect(() => {
  // //   getData()
  // // }, [])


  useEffect(async () => {
    await instence
      .get('admin/venues')
      .then((res) => {
        return setVenuesData(res.data.data);
      })
      .catch((err) => console.log(err));
  }, []);
  console.log(venuesData);

  // edit handle
  const handleChange = ()=>{
    
  }
  
  return (
    <>
      <div className="lrm-content">
        <div className="row align-items-center">
          <div className="col-lg-4">
            <h4 className="small-title">
              Venues <span className="mini-dot"></span>
              <Link to="/adminvenuemap" className="ml-2 subs">
                View on Map
              </Link>
            </h4>
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
              <Link to="/adminaddvenue" className="btn btn-primary add">
                Add Venue
              </Link>
              {/* <a href="add-venues.html" className="btn btn-primary add">Add Venue</a> */}
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
                  <th scope="col">Status</th>
                  <th scope="col" style={{ minWidth: '150px' }}>
                    Actions
                  </th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>

                {
                venuesData.map((venue) => {
                  return (
                    <tr key={venue.id}>
                      <td >
                        <a href="#">2358</a>{' '}
                      </td>
                      <td>{venue.venue_name}</td>
                      <td>{venue.state}</td>
                      <td>{venue.address}</td>
                      <td>{venue.city}</td>
                      <td>
                        <span className="badge badge-lightgreen">Active</span>{' '}
                      </td>
                      <td>
                        <button onClick={handleChange} className="action-btn">
                          {' '}
                          <img src="images/svg/edit-fill.svg" alt="view" />
                        </button>
                        <a href="#" className="action-btn">
                          {' '}
                          <img src="images/svg/View.svg" alt="view" />
                        </a>
                        <a
                          href="#"
                          className="action-btn"
                          data-toggle="modal"
                          data-target="#delete-modal"
                        >
                          {' '}
                          <img src="images/svg/BinV1.svg" alt="view" />
                        </a>
                      </td>
                      <td>
                        <a href="#" className="btn btn-outline-primary">
                          View Report
                        </a>{' '}
                      </td>
                    </tr>
                  );
                })
                
                
                }

                {/* <tr>
              <td><a href="#">2358</a> </td>
              <td>Abu Dhabi Cricket #3</td>
              <td>Missouri</td>
              <td>2331 Villager Park Ct</td>
              <td>Mexico City</td>
              <td><span className="badge badge-orange">In-Active</span> </td>
              <td>
                <a href="#" className="action-btn"> <img src="images/svg/edit-fill.svg" alt='view'/></a>
                <a href="#" className="action-btn"> <img src="images/svg/View.svg" alt='view'/></a>
                <a href="#" className="action-btn" data-toggle="modal" data-target="#delete-modal"> <img src="images/svg/BinV1.svg" alt='view'/></a>
              </td>
              <td><a href="#" className="btn btn-outline-primary">View Report</a> </td>                       
            </tr>
             <tr>
              <td><a href="#">2358</a> </td>
              <td>Abu Dhabi Cricket #3</td>
              <td>Missouri</td>
              <td>2331 Villager Park Ct</td>
              <td>Mexico City</td>
              <td><span className="badge badge-lightgreen">Active</span> </td>
              <td>
                <a href="#" className="action-btn"> <img src="images/svg/edit-fill.svg" alt='view'/></a>
                <a href="#" className="action-btn"> <img src="images/svg/View.svg" alt='view'/></a>
                <a href="#" className="action-btn" data-toggle="modal" data-target="#delete-modal"> <img src="images/svg/BinV1.svg" alt='view'/></a>
              </td>
              <td><a href="#" className="btn btn-outline-primary">View Report</a> </td>                       
            </tr>
             <tr>
              <td><a href="#">2358</a> </td>
              <td>Abu Dhabi Cricket #3</td>
              <td>Missouri</td>
              <td>2331 Villager Park Ct</td>
              <td>Mexico City</td>
              <td><span className="badge badge-lightgreen">Active</span> </td>
              <td>
                <a href="#" className="action-btn"> <img src="images/svg/edit-fill.svg" alt='view'/></a>
                <a href="#" className="action-btn"> <img src="images/svg/View.svg" alt='view'/></a>
                <a href="#" className="action-btn" data-toggle="modal" data-target="#delete-modal"> <img src="images/svg/BinV1.svg" alt='view'/></a>
              </td>
              <td><a href="#" className="btn btn-outline-primary">View Report</a> </td>                       
            </tr>
            <tr>
              <td><a href="#">2358</a> </td>
              <td>Abu Dhabi Cricket #3</td>
              <td>Missouri</td>
              <td>2331 Villager Park Ct</td>
              <td>Mexico City</td>
              <td><span className="badge badge-orange">In-Active</span> </td>
              <td>
                <a href="#" className="action-btn"> <img src="images/svg/edit-fill.svg" alt='view'/></a>
                <a href="#" className="action-btn"> <img src="images/svg/View.svg" alt='view'/></a>
                <a href="#" className="action-btn" data-toggle="modal" data-target="#delete-modal"> <img src="images/svg/BinV1.svg" alt='view'/></a>
              </td>
              <td><a href="#" className="btn btn-outline-primary">View Report</a> </td>                       
            </tr>
            <tr>
              <td><a href="#">2358</a> </td>
              <td>Abu Dhabi Cricket #3</td>
              <td>Missouri</td>
              <td>2331 Villager Park Ct</td>
              <td>Mexico City</td>
              <td><span className="badge badge-orange">In-Active</span> </td>
              <td>
                <a href="#" className="action-btn"> <img src="images/svg/edit-fill.svg" alt='view'/></a>
                <a href="#" className="action-btn"> <img src="images/svg/View.svg" alt='view'/></a>
                <a href="#" className="action-btn" data-toggle="modal" data-target="#delete-modal"> <img src="images/svg/BinV1.svg" alt='view'/></a>
              </td>
              <td><a href="#" className="btn btn-outline-primary">View Report</a> </td>                       
            </tr>
          */}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Modal */}
      <div
        className="modal fade delete-modal"
        id="delete-modal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div
          className="modal-dialog modal-dialog-centered"
          role="document"
          style={{ maxWidth: '450px' }}
        >
          <div className="modal-content">
            <div className="modal-body">
              <h5>Before you proceed!</h5>
              <p>Are you sure you want to delete this venue?</p>
              <div className="bottom">
                <button type="button" className="btn btn-primary">
                  Yes
                </button>
                <button
                  type="button"
                  className="btn btn-outline-primary"
                  data-dismiss="modal"
                >
                  No
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminVenues;
