import React from 'react'

const ClientViewTestReportsDetails = () => {
    return (
        <>
            <div className="full-content viewport-center">
                <div className="row justify-content-center w-100">
                    <div className="col-lg-6 col-md-8">
                        <div className="card">
                            <div className="card-body">
                                <div className="table-responsive">
                                    <table className="table table-borderless color-dark venues-tbl">
                                        <tbody><tr>
                                            <th>Report No.</th>
                                            <td className="opacity-06 text-right">2358</td>
                                        </tr>
                                            <tr>
                                                <th>Venue Name</th>
                                                <td className="opacity-06 text-right">Abu Dhabi Cricket #3</td>
                                            </tr>
                                            <tr>
                                                <th>Assessment Type</th>
                                                <td className="opacity-06 text-right">Type here</td>
                                            </tr>
                                            <tr>
                                                <th>Submitted by</th>
                                                <td className="opacity-06 text-right">Kathryn Griffin</td>
                                            </tr>
                                            <tr>
                                                <th>Submission Date</th>
                                                <td className="opacity-06 text-right">dd/mm/yyyy</td>
                                            </tr>
                                        </tbody></table>
                                </div>
                                <ul className="actions-ul mt-3">
                                    <li className="m-semibold mr-auto">Actions</li>
                                    <li><button className="delete-btn"><img src="images/svg/view-v2.svg" alt='view' /> </button></li>
                                    <li><button className="delete-btn"><img src="images/svg/Mail.svg" alt='view' /> </button></li>
                                    <li><button className="delete-btn"><img src="images/svg/Cloud.svg" alt='view' /> </button></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ClientViewTestReportsDetails
