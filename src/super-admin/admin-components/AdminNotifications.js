import React from 'react'

const AdminNotifications = () => {
    return (
        <>
            <div className="container-fluid " style={{ marginTop: '80px' }}>
                <div className="col-12">
                    <div className="row align-items-center">
                        <div className="col-8">
                            <div className="col-12">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" name="" value="" id="checkall" />
                                    <label className="form-check-label" htmlFor="checkall">
                                        Select All
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="col-4 text-right">
                            <button className="delete-btn">
                                <img src="images/svg/delete.svg" alt='bin' />
                            </button>
                        </div>
                    </div>
                    <div className="noti-div">
                        <div className="noti">
                            <input className="form-check-input checkall" type="checkbox" value="" id="" />
                            <img src="images/dummy-profile.png" alt='profile' />
                            <p>A new report has been submitted by Martin Williams.</p>
                            <a href="">View Now</a>
                            <h6>Just now</h6>
                        </div>
                        <div className="noti">
                            <input className="form-check-input checkall" type="checkbox" value="" id="" />
                            <img src="images/dummy-profile.png" alt='profile' />
                            <p>A new field matter has been submitted by Ashley M.</p>
                            <a href="">View Now</a>
                            <h6>Sun</h6>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminNotifications
