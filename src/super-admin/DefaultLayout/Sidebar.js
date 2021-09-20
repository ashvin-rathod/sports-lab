import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
    return (
        <>
            <div className="side-menu">
                <ul>
                    <li>
                        <Link to='/admindashboard'  title="Dashboard"><img src="images/svg/Dashboard.svg" alt='Dashboard' /></Link>
                        {/* <a href="dashboard.html" data-toggle="tooltip" data-placement="right" title="Dashboard">
                            <img src="images/svg/Dashboard.svg" />
                        </a> */}
                    </li>
                    <li>
                        <Link to='/adminrequests' title="Requests"><img src="images/svg/Requests.svg" /></Link>
                        {/* <a href="/adminrequests" data-toggle="tooltip" data-placement="right" title="Requests">
                            <img src="images/svg/Requests.svg" />
                        </a> */}
                    </li>

                    <li>
                        <Link to='/adminvenues'  title="Venues"> <img src="images/svg/Venues.svg" /></Link>
                        {/* <a href="venues.html" data-toggle="tooltip" data-placement="right" title="Venues">
          <img src="images/svg/Venues.svg"/>
        </a> */}
                    </li>
                    <li>
                        <Link to='/adminusers' title="Users">
                            <img src="images/svg/Users.svg" />
                        </Link>
                    </li>
                    <li>
                        <Link to='/adminusage' title="Usage">
                            <img src="images/svg/Usage.svg" alt='Usage' />
                        </Link>
                    </li>
                    <li>
                        <Link to='/adminrecordmaintenanceactivity' title="Record maintenace activity" >
                            <img src="images/svg/Record maintenace activity.svg" />
                        </Link>
                        {/* <a href="record-maintenance-activity.html" data-toggle="tooltip" data-placement="right" title="Record maintenace activity">
                            <img src="images/svg/Record maintenace activity.svg" />
                        </a> */}
                    </li>
                    <li>
                        <Link to='/adminrecordtestingresults' title="Record Testing Results">
                            <img src="images/svg/Record Testing Results.svg" />
                        </Link>
                        {/* <a href="record-testing-results.html" data-toggle="tooltip" data-placement="right" title="Record Testing Results">
                            <img src="images/svg/Record Testing Results.svg" />
                        </a> */}
                    </li>
                    <li>
                        <Link to='/adminrecordinjuries' title="Injuries" >
                            <img src="images/svg/Injuries.svg" />
                        </Link>
                        {/* <a href="record-injuries.html" data-toggle="tooltip" data-placement="right" title="Injuries">
                            <img src="images/svg/Injuries.svg" />
                        </a> */}
                    </li>
                    <li>
                        <Link to='/adminrequestmaintenancevisit' title="Request maintenance Visit" >
                            <img src="images/svg/Request maintenance Visit.svg" />
                        </Link>
                        {/* <a href="request-maintenance-visit.html" data-toggle="tooltip" data-placement="right" title="Request maintenance Visit">
                            <img src="images/svg/Request maintenance Visit.svg" />
                        </a> */}
                    </li>
                    <li>
                        <Link to='/adminrequesttestingvisit' title="Request Testing Visit">
                            <img src="images/svg/Request Testing Visit.svg" />
                        </Link>
                        {/* <a href="request-testing-visit.html" data-toggle="tooltip" data-placement="right" title="Request Testing Visit">
                            <img src="images/svg/Request Testing Visit.svg" />
                        </a> */}
                    </li>
                    <li>
                        <Link to='/adminviewmaintenancereports' title="View maintenance report">
                            <img src="images/svg/View maintenance report.svg" />
                        </Link>
                        {/* <a href="view-maintenance-reports.html" data-toggle="tooltip" data-placement="right" title="View maintenance report">
                            <img src="images/svg/View maintenance report.svg" />
                        </a> */}
                    </li>
                    <li>
                        <Link to='/adminviewtestreports' title="View Test reports" >
                            <img src="images/svg/View Test reports.svg" />
                        </Link>
                        {/* <a href="view-test-reports.html" data-toggle="tooltip" data-placement="right" title="View Test reports">
                            <img src="images/svg/View Test reports.svg" />
                        </a> */}
                    </li>
                    <li>
                        <Link to='/adminmanageaccountactivities' title="Manage Test Assessments">
                            <img src="images/svg/Manage Test Assessments.svg" />
                        </Link>
                        {/* <a href="manage-maintenance-activities.html" data-toggle="tooltip" data-placement="right" title="Manage Test Assessments">
                            <img src="images/svg/Manage Test Assessments.svg" />
                        </a> */}
                    </li>
                    <li>
                        <Link to='/adminmanagenotes' title="Manage Notes and Field Matters">
                            <img src="images/svg/Manage Notes and Field Matters.svg" />
                        </Link>
                        {/* <a href="manage-notes-and-field-matters.html" data-toggle="tooltip" data-placement="right" title="Manage Notes and Field Matters">
                            <img src="images/svg/Manage Notes and Field Matters.svg" />
                        </a> */}
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Sidebar
