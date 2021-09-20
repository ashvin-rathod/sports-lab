import React, { useState } from 'react';
import AdminHeader from './AdminHeader';
import routes from '../../routes';
import { Switch, Route, Redirect } from 'react-router-dom';
import Sidebar from './Sidebar';

const DefaultLayout = () => {
  const [showSidebar, setShowSidebar] = useState('');
  const [titleShow, setTitleShow] = useState('');
  const [showSearchbox, setShowSearchbox] = useState('')
  const isLogedIn = localStorage.getItem('admin-login');
// console.log(isLogedIn,'-------------------------');
  return (
    <div>
      <div>
        <AdminHeader titleShow={titleShow} showSearchbox={showSearchbox}/>
      </div>
      <div className={showSidebar ? '' : 'mobile-show'}>
        <div id="sidemenu">
          <Sidebar />
        </div>
      </div>
      {isLogedIn ? (
        <div>
          <Switch>
            {routes.map((route, idx) => {
              return (
                route.component && (
                  <Route
                    key={idx}
                    path={route.path}
                    exact={route.exact}
                    name={route.name}
                    render={(props) => (
                      setShowSidebar(route.sidebar),
                      setTitleShow(route.title),
                      setShowSearchbox(route.showSearchBox),
                      (<route.component {...props} />)
                    )}
                  />
                )
              );
            })}
            <Redirect from="/" to="/admindashboard" />
          </Switch>
        </div>
      ) : (
        <Redirect from="/" to="/adminlogin" />
      )}
    </div>
  );
};
export default DefaultLayout;
