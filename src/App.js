import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import './App.css';

const loading = () => (
  <div className="animated fadeIn pt-3 text-center">Loading...</div>
);

const AdminLogin = React.lazy(() =>
  import('./super-admin/pages/login/AdminLogin')
);
const ClientLogin = React.lazy(() =>
  import('./client-portal/pages/login/ClientLogin')
);
const AdminDefaultLayout = React.lazy(() =>
  import('./super-admin/DefaultLayout/AdminDefaultLayout')
);
const AdmiinForgotPass = React.lazy(() =>
  import('./super-admin/admin-password/AdminForgotPass')
);
const AdmiinResetPass = React.lazy(() =>
  import('./super-admin/admin-password/AdminResetPass')
);
// const ClientDefaultLayout = React.lazy(()=>import ('./client-portal/client-defaultLayout/ClientDefaultLayout'))
function App() {
  return (
    <HashRouter>
      <React.Suspense fallback={loading()}>
        <Switch>
          <Route exact path="/adminlogin" render={() => <AdminLogin />} />
          <Route
            exact
            path="/adminforgotpass"
            render={() => <AdmiinForgotPass />}
          />
          <Route
            exact
            path="/adminresetpass"
            render={() => <AdmiinResetPass />}
          />
          <Route exact path="/clientlogin" render={() => <ClientLogin />} />
          {/* <Route path="/" name="Home" render={props => <ClientDefaultLayout {...props} />} /> */}
          <Route
            path="/"
            name="Home"
            render={(props) => <AdminDefaultLayout {...props} />}
          />
        </Switch>
      </React.Suspense>
    </HashRouter>
  );
}

export default App;
