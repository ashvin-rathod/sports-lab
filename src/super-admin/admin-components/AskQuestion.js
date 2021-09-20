import React from 'react'
import { useState } from 'react'

const AskQuestion = () => {
    const priorityStatus = ['Active','Deactive','Waiting','New','Blocked']
    const [subject, setSubject] = useState('')
    const [priority, setPriority] = useState(priorityStatus)
    const [description, setDescription] = useState('')
    return (
        <>
            <div className="mobile-show">
                <div id="sidemenu"></div>
            </div>
            <div className="full-content">
                <div className="row justify-content-center">
                    <div className="col-lg-8 col-md-10">
                        <div className="card">
                            <div className="card-body">
                                <form action="">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <input type="text" value={subject} onChange={(e)=> setSubject(e.target.value)} className="form-control" id="" placeholder="Subject" />
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <select className="form-control">
                                                   {
                                                       priority.map((item,i)=><option key={i} value={item} >{item}</option>)
                                                   }
                                                    <option>Priority</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <textarea rows="5" value={description} onChange={(e)=> setDescription(e.target.value)}  className="form-control" placeholder="Description"></textarea>
                                            </div>
                                        </div>
                                        <div className="col-md-12 pt-2">
                                            <h4 className="small-title">Attach Media</h4>
                                            <div className="form-group">
                                                <div className="upload-file-input">
                                                    <label>Choose file</label>
                                                    <input type="file"  name="file" id="uploadFile" placeholder="No file chosen!" className="file-Choose-btn" style={{fontFamily: 'MontserratMedium'}}/>
                                                    <div className="fileUpload btn btn-primary">
                                                        <span>Upload</span>
                                                        <input id="uploadBtn" type="file" className="upload" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-12 mt-3 text-center">
                                            <div className="form-group">
                                                <button className=" btn btn-primary btn-width">Update</button>
                                            </div>
                                        </div>

                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default AskQuestion
