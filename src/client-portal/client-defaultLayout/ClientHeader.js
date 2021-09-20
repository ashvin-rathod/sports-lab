import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';

const ClientHeader = ({ titleShow }) => {
  let history = useHistory();

  return (
    <>
      <header>
        <div className="container-fluid">
          <div className="row">
            <div className="col-6">
              {titleShow ? (
                <Link
                  onClick={history.goBack}
                  to=""
                  className="a-header a-remove"
                >
                  <img src="images/left-arrow.png" className="mr-3 ml-3" alt='left' />
                  {titleShow}
                </Link>
              ) : (
                <Link to="/" className="lmrlogo">
                  {' '}
                  <img src="./images/logo.svg" alt="logo" />
                </Link>
              )}
              {/* <Link to='#' className='lmrlogo' >
                                <img src="./images/logo.svg" alt="logo" />
                            </Link> */}
            </div>
            <div className="col-6">
              <ul className="rightul">
                <li>
                  <Link to="/clientgetintouch">
                    <img src="./images/svg/Call.svg" alt="call" />
                  </Link>
                </li>
                <li>
                  <Link to="/clientmessages">
                    <img src="./images/svg/chat.svg" alt="call" />
                  </Link>
                </li>
                <li>
                  <Link to="clientnotifications">
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
                      <a
                        href="manage-account.html"
                        className="dropdown-item"
                        style={{ fontFamily: 'MontserratMedium' }}
                      >
                        <img
                          src="./images/svg/manage-account.svg"
                          alt="manage-account"
                        />
                        Manage Account
                      </a>
                      <a
                        href="settings.html"
                        className="dropdown-item"
                        style={{ fontFamily: 'MontserratMedium' }}
                      >
                        <img
                          src="./images/svg/administration.svg"
                          alt="administration"
                        />
                        Administration
                      </a>
                      <a
                        href=""
                        className="dropdown-item"
                        style={{
                          color: '#E42F36',
                          fontFamily: 'MontserratMedium',
                        }}
                      >
                        <img src="./images/svg/Logout.svg" alt="logout" />
                        Logout
                      </a>
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

export default ClientHeader;
