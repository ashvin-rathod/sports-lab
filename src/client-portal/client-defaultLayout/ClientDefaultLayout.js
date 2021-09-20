import React,{useState} from 'react'
import routes from '../../routes'
import { Switch, Route, Redirect } from 'react-router-dom'
import ClientSidebar from './ClientSidebar'
import ClientHeader from './ClientHeader'

const ClientDefaultLayout = () => {
    const [showSidebar, setShowSidebar] = useState(true)
    const [titleShow, setTitleShow] = useState('')
    return (
        <div>
            <div><ClientHeader titleShow={titleShow} /></div>
            <div className={showSidebar ? '' : "mobile-show"}>
                <div id="sidemenu"><ClientSidebar /></div>
            </div>
            {/* <div id="sidemenu"><Sidebar /></div> */}
            <div>
                <Switch>
                    {routes.map((route, idx) => {
                        // console.log(route);
                        return route.component && (
                            <Route
                                key={idx}
                                path={route.path}
                                exact={route.exact}
                                name={route.name}
                                render={props => (
                                    setShowSidebar(route.sidebar),
                                    setTitleShow(route.title),
                                    <route.component {...props} />
                                )} />
                        )
                    })}
                    <Redirect from="/" to="/clientdashboard" />
                    {/* <Redirect from="/" to="/admindashboard" /> */}
                    {/* <Redirect from="/login" to="/dashboard" /> */}
                </Switch>
            </div>
        </div>
    )
}

export default ClientDefaultLayout