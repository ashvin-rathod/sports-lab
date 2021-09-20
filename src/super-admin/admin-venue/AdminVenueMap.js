import React from 'react'
import { Link } from 'react-router-dom'

const AdminVenueMap = () => {
    return (
        <>
            <div className="lrm-content">
                <div className="row align-items-center">
                    <div className="col-lg-4">
                        <h4 className="small-title">Venues <span className="mini-dot"></span>
                        <Link to='/adminvenues' className="ml-2 subs">View as List </Link>
                
                        </h4>
                    </div>
                    <div className="col-lg-8">
                        <div className="search-flex">

                            <input type="text" name="" placeholder="Search" className="form-control" />
                            <button className="btn btn-primary"><i className="fa fa-search"></i> </button>
                            <a href="add-venues.html" className="btn btn-primary add">Add Venue</a>
                        </div>
                    </div>
                </div>
                <div className="mt-3">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462560.30119248957!2d54.94755295040117!3d25.076381469564662!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2sDubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sin!4v1625647389139!5m2!1sen!2sin" className="dubai-map" style={{border:0}} allowFullScreen="" loading="lazy"></iframe>
                </div>
            </div>
        </>
    )
}

export default AdminVenueMap
