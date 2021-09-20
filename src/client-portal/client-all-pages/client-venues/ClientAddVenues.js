import React, { Component } from 'react'


const ClientAddVenues = ()=> {

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
                             <input type="text" className="form-control " id="" placeholder="Maintenance company"/>
                           </div>
                         </div>
                         <div className="col-md-12">
                           <div className="form-group">
                             <input type="text" className="form-control " id="" placeholder="Venue Name"/>
                           </div>
                         </div>
                         <div className="col-md-4">
                           <div className="form-group">
                             <input type="text" className="form-control " id="" placeholder="Field Length (m)"/>
                           </div>
                         </div>
                         <div className="col-md-4">
                           <div className="form-group">
                             <input type="text" className="form-control " id="" placeholder="Field Width (m)"/>
                           </div>
                         </div>
                         <div className="col-md-4">
                           <div className="form-group">
                             <input type="text" className="form-control " id="" placeholder="Total field area"/>
                           </div>
                         </div>
                         <div className="col-md-12">
                           <div className="form-group">
                             <input type="text" className="form-control " id="" placeholder="Address"/>
                           </div>
                         </div>
                         <div className="col-md-4">
                           <div className="form-group">
                             <select className="form-control ">
                               <option>Country</option>
                             </select>
                           </div>
                         </div>
                         <div className="col-md-4">
                           <div className="form-group">
                             <select className="form-control ">
                               <option>State</option>
                             </select>
                           </div>
                         </div>
                         <div className="col-md-4">
                           <div className="form-group">
                             <select className="form-control ">
                               <option>City</option>
                             </select>
                           </div>
                         </div>
                         <div className="col-md-12">
                           <div className="form-group">
                             <select className="form-control ">
                               <option>Shockpad type</option>
                             </select>
                           </div>
                         </div>
                         <div className="col-md-12">
                           <div className="form-group">
                             <select className="form-control ">
                               <option>Infill</option>
                             </select>
                           </div>
                         </div>
                         <div className="col-md-4">
                           <div className="form-group">
                             <input type="text" className="form-control " id="" placeholder="Turf Manufacture"/>
                           </div>
                         </div>
                         <div className="col-md-4">
                           <div className="form-group">
                             <input type="text" className="form-control " id="" placeholder="Installer"/>
                           </div>
                         </div>
                         <div className="col-md-4">
                           <div className="form-group">
                             <input type="text" className="form-control " id="" placeholder="Primary Sport"/>
                           </div>
                         </div>
                         <div className="col-md-12">
                           <div className="form-group">
                             <select className="form-control ">
                               <option>Choose Surface Type</option>
                             </select>
                           </div>
                         </div>
                         <div className="col-md-12">
                           <div className="form-group">
                             <textarea rows="5" className="form-control " placeholder="Description"></textarea>
                           </div>
                         </div>
                         
                         
                         <div className="col-md-12">
                           <h4 className="small-title">Upload venue image</h4>
                           <div className="form-group">
                             <div className="upload-file-input">
                               <label>Choose file</label>
                               <input id="uploadFile" value="No file chosen!" style={{fontFamily: 'MontserratMedium'}} className=""/>
                               <div className="fileUpload btn btn-primary">
                                   <span>Upload</span>
                                   <input id="uploadBtn" type="file" className="upload" />
                               </div>
                             </div>
                           </div>
                         </div>
                         <div className="col-md-12 mt-3 text-center">
                           <div className="form-group">
                             <button className=" btn btn-primary btn-width">Add Venue</button>
                           </div>
                         </div>
           
                       </div>
                       
                     </form>
                   </div>
                 </div>
               </div>
             </div>  
           </div>
    
           </>)
        
}
export default ClientAddVenues
