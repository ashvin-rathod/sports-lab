import React, { useState, useEffect } from 'react';
import CanvasDraw from 'react-canvas-draw';
import './ClientAddUsers';

const ClientAddUsers = () => {
  const [showPass, setShowPass] = useState(false);
  const [showPassCon, setShowPassCon] = useState(false);
  

  useEffect(() => {
    var canvas = document.getElementById('art');
    var ctx = canvas.getContext('2d');

    function getMousePos(canvas, evt) {
      var rect = canvas.getBoundingClientRect();
      return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top,
      };
    }

    function mouseMove(evt) {
      var mousePos = getMousePos(canvas, evt);
      ctx.lineTo(mousePos.x, mousePos.y);
      ctx.stroke();
    }

    canvas.addEventListener('mousedown', function (evt) {
      var mousePos = getMousePos(canvas, evt);
      ctx.beginPath();
      ctx.moveTo(mousePos.x, mousePos.y);
      evt.preventDefault();
      canvas.addEventListener('mousemove', mouseMove, false);
    });

    canvas.addEventListener(
      'mouseup',
      function () {
        canvas.removeEventListener('mousemove', mouseMove, false);
      },
      false
    );

    document.getElementById('reset').addEventListener(
      'click',
      function () {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      },
      false
    );
  }, []);

  return (
    <>
      <div className="full-content">
  <div className="row justify-content-center">
    <div className="col-lg-8 col-md-10">
      <div className="card">

        <div className="card-body">
          <ul className="edit-user-nav nav nav-tabs ml-auto mr-auto" id="myTab" role="tablist" style={{maxwidth: "550px;"}}>
            <li className="nav-item" role="presentation">
              <a className="nav-link active" id="home-tab1" data-toggle="tab" href="#home1" role="tab" aria-controls="home1" aria-selected="true">MAINT Contractor</a>
            </li>
            <li className="nav-item" role="presentation">
              <a className="nav-link" id="home-tab2" data-toggle="tab" href="#home2" role="tab" aria-controls="home2" aria-selected="true">Testing Company</a>
            </li>
            <li className="nav-item" role="presentation">
              <a className="nav-link" id="home-tab3" data-toggle="tab" href="#home3" role="tab" aria-controls="home3" aria-selected="true">Client</a>
            </li>
          </ul>
          <div className="tab-content">            
            <div className="tab-pane  active" id="home1" role="tabpanel" aria-labelledby="home-tab1">
              <form>
                <div className="row">
                  <div className="col-md-12 text-center">
                    <div className="row align-items-center justify-content-center" style={{minHeight: "400px"}}>
                      <div className="col-md-10">
                        <button className="maintenance-button"><img src="images/svg/plus.svg" alt='plus' /> Add Maintenance Contractor</button>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12 pt-3 text-center">
                    <div className="form-group">
                      <button className=" btn btn-primary btn-width">Add User</button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div className="tab-pane" id="home2" role="tabpanel" aria-labelledby="home-tab2">
              <form>
                <div className="row">
                  <div className="col-md-12 text-center">
                    <div className="row align-items-center justify-content-center" style={{minHeight: "400px"}}>
                      <div className="col-md-10">
                        <button className="maintenance-button"><img src="images/svg/plus.svg" alt='plus' /> Add Maintenance Contractor</button>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12 pt-3 text-center">
                    <div className="form-group">
                      <button className=" btn btn-primary btn-width">Add User</button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div className="tab-pane" id="home3" role="tabpanel" aria-labelledby="home-tab3">
              <form action="">
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input type="text" className="form-control" id="" placeholder="First Name"/>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input type="text" className="form-control" id="" placeholder="Last Name"/>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <input type="text" className="form-control" id="" placeholder="Email"/>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input type="text" className="form-control" id="" placeholder="Phone"/>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input type="text" className="form-control" id="" placeholder="Job Title"/>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <select className="form-control">
                        <option>Choose User Type</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group password-icon">
                      <input type={showPass ? 'text' : 'password'} className="form-control" id="typepass" placeholder="Password"/>
                      <img src="images/svg/eye-close-line.svg" className="icon" onClick={() => setShowPass(!showPass)} alt='plus' />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group password-icon">                                              
                      <input type={showPassCon ? 'text' : 'password'} className="form-control" id="typepass2" placeholder="Confirm Password"/>
                      <img src="images/svg/eye-close-line.svg" className="icon" onClick={ () => setShowPassCon(!showPassCon)} alt='plus' />
                    </div>
                  </div>
                   <div className="col-md-12">
                    <div className="form-group">
                      <input type="text" placeholder="Address" className="form-control" name=""/>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <select className="form-control">
                        <option>Assign venue</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-12 pt-2">
                    <h4 className="small-title">Permissions</h4>
                    <div className="form-group d-inline-block mr-2">
                      <div className="toggle">
                        <input type="checkbox" name="" defaultChecked="true"/>
                        <div className="tbox"><span></span> </div>
                        <div className="txt">Add venues</div>
                      </div>
                    </div>
                    <div className="form-group d-inline-block mr-2">
                      <div className="toggle">
                        <input type="checkbox" name="" defaultChecked="true"/>
                        <div className="tbox"><span></span> </div>
                        <div className="txt">Submit test results</div>
                      </div>
                    </div>
                    <div className="form-group d-inline-block mr-2">
                      <div className="toggle">
                        <input type="checkbox" name="" defaultChecked="true"/>
                        <div className="tbox"><span></span> </div>
                        <div className="txt">Under take test</div>
                      </div>
                    </div>
                    <div className="form-group d-inline-block mr-2">
                      <div className="toggle">
                        <input type="checkbox" name="" defaultChecked="true"/>
                        <div className="tbox"><span></span> </div>
                        <div className="txt">Make maintenance request</div>
                      </div>
                    </div>
                    <div className="form-group d-inline-block mr-2">
                      <div className="toggle">
                        <input type="checkbox" name="" defaultChecked="true"/>
                        <div className="tbox"><span></span> </div>
                        <div className="txt">Add users</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12 pt-2">
                    <h4 className="small-title">Upload image</h4>
                    <div className="form-group">
                      <div className="upload-file-input">
                        <label>Choose file</label>
                        <input id="uploadFile" value="No file chosen!" className=""/>
                        <div className="fileUpload btn btn-primary">
                            <span>Upload</span>
                            <input id="uploadBtn" type="file" className="upload" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12 pt-2">
                      <ul className="edit-user-nav nav nav-tabs mb-0 " id="myTabNew" role="tablist" style={{ maxWidth: "300px"}}>
                        <li className="nav-item" role="presentation">
                          <a className="nav-link active" id="home-tb1" data-toggle="tab" href="#hom1" role="tab" aria-controls="hom1" aria-selected="true">Draw</a>
                        </li>
                        <li className="nav-item" role="presentation">
                          <a className="nav-link" id="home-tb2" data-toggle="tab" href="#hom2" role="tab" aria-controls="hom2" aria-selected="true">Upload</a>
                        </li>
                      </ul>
                      <div className="tab-content">            
                        <div className="tab-pane  active" id="hom1" role="tabpanel" aria-labelledby="home-tb1">
                          <div className="canvas-draw">
                            <canvas width="300"  height="100px" id="art" style={{cursor: 'crosshair', backgroundColor: '#f7f7f7'}}></canvas>
                            <input type="button" className="canvas-clear-btn ml-2" id="reset" value="Clear"/>
                          </div>
                        </div>
                        <div className="tab-pane" id="hom2" role="tabpanel" aria-labelledby="home-tb2">
                          <div className="form-group mt-3">
                            <div className="upload-file-input">
                              <label>Choose file</label>
                              <input id="uploadFile2" value="No file chosen!" className=""/>
                              <div className="fileUpload btn btn-primary">
                                  <span>Upload</span>
                                  <input id="uploadBtn2" type="file" className="upload" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                  </div>




                  
                  
  
   

                  <div className="col-md-12 pt-3 text-center">
                    <div className="form-group">
                      <button className=" btn btn-primary btn-width">Add User</button>
                    </div>
                  </div>
               
                

                </div>
                
              </form>
            </div>
            
          </div>
          
        </div>
      </div>
    </div>
  </div>  
</div>
    </>
  );

};

export default ClientAddUsers;








