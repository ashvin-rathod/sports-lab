import React from 'react'

//#region admin


const AdminDashboard = React.lazy(() => import('./super-admin/dashboard/Dashboard'));
const AdminAddVenue = React.lazy(() => import('./super-admin/admin-venue/AdminAddVenue'))
const AskQuestion = React.lazy(() => import('./super-admin/admin-components/AskQuestion'))
const AdminChangePassword = React.lazy(() => import('./super-admin/admin-password/AdminChangePassword'))
const AdminNewPass = React.lazy(() => import('./super-admin/admin-password/AdminNewPass'))
const AdminForgotPass = React.lazy(() => import('./super-admin/admin-password/AdminForgotPass'))
const AdminResetPass = React.lazy(() => import('./super-admin/admin-password/AdminResetPass'))
const AdminSummary = React.lazy(() => import('./super-admin/dashboard/AdminSummary'))
const AdminVenues = React.lazy(() => import('./super-admin/admin-venue/AdminVenues'))
const AdminVenuesInfo = React.lazy(() => import('./super-admin/admin-venue/AdminVenuesInfo'))
const AdminVenueMap = React.lazy(() => import('./super-admin/admin-venue/AdminVenueMap'))
const AdminUsage = React.lazy(() => import('./super-admin/admin-components/AdminUsage'))
const AdminGetInTouch = React.lazy(() => import('./super-admin/admin-components/AdminGetInTouch'))
const AdminAddUser = React.lazy(() => import('./super-admin/admin-user/AdminAddUser'))
const AdminManageAccount = React.lazy(() => import('./super-admin/admin-account/AdminManageAccount'))
const AdminManageMaintenanceActivities = React.lazy(() => import('./super-admin/admin-account/AdminManageMaintenanceActivities'))
const AdminManageNotes = React.lazy(() => import('./super-admin/admin-account/AdminManageNotes'))
const AdminNotifications = React.lazy(() => import('./super-admin/admin-components/AdminNotifications'))
const AdminRecordInjuries = React.lazy(() => import('./super-admin/admin-records/AdminRecordInjuries'))
const AdminRecordMaintenanceActivity = React.lazy(() => import('./super-admin/admin-records/AdminRecordMaintenanceActivity'))
const AdminRecordTestingResults = React.lazy(() => import('./super-admin/admin-records/AdminRecordTestingResults'))
const AdminRequests = React.lazy(() => import('./super-admin/admin-requests/AdminRequests'))
const AdminRequestTestingVisit = React.lazy(() => import('./super-admin/admin-requests/AdminRequestTestingVisit'))
const AdminRequestMaintenanceVisit = React.lazy(() => import('./super-admin/admin-requests/AdminRequestMaintenanceVisit'))
const AdminSettings = React.lazy(() => import('./super-admin/admin-components/AdminSettings'))
const AdminMessages = React.lazy(()=> import('./super-admin/admin-components/AdminMessages'))
const AdminTestingOptions = React.lazy(()=> import('./super-admin/admin-components/AdminTestingOptions'))
const AdminUsers = React.lazy(()=> import('./super-admin/admin-user/AdminUsers'))
const AdminViewMaintenanceReports = React.lazy(()=> import('./super-admin/admin-view/AdminViewMaintenanceReports'))
const AdminViewTestReports = React.lazy(()=> import('./super-admin/admin-view/AdminViewTestReports'))
const AdminViewTestReportsDetails = React.lazy(()=> import('./super-admin/admin-view/AdminViewTestReportsDetails'))



//#endregion

// Client Routes start
const ClientAddUsers = React.lazy(()=> import ('./client-portal/client-all-pages/client-users/ClientAddUsers'));
const ClientAddVenues = React.lazy(()=> import ('./client-portal/client-all-pages/client-venues/ClientAddVenues'));
const ClientDashboard = React.lazy(()=> import ('./client-portal/Clientdashboard/ClientDashboard'));
const ClientChangePassword = React.lazy(()=> import ('./client-portal/client-all-pages/client-password/ClientChangePassword'))
const ClientForgotPass = React.lazy(()=> import('./client-portal/client-all-pages/client-password/ClientForgotPass'))
const ClientNewPass = React.lazy(()=> import('./client-portal/client-all-pages/client-password/ClientNewPass'))
const ClientAllPagesLinks = React.lazy(()=> import('./client-portal/client-all-pages/ClientAllPagesLinks'))
const ClientResetPass = React.lazy(()=> import('./client-portal/client-all-pages/client-password/ClientResetPass'))
const ClientGetInTouch = React.lazy(()=> import('./client-portal/client-all-pages/ClientGetInTouch'))
const ClientUsage = React.lazy(()=> import('./client-portal/client-all-pages/ClientUsage'))
const ClientDashboardSummary = React.lazy(()=> import('./client-portal/Clientdashboard/ClientDashboardSummary'))
const ClientVenues = React.lazy(()=> import('./client-portal/client-all-pages/client-venues/ClientVenues'))
const ClientVenueMap = React.lazy(()=> import('./client-portal/client-all-pages/client-venues/ClientVenueMap'))
const ClientVenuesDetailsInfo = React.lazy(()=> import('./client-portal/client-all-pages/client-venues/ClientVenuesDetailsInfo'))
const ClientVenuesDetailsFieldMattersReply = React.lazy(()=> import('./client-portal/client-all-pages/client-venues/ClientVenuesDetailsFieldMattersReply'))
const ClientVenuesDetailsFieldMatters = React.lazy(()=> import('./client-portal/client-all-pages/client-venues/ClientVenuesDetailsFieldMatters'))
const ClientUserEdit = React.lazy(()=> import('./client-portal/client-all-pages/client-users/ClientUsersEdit'))
const ClientUsers = React.lazy(()=> import('./client-portal/client-all-pages/client-users/ClientUsers'))
const ClientCreateAccount = React.lazy(()=> import('./client-portal/client-all-pages/client-account/ClientCreateAccount'))
const ClientManageAccount = React.lazy(()=> import('./client-portal/client-all-pages/client-account/ClientManageAccount'))
const ClientRecordInjuries = React.lazy(()=> import('./client-portal/client-all-pages/client-records/ClientRecordInjuries'))
const ClientRecordMaintenanceActivity = React.lazy(()=> import('./client-portal/client-all-pages/client-records/ClientRecordMaintenanceActivity'))
const ClientRecordTestingResults = React.lazy(()=> import('./client-portal/client-all-pages/client-records/ClientRecordTestingResults'))
const ClientRequestMaintenanceVisit = React.lazy(()=> import('./client-portal/client-all-pages/client-requests/ClientRequestMaintenanceVisit'))
const ClientRequests = React.lazy(()=> import('./client-portal/client-all-pages/client-requests/ClientRequests'))
const ClientRequestTestingVisit = React.lazy(()=> import('./client-portal/client-all-pages/client-requests/ClientRequestTestingVisit'))
const ClientViewMaintenanceReports = React.lazy(()=> import('./client-portal/client-all-pages/client-view/ClientViewMaintenanceReports'))
const ClientViewTestReports = React.lazy(()=> import('./client-portal/client-all-pages/client-view/ClientViewTestReports'))
const ClientViewTestReportsDetails = React.lazy(()=> import('./client-portal/client-all-pages/client-view/ClientViewTestReportsDetails'))
const ClientMessages = React.lazy(()=> import('./client-portal/client-all-pages/ClientMessages'))
const ClientNotifications = React.lazy(()=> import('./client-portal/client-all-pages/ClientNotifications'))
const ClientSettings = React.lazy(()=> import('./client-portal/client-all-pages/ClientSettings'))
const ClientManageMaintenanceActivities = React.lazy(()=> import('./client-portal/client-all-pages/client-manage/ClientManageMaintenanceActivities'))
const ClientManageNotesAndFieldMatters = React.lazy(()=> import('./client-portal/client-all-pages/client-manage/ClientManageNotesAndFieldMatters'))

// End 

// -------------------

const routes = [
    //#region admin

    { path: '/', exact: true, name: 'Home' },
    { path: '/admindashboard', name: 'AdminDashboard', component: AdminDashboard, sidebar: true },
    { path: '/adminsummary', name: 'AdminSummary', component: AdminSummary, sidebar: false, title:'Summary' },
    { path: "/adminaddvenue", exact: true, name: 'AdminAddVenue', component: AdminAddVenue, sidebar: false, title:'Add Venue' },
    { path: "/adminvenues", exact: true, name: 'AdminVenues', component: AdminVenues, sidebar: true },
    { path: "/adminvenueinfo/:id", exact: true, name: 'AdminVenuesInfo', component: AdminVenuesInfo, sidebar: false, title:'View Venue' },
    { path: "/adminvenuemap", exact: true, name: 'AdminVenueMap', component: AdminVenueMap, sidebar: true },
    { path: "/askquestion", exact: true, name: 'AskQuestion', component: AskQuestion, sidebar: false, title:'Ask Question' },
    { path: "/adminchangepass", exact: true, name: 'AdminChangePassword', component: AdminChangePassword, sidebar: false , title:'Change Password'},
    { path: "/adminnewpass", exact: true, name: 'AdminNewPass', component: AdminNewPass, sidebar: false, title:'Change Password' },
    { path: "/adminforgotpass", exact: true, name: 'AdminForgotPass', component: AdminForgotPass, sidebar: false, title:'Forgot Password'  },
    { path: "/adminresetpass", exact: true, name: 'AdminResetPass', component: AdminResetPass, sidebar: false, title:'Forgot Password' },
    { path: "/adminusage", exact: true, name: 'AdminUsage', component: AdminUsage, sidebar: true },
    { path: "/admingetintouch", exact: true, name: 'AdminGetInTouch', component: AdminGetInTouch, sidebar: false, title: 'Get In Touch', showSearchBox : true },
    { path: "/adminusers", exact: true, name: 'AdminUsers', component: AdminUsers, sidebar: true },
    { path: "/adminadduser", exact: true, name: 'AdminAddUser', component: AdminAddUser, sidebar: false, title:'Add User' },
    { path: "/adminmanageaccount", exact: true, name: 'AdminManageAccount', component: AdminManageAccount, sidebar: false, title:'Manage Account' },
    { path: "/adminmanageaccountactivities", exact: true, name: 'AdminManageMaintenanceActivities', component: AdminManageMaintenanceActivities, sidebar: true },
    { path: "/adminmanagenotes", exact: true, name: 'AdminManageNotes', component: AdminManageNotes, sidebar: true },
    { path: "/adminnotifications", exact: true, name: 'AdminNotifications', component: AdminNotifications, sidebar: false, title:'Notifications' },
    { path: "/adminrecordinjuries", exact: true, name: 'AdminRecordInjuries', component: AdminRecordInjuries, sidebar: true },
    { path: "/adminrecordmaintenanceactivity", exact: true, name: 'AdminRecordMaintenanceActivity', component: AdminRecordMaintenanceActivity, sidebar: true },
    { path: "/adminrecordtestingresults", exact: true, name: 'AdminRecordTestingResults', component: AdminRecordTestingResults, sidebar: true },
    { path: "/adminrequests", exact: true, name: 'AdminRequests', component: AdminRequests, sidebar: true },
    { path: "/adminrequesttestingvisit", exact: true, name: 'AdminRequestTestingVisit', component: AdminRequestTestingVisit, sidebar: true },
    { path: "/adminrequestmaintenancevisit", exact: true, name: 'AdminRequestMaintenanceVisit', component: AdminRequestMaintenanceVisit, sidebar: true },
    { path: "/adminsettings", exact: true, name: 'AdminSettings', component: AdminSettings, sidebar: false, title:'Administration' },
    { path: "/adminmessages", exact: true, name: 'AdminMessages', component: AdminMessages, sidebar: false, title: 'Manage Support', showSearchBox : true },
    { path: "/admintestingoptions", exact: true, name: 'AdminTestingOptions', component: AdminTestingOptions, sidebar: false, title:'Testing Options' },
    { path: "/adminviewmaintenancereports", exact: true, name: 'AdminViewMaintenanceReports', component: AdminViewMaintenanceReports, sidebar: true },
    { path: "/adminviewtestreports", exact: true, name: 'AdminViewTestReports', component: AdminViewTestReports, sidebar: true },
    { path: "/adminviewtestreportsdetails", exact: true, name: 'AdminViewTestReportsDetails', component: AdminViewTestReportsDetails, sidebar: false, title:'Back' },




    //#endregion

        //#region client

    { path: '/clientaddusers', name:'AddUsers',exact:true, component : ClientAddUsers,sidebar: false, title: 'Add User'},
    { path: '/clientaddvenues', name:'AddVenues',exact:true, component : ClientAddVenues,sidebar: false, title: 'Add Venue'},
    { path: '/clientdashboard', name:'Dashboard',exact:true, component : ClientDashboard,sidebar: true},
    { path: "/clientchangepassword",  name: 'ClientChangePassword', exact: true, component: ClientChangePassword,sidebar: false, title:'Change Password' },
    { path: '/clientforgotpass', name:'ClientForgotPass', exact:true, component:ClientForgotPass,sidebar: false, title:' Forgot Password'},
    { path: '/clientnewpass', name: 'ClientNewPass', exact:true, component:ClientNewPass,sidebar: false, title:'Change Password' },
    { path: '/clientresetpass', name: 'ClientResetPass', exact:true, component:ClientResetPass,sidebar: false, title:'Forgot Password' },
    { path: '/clientallpageslinks', name: 'ClientAllPagesLinks', exact:true, component:ClientAllPagesLinks,sidebar: false },
    { path: '/clientgetintouch', name: 'ClientGetInTouch', exact:true, component:ClientGetInTouch,sidebar: false, title:'Get In Touch' },
    { path: '/clientusage', name: 'ClientUsage', exact:true, component:ClientUsage,sidebar: true },
    { path: '/clientdashboardsummary', name: 'ClientDashboardSummary', exact:true, component:ClientDashboardSummary,sidebar: false, title:'Summary' }, 
    { path: '/clientvenues', name: 'ClientVenues', exact:true, component:ClientVenues,sidebar: true }, 
    { path: '/clientvenuemap', name: 'ClientVenueMap', exact:true, component:ClientVenueMap,sidebar: true }, 
    { path: '/clientvenuesdetailsinfo', name: 'ClientVenuesDetailsInfo', exact:true, component:ClientVenuesDetailsInfo,sidebar: false, title: 'View Venue' }, 
    { path: '/clientvenuesdetailsfieldmattersreply', name: 'ClientVenuesDetailsFieldMattersReply', exact:true, component:ClientVenuesDetailsFieldMattersReply,sidebar: false, title:'Reply' }, 
    { path: '/ClientVenuesDetailsFieldMatters', name: 'ClientVenuesDetailsFieldMatters', exact:true, component:ClientVenuesDetailsFieldMatters,sidebar: false, title:'View Venue' }, 
    { path: '/clientuseredit', name: 'ClientUserEdit', exact:true, component:ClientUserEdit,sidebar: false, title:'Add User' }, 
    { path: '/clientusers', name: 'ClientUsers', exact:true, component:ClientUsers,sidebar: false, title:'Add User' }, 
    { path: '/clientcreateaccount', name: 'ClientCreateAccount', exact:true, component:ClientCreateAccount, sidebar: false, title: 'Create account' }, 
    { path: '/clientmanageaccount', name: 'ClientManageAccount', exact:true, component:ClientManageAccount, sidebar: false, title: 'Manage Account' }, 
    { path: '/clientrecordinjuries', name: 'ClientRecordInjuries', exact:true, component:ClientRecordInjuries, sidebar: true }, 
    { path: '/clientrecordmaintenanceactivity', name: 'ClientRecordMaintenanceActivity', exact:true, component:ClientRecordMaintenanceActivity, sidebar: true }, 
    { path: '/clientrecordtestingresults', name: 'ClientRecordTestingResults', exact:true, component:ClientRecordTestingResults, sidebar: true }, 
    { path: '/clientrequestmaintenancevisit', name: 'ClientRequestMaintenanceVisit', exact:true, component:ClientRequestMaintenanceVisit, sidebar: true }, 
    { path: '/clientrequests', name: 'ClientRequests', exact:true, component:ClientRequests, sidebar: true }, 
    { path: '/clientrequesttestingvisit', name: 'ClientRequestTestingVisit', exact:true, component:ClientRequestTestingVisit, sidebar: true }, 
    { path: '/clientviewmaintenancereports', name: 'ClientViewMaintenanceReports', exact:true, component:ClientViewMaintenanceReports, sidebar: true }, 
    { path: '/clientviewtestreports', name: 'ClientViewTestReports', exact:true, component:ClientViewTestReports, sidebar: true }, 
    { path: '/clientviewtestreportsdetails', name: 'ClientViewTestReportsDetails', exact:true, component:ClientViewTestReportsDetails, sidebar: false, title: 'Back' }, 
    { path: '/clientmessages', name: 'ClientMessages', exact:true, component:ClientMessages, sidebar: true }, 
    { path: '/clientnotifications', name: 'ClientNotifications', exact:true, component:ClientNotifications, sidebar: false, title: 'Manage Support' }, 
    { path: '/clientsettings', name: 'ClientSettings', exact:true, component:ClientSettings, sidebar: false, title: 'Administration'  }, 
    { path: '/clientmanagemaintenanceactivities', exact:true, component:ClientManageMaintenanceActivities, sidebar: true, name:'ClientManageMaintenanceActivities' }, 
    { path: '/clientmanagenotesandfieldmatters', exact:true, component:ClientManageNotesAndFieldMatters, sidebar: true, name:'ClientManageNotesAndFieldMatters' }, 
]


export default routes;