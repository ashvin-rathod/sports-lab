import React from 'react'

// WITHOUT SIDEBAR COMPONENT

const ClientDashboardSummary = () => {
    return (
        <>
            <div className="mobile-show">
  <div id="sidemenu"></div>  
</div>
<div className="full-content">
  <h4 className="small-title">Abu Dhabi Cricket #3</h4>
  <span className="text-primary">ID: 2358</span>
  
  
  <div className="row pt-4">
    <div className="col-md-6 pt-3">
      <h4 className="small-title sm">Usage Hours <div className="add-calendar-icon d-inline-block ">
        <img className="icon" src="images/svg/calendar-line.svg"/>
        <input type="text" className="mt-2 mt-md-0 mt-lg-0 form-control bg-transparent w-auto ml-2" name="daterange" value="01/01/2018 - 01/15/2018" /></div> </h4>
      <div className="chart-div">
      <div id="chartContainer" style={{height: '300px', width: '100%'}}></div>
      </div>
    </div>
    <div className="col-md-6 pt-3">
      <h4 className="small-title sm" style={{marginTop: '14px', marginBottom: '26px'}}>Field Stats</h4>
      <div className="chart-div">
          <div className="row m-0" style={{flex: 1}}>
            <div className="col-lg-3 col-md-6 text-center">
             <div className="progress-circle p30">
                <span>10/30 hrs</span>
                <div className="left-half-clipper">
                  <div className="first50-bar"></div>
                  <div className="value-bar"></div>
                </div>
              </div>
              <p className="progress-title">Usage hours until next Maintenance</p> 
            </div>
            <div className="col-lg-3 col-md-6 text-center">
             <div className="progress-circle p26">
                <span>8/30 hrs</span>
                <div className="left-half-clipper">
                  <div className="first50-bar"></div>
                  <div className="value-bar"></div>
                </div>
              </div>
              <p className="progress-title">Time until next test</p>  
            </div>
            <div className="col-lg-3 col-md-6 text-center">
             <div className="progress-circle over50 p100">
                <span> 3 years</span>
                <div className="left-half-clipper">
                  <div className="first50-bar"></div>
                  <div className="value-bar"></div>
                </div>
              </div> 
              <p className="progress-title">Life Expectancy</p> 
            </div>
            <div className="col-lg-3 col-md-6 text-center">
             <div className="progress-circle p0">
                <span>20</span>
                <div className="left-half-clipper">
                  <div className="first50-bar"></div>
                  <div className="value-bar"></div>
                </div>
              </div> 
              <p className="progress-title text-primary">Number of injuries this year</p> 
            </div>
          </div>
      </div>
       
    </div>
    <div className="col-md-6 pt-3">
      <h4 className="small-title sm" style={{marginTop: '14px', marginBottom: '26px'}}>Latest Test Results <span style={{color: '#51515B', fontFamily: 'MontserratRegular', fontSize: '10px'}}>dd/mm/yyyy</span></h4>
      <div className="chart-div">
      </div>
    </div>
    <div className="col-md-6 pt-3">
      <h4 className="small-title sm" style={{marginTop: '14px', marginBottom: '26px'}}>Latest Maintenance Report</h4>
      <div className="chart-div">
      </div>
    </div>
  </div>
</div>


        </>
    )
}

export default ClientDashboardSummary

