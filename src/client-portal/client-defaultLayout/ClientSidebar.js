import React from 'react'
import { Link } from 'react-router-dom';
import Clientdashboard from '../Clientdashboard/ClientDashboard'
function ClientSidebar() {
    return (
        <>
             <div className="side-menu">
    <ul>
      <li>
         <Link to='/clientdashboard' data-toggle="tooltip" data-placement="right" title="Dashboard" >
         <img src="images/svg/Dashboard.svg" alt='Clientdashboard' />
             </Link> 
        {/* <a href="dashboard.html" data-toggle="tooltip" data-placement="right" title="Dashboard">
          <img src="images/svg/Dashboard.svg">
        </a> */}
      </li>

      <li>
        <Link to='/clientvenues' data-toggle="tooltip" data-placement="right" title="Venues">
        <img src="images/svg/Venues.svg" alt='venues'/>
        </Link>
        {/* <a href="venues.html" data-toggle="tooltip" data-placement="right" title="Venues">
          <img src="images/svg/Venues.svg" alt='venues'/>
        </a> */}
      </li>
      <li>
      <Link to='/clientusers' data-toggle="tooltip" data-placement="right" title="Users" >
      <img src="images/svg/Users.svg" alt='Users'/>
             </Link> 
        {/* <Link to='' ></Link> */}

        {/* <a href="users.html" data-toggle="tooltip" data-placement="right" title="Users">
          <img src="images/svg/Users.svg" alt='Users'/>
        </a> */}
      </li>
      <li>
         <Link to='/clientusage' data-toggle="tooltip" data-placement="right" title="Usage" >
         <img src="images/svg/Usage.svg"alt='Usage'/>
             </Link> 
        {/* <Link to='' ></Link> */}

        {/* <a href="usage.html" data-toggle="tooltip" data-placement="right" title="Usage">
          <img src="images/svg/Usage.svg"alt='Usage'/>
        </a>  */}
      </li>
      <li>
         <Link to='/clientrecordmaintenanceactivity' data-toggle="tooltip" data-placement="right" title="Record maintenace activity" >
         <img src="images/svg/Record maintenace activity.svg"alt='Record maintenace activity'/>
             </Link> 
        {/* <Link to='' ></Link> */}

        {/* <a href="record-maintenance-activity.html" data-toggle="tooltip" data-placement="right" title="Record maintenace activity">
          <img src="images/svg/Record maintenace activity.svg"alt='Record maintenace activity'/>
        </a> */}
      </li>
      <li>
         <Link to='/clientrecordtestingresults' data-toggle="tooltip" data-placement="right" title="Record Testing Results" >
         <img src="images/svg/Record Testing Results.svg"alt='Record Testing Results'/>
             </Link> 
        {/* <Link to='' ></Link> */}

        {/* <a href="record-testing-results.html" data-toggle="tooltip" data-placement="right" title="Record Testing Results">
          <img src="images/svg/Record Testing Results.svg"alt='Record Testing Results'/>
        </a> */}
      </li>
      <li>
         <Link to='/clientrecordinjuries' data-toggle="tooltip" data-placement="right" title="Injuries" >
         <img src="images/svg/Injuries.svg"alt='Injuries'/>
             </Link> 
        {/* <Link to='' ></Link> */}

        {/* <a href="record-injuries.html" data-toggle="tooltip" data-placement="right" title="Injuries">
          <img src="images/svg/Injuries.svg"alt='Injuries'/>
        </a> */}
      </li>
      <li>
         <Link to='/clientrequestmaintenancevisit' data-toggle="tooltip" data-placement="right" title="Request maintenance Visit" >
         <img src="images/svg/Request maintenance Visit.svg"alt='Request maintenance Visit'/>
             </Link> 
        {/* <Link to='' ></Link> */}

        {/* <a href="request-maintenance-visit.html" data-toggle="tooltip" data-placement="right" title="Request maintenance Visit">
          <img src="images/svg/Request maintenance Visit.svg"alt='Request maintenance Visit'/>
        </a> */}
      </li>
      <li>
         <Link to='/clientrequesttestingvisit' data-toggle="tooltip" data-placement="right" title="Request Testing Visit" >
         <img src="images/svg/Request Testing Visit.svg"alt='Request Testing Visit'/>
             </Link> 
        {/* <Link to='' ></Link> */}

        {/* <a href="request-testing-visit.html" data-toggle="tooltip" data-placement="right" title="Request Testing Visit">
          <img src="images/svg/Request Testing Visit.svg"alt='Request Testing Visit'/>
        </a> */}
      </li>
      <li>
         <Link to='/clientviewmaintenancereports' data-toggle="tooltip" data-placement="right" title="View maintenance report" >
         <img src="images/svg/View maintenance report.svg"alt='View maintenance report'/>
             </Link> 
        {/* <Link to='' ></Link> */}

        {/* <a href="view-maintenance-reports.html" data-toggle="tooltip" data-placement="right" title="View maintenance report">
          <img src="images/svg/View maintenance report.svg"alt='View maintenance report'/>
        </a> */}
      </li>
      <li>
         <Link to='/clientviewtestreports' data-toggle="tooltip" data-placement="right" title="View Test reports" >
         <img src="images/svg/View Test reports.svg"alt='View Test reports'/>
             </Link> 
        {/* <Link to='' ></Link> */}

        {/* <a href="view-test-reports.html" data-toggle="tooltip" data-placement="right" title="View Test reports">
          <img src="images/svg/View Test reports.svg"alt='View Test reports'/>
        </a> */}
      </li>
      <li>
         <Link to='/clientmanagenotesandfieldmatters' data-toggle="tooltip" data-placement="right" title="Manage Notes and Field Matters" >
         <img src="images/svg/Manage Notes and Field Matters.svg"alt='Manage Notes and Field Matters'/>
             </Link> 
        {/* <Link to='' ></Link> */}

        {/* <a href="manage-notes-and-field-matters.html" data-toggle="tooltip" data-placement="right" title="Manage Notes and Field Matters">
          <img src="images/svg/Manage Notes and Field Matters.svg"alt='Manage Notes and Field Matters'/>
        </a> */}
      </li>
    </ul>
  </div>
        </>
    )
}

export default ClientSidebar;
