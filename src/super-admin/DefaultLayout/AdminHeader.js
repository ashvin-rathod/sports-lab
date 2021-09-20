import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const AdminHeader = ({ titleShow, showSearchbox }) => {
  let history = useHistory();

  //logout 

  const logout = ()=>{
      // window.localStorage.clear(); //clear all localstorage
      window.localStorage.removeItem('admin-login'); //remove one item
      // <Redirect to='/login' />
      history.push("/adminlogin");
  }
  return (
    <>
      <header>
        <div className="container-fluid">
          <div className="row">
            <div className="col-6">
              {titleShow ? (
                <Link
                  to=""
                  onClick={history.goBack}
                  className="a-header a-remove"
                >
                  <img
                    src="images/left-arrow.png"
                    className="mr-3 ml-3"
                    alt="vileft-arrowew"
                  />
                  {titleShow}
                </Link>
              ) : (
                <Link to="/" className="lmrlogo">
                  
                  <img src="./images/logo.svg" alt="logo" />
                </Link>
              )}
              {showSearchbox ? (
                <span className="search-span">
                  <img src="images/svg/search.svg" alt="search" />
                  <input
                    type=""
                    name=""
                    placeholder="Search"
                    className="form-control"
                  />
                </span>
              ) : (
                ''
              )}
            </div>
            <div className="col-6">
              <ul className="rightul">
                <li>
                  <Link to="/admingetintouch">
                    <img src="./images/svg/Call.svg" alt="call" />
                  </Link>
                </li>
                <li>
                  <Link to="/adminmessages">
                    <img src="./images/svg/chat.svg" alt="call" />
                  </Link>
                </li>
                <li>
                  <Link to="/adminnotifications">
                    <img src="./images/svg/notification.svg" alt="call" />
                  </Link>
                </li>
                <li>
                  <div className="btn-group">
                    <button
                      type="button"
                      className="btn dropdown-toggle"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <img src="./images/profile.png" alt="profile" />
                    </button>
                    <div className="dropdown-menu dropdown-menu-right">
                      <div className="name">
                        <h6>Martin Williams</h6>
                        <h5 style={{ fontFamily: 'MontserratMedium' }}>
                          Admin
                        </h5>
                      </div>
                      <Link
                        to="/adminmanageaccount"
                        className="dropdown-item"
                        style={{ fontFamily: 'MontserratMedium' }}
                      >
                        <img
                          src="./images/svg/manage-account.svg"
                          alt="manage-account"
                        />
                        Manage Account
                      </Link>
                      <Link
                        to="/adminsettings"
                        className="dropdown-item"
                        style={{ fontFamily: 'MontserratMedium' }}
                      >
                        <img
                          src="./images/svg/administration.svg"
                          alt="administration"
                        />
                        Administration
                      </Link>
                      <button
                        
                        className="dropdown-item"
                        style={{
                          color: '#E42F36',
                          fontFamily: 'MontserratMedium',
                        }}
                        onClick={() => logout()}
                      >
                        <img src="./images/svg/Logout.svg" alt="logout" />
                        Logout
                      </button>
                    </div>
                  </div>
                </li>
                <li className="mobile-li">
                  <button className="sidebar-button" id="sidebar-button">
                    <i className="fa fa-bars"></i>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default AdminHeader;
