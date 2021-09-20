import React from 'react'

const AdminTestingOptions = () => {
    return (
        <>
            <div className="full-content">
                <div className="row justify-content-center">
                    <div className="col-lg-12">
                        <div className="card">

                            <div className="card-body">
                                <ul className="edit-user-nav nav nav-tabs ml-auto mr-auto" id="myTab" role="tablist" style={{maxWidth: '830px'}}>
                                    <li className="nav-item" role="presentation">
                                        <a className="nav-link active" id="home-tab1" data-toggle="tab" href="#home1" role="tab" aria-controls="home1" aria-selected="true">Gmax</a>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <a className="nav-link" id="home-tab2" data-toggle="tab" href="#home2" role="tab" aria-controls="home2" aria-selected="true">HIC</a>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <a className="nav-link" id="home-tab3" data-toggle="tab" href="#home3" role="tab" aria-controls="home3" aria-selected="true">Location Maps</a>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <a className="nav-link" id="home-tab4" data-toggle="tab" href="#home4" role="tab" aria-controls="home4" aria-selected="true">Location Description</a>
                                    </li>
                                </ul>
                                <div className="tab-content">
                                    <div className="tab-pane  active" id="home1" role="tabpanel" aria-labelledby="home-tab1">
                                        <form>
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <div className="table-responsive gmax-table">
                                                        <table className="table table-bordered vertical-align-top">
                                                            <thead>
                                                                <tr>
                                                                    <th scope="col" style={{borderWidth: '1px',borderBottom: 0}}>Location</th>
                                                                    <th scope="col" style={{borderWidth: '1px',borderBottom: 0}}>Gmax</th>
                                                                    <th scope="col" style={{borderWidth: '1px',borderBottom: 0}}>Drop Height (cm)</th>
                                                                    <th scope="col" style={{borderWidth: '1px',borderBottom: 0}}>Impact Velocity (m/s)</th>
                                                                    <th scope="col" style={{borderWidth: '1px',borderBottom: 0}}>Infill Depth</th>
                                                                    <th scope="col" style={{borderWidth: '1px',borderBottom: 0}}>Surface Temp</th>
                                                                    <th scope="col" style={{borderWidth: '1px',borderBottom: 0}}>Gmax Average Drop 2 & 3</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td rowspan="3" style={{borderTop: 0}}>1</td>
                                                                    <td style={{borderTop: 0}}></td>
                                                                    <td style={{borderTop: 0}}>61.0</td>
                                                                    <td style={{borderTop: 0}}>3.5</td>
                                                                    <td rowspan="3" style={{borderTop: 0}}></td>
                                                                    <td rowspan="3" style={{borderTop: 0}}></td>
                                                                    <td rowspan="3" style={{borderTop: 0}}></td>
                                                                </tr>
                                                                <tr>
                                                                    <td></td>
                                                                    <td>61.0</td>
                                                                    <td>3.5</td>
                                                                </tr>
                                                                <tr>
                                                                    <td></td>
                                                                    <td>61.0</td>
                                                                    <td>3.5</td>
                                                                </tr>
                                                                <tr>
                                                                    <td rowspan="3" style={{borderTop: 0}}>2</td>
                                                                    <td style={{borderTop: 0}}></td>
                                                                    <td style={{borderTop: 0}}>61.0</td>
                                                                    <td style={{borderTop: 0}}>3.5</td>
                                                                    <td rowspan="3" style={{borderTop: 0}}></td>
                                                                    <td rowspan="3" style={{borderTop: 0}}></td>
                                                                    <td rowspan="3" style={{borderTop: 0}}></td>
                                                                </tr>
                                                                <tr>
                                                                    <td></td>
                                                                    <td>61.0</td>
                                                                    <td>3.5</td>
                                                                </tr>
                                                                <tr>
                                                                    <td></td>
                                                                    <td>61.0</td>
                                                                    <td>3.5</td>
                                                                </tr>
                                                                <tr>
                                                                    <td rowspan="3" style={{borderTop: 0}}>3</td>
                                                                    <td style={{borderTop: 0}}></td>
                                                                    <td style={{borderTop: 0}}>61.0</td>
                                                                    <td style={{borderTop: 0}}>3.5</td>
                                                                    <td rowspan="3" style={{borderTop: 0}}></td>
                                                                    <td rowspan="3" style={{borderTop: 0}}></td>
                                                                    <td rowspan="3" style={{borderTop: 0}}></td>
                                                                </tr>
                                                                <tr>
                                                                    <td></td>
                                                                    <td>61.0</td>
                                                                    <td>3.5</td>
                                                                </tr>
                                                                <tr>
                                                                    <td></td>
                                                                    <td>61.0</td>
                                                                    <td>3.5</td>
                                                                </tr>
                                                                <tr>
                                                                    <td rowspan="3" style={{borderTop: 0}}>4</td>
                                                                    <td style={{borderTop: 0}}></td>
                                                                    <td style={{borderTop: 0}}>61.0</td>
                                                                    <td style={{borderTop: 0}}>3.5</td>
                                                                    <td rowspan="3" style={{borderTop: 0}}></td>
                                                                    <td rowspan="3" style={{borderTop: 0}}></td>
                                                                    <td rowspan="3" style={{borderTop: 0}}></td>
                                                                </tr>
                                                                <tr>
                                                                    <td></td>
                                                                    <td>61.0</td>
                                                                    <td>3.5</td>
                                                                </tr>
                                                                <tr>
                                                                    <td></td>
                                                                    <td>61.0</td>
                                                                    <td>3.5</td>
                                                                </tr>
                                                                <tr>
                                                                    <td rowspan="3" style={{borderTop: 0}}>5</td>
                                                                    <td style={{borderTop: 0}}></td>
                                                                    <td style={{borderTop: 0}}>61.0</td>
                                                                    <td style={{borderTop: 0}}>3.5</td>
                                                                    <td rowspan="3" style={{borderTop: 0}}></td>
                                                                    <td rowspan="3" style={{borderTop: 0}}></td>
                                                                    <td rowspan="3" style={{borderTop: 0}}></td>
                                                                </tr>
                                                                <tr>
                                                                    <td></td>
                                                                    <td>61.0</td>
                                                                    <td>3.5</td>
                                                                </tr>
                                                                <tr>
                                                                    <td></td>
                                                                    <td>61.0</td>
                                                                    <td>3.5</td>
                                                                </tr>
                                                                <tr>
                                                                    <td rowspan="3" style={{borderTop: 0}}>6</td>
                                                                    <td style={{borderTop: 0}}></td>
                                                                    <td style={{borderTop: 0}}>61.0</td>
                                                                    <td style={{borderTop: 0}}>3.5</td>
                                                                    <td rowspan="3" style={{borderTop: 0}}></td>
                                                                    <td rowspan="3" style={{borderTop: 0}}></td>
                                                                    <td rowspan="3" style={{borderTop: 0}}></td>
                                                                </tr>
                                                                <tr>
                                                                    <td></td>
                                                                    <td>61.0</td>
                                                                    <td>3.5</td>
                                                                </tr>
                                                                <tr>
                                                                    <td></td>
                                                                    <td>61.0</td>
                                                                    <td>3.5</td>
                                                                </tr>
                                                                <tr>
                                                                    <td rowspan="3" style={{borderTop: 0}}>7</td>
                                                                    <td style={{borderTop: 0}}></td>
                                                                    <td style={{borderTop: 0}}>61.0</td>
                                                                    <td style={{borderTop: 0}}>3.5</td>
                                                                    <td rowspan="3" style={{borderTop: 0}}></td>
                                                                    <td rowspan="3" style={{borderTop: 0}}></td>
                                                                    <td rowspan="3" style={{borderTop: 0}}></td>
                                                                </tr>
                                                                <tr>
                                                                    <td></td>
                                                                    <td>61.0</td>
                                                                    <td>3.5</td>
                                                                </tr>
                                                                <tr>
                                                                    <td></td>
                                                                    <td>61.0</td>
                                                                    <td>3.5</td>
                                                                </tr>
                                                                <tr>
                                                                    <td rowspan="3" style={{borderTop: 0}}>8</td>
                                                                    <td style={{borderTop: 0}}></td>
                                                                    <td style={{borderTop: 0}}>61.0</td>
                                                                    <td style={{borderTop: 0}}>3.5</td>
                                                                    <td rowspan="3" style={{borderTop: 0}}></td>
                                                                    <td rowspan="3" style={{borderTop: 0}}></td>
                                                                    <td rowspan="3" style={{borderTop: 0}}></td>
                                                                </tr>
                                                                <tr>
                                                                    <td></td>
                                                                    <td>61.0</td>
                                                                    <td>3.5</td>
                                                                </tr>
                                                                <tr>
                                                                    <td></td>
                                                                    <td>61.0</td>
                                                                    <td>3.5</td>
                                                                </tr>
                                                                <tr>
                                                                    <td rowspan="3" style={{borderTop: 0}}>9</td>
                                                                    <td style={{borderTop: 0}}></td>
                                                                    <td style={{borderTop: 0}}>61.0</td>
                                                                    <td style={{borderTop: 0}}>3.5</td>
                                                                    <td rowspan="3" style={{borderTop: 0}}></td>
                                                                    <td rowspan="3" style={{borderTop: 0}}></td>
                                                                    <td rowspan="3" style={{borderTop: 0}}></td>
                                                                </tr>
                                                                <tr>
                                                                    <td></td>
                                                                    <td>61.0</td>
                                                                    <td>3.5</td>
                                                                </tr>
                                                                <tr>
                                                                    <td></td>
                                                                    <td>61.0</td>
                                                                    <td>3.5</td>
                                                                </tr>
                                                                <tr>
                                                                    <td rowspan="3" style={{borderTop: 0}}>10</td>
                                                                    <td style={{borderTop: 0}}></td>
                                                                    <td style={{borderTop: 0}}>61.0</td>
                                                                    <td style={{borderTop: 0}}>3.5</td>
                                                                    <td rowspan="3" style={{borderTop: 0}}></td>
                                                                    <td rowspan="3" style={{borderTop: 0}}></td>
                                                                    <td rowspan="3" style={{borderTop: 0}}></td>
                                                                </tr>
                                                                <tr>
                                                                    <td></td>
                                                                    <td>61.0</td>
                                                                    <td>3.5</td>
                                                                </tr>
                                                                <tr>
                                                                    <td></td>
                                                                    <td>61.0</td>
                                                                    <td>3.5</td>
                                                                </tr>

                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                                <div className="col-md-12 pt-3 text-center">
                                                    <div className="form-group">
                                                        <button className=" btn btn-primary btn-width">Save</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="tab-pane" id="home2" role="tabpanel" aria-labelledby="home-tab2">
                                        <div className="table-responsive hic-table">
                                            <table className="table table-bordered vertical-align-top mb-4">
                                                <tr>
                                                    <th scope="col">Location</th>
                                                    <th scope="col" colspan="2">Drop 1 Height</th>
                                                    <th scope="col" colspan="2">Drop 2 Height</th>
                                                    <th scope="col" colspan="2">Drop 3 Height</th>
                                                    <th scope="col" colspan="2">Drop 4 Height</th>
                                                    <th scope="col" rowspan="3" style={{width: '20%',textAlign: 'center', verticalAlign: 'middle'}}>CFH</th>
                                                </tr>
                                                <tr>
                                                    <td rowspan="2">1</td>
                                                    <th>HIC</th>
                                                    <th>Gmax</th>
                                                    <th>HIC</th>
                                                    <th>Gmax</th>
                                                    <th>HIC</th>
                                                    <th>Gmax</th>
                                                    <th>HIC</th>
                                                    <th>Gmax</th>
                                                </tr>
                                                <tr>
                                                    <th></th>
                                                    <th></th>
                                                    <th></th>
                                                    <th></th>
                                                    <th></th>
                                                    <th></th>
                                                    <th></th>
                                                    <th></th>
                                                </tr>
                                            </table>
                                            <table className="table table-bordered vertical-align-top mb-4">
                                                <tr>
                                                    <th scope="col">Location</th>
                                                    <th scope="col" colspan="2">Drop 1 Height</th>
                                                    <th scope="col" colspan="2">Drop 2 Height</th>
                                                    <th scope="col" colspan="2">Drop 3 Height</th>
                                                    <th scope="col" colspan="2">Drop 4 Height</th>
                                                    <th scope="col" rowspan="3" style={{width: '20%',textAlign: 'center', verticalAlign: 'middle'}}>CFH</th>
                                                </tr>
                                                <tr>
                                                    <td rowspan="2">2</td>
                                                    <th>HIC</th>
                                                    <th>Gmax</th>
                                                    <th>HIC</th>
                                                    <th>Gmax</th>
                                                    <th>HIC</th>
                                                    <th>Gmax</th>
                                                    <th>HIC</th>
                                                    <th>Gmax</th>
                                                </tr>
                                                <tr>
                                                    <th></th>
                                                    <th></th>
                                                    <th></th>
                                                    <th></th>
                                                    <th></th>
                                                    <th></th>
                                                    <th></th>
                                                    <th></th>
                                                </tr>
                                            </table>
                                            <table className="table table-bordered vertical-align-top mb-4">
                                                <tr>
                                                    <th scope="col">Location</th>
                                                    <th scope="col" colspan="2">Drop 1 Height</th>
                                                    <th scope="col" colspan="2">Drop 2 Height</th>
                                                    <th scope="col" colspan="2">Drop 3 Height</th>
                                                    <th scope="col" colspan="2">Drop 4 Height</th>
                                                    <th scope="col" rowspan="3" style={{width: '20%',textAlign: 'center', verticalAlign: 'middle'}}>CFH</th>
                                                </tr>
                                                <tr>
                                                    <td rowspan="2">3</td>
                                                    <th>HIC</th>
                                                    <th>Gmax</th>
                                                    <th>HIC</th>
                                                    <th>Gmax</th>
                                                    <th>HIC</th>
                                                    <th>Gmax</th>
                                                    <th>HIC</th>
                                                    <th>Gmax</th>
                                                </tr>
                                                <tr>
                                                    <th></th>
                                                    <th></th>
                                                    <th></th>
                                                    <th></th>
                                                    <th></th>
                                                    <th></th>
                                                    <th></th>
                                                    <th></th>
                                                </tr>
                                            </table>
                                            <table className="table table-bordered vertical-align-top mb-4">
                                                <tr>
                                                    <th scope="col">Location</th>
                                                    <th scope="col" colspan="2">Drop 1 Height</th>
                                                    <th scope="col" colspan="2">Drop 2 Height</th>
                                                    <th scope="col" colspan="2">Drop 3 Height</th>
                                                    <th scope="col" colspan="2">Drop 4 Height</th>
                                                    <th scope="col" rowspan="3" style={{width: '20%',textAlign: 'center', verticalAlign: 'middle'}}>CFH</th>
                                                </tr>
                                                <tr>
                                                    <td rowspan="2">4</td>
                                                    <th>HIC</th>
                                                    <th>Gmax</th>
                                                    <th>HIC</th>
                                                    <th>Gmax</th>
                                                    <th>HIC</th>
                                                    <th>Gmax</th>
                                                    <th>HIC</th>
                                                    <th>Gmax</th>
                                                </tr>
                                                <tr>
                                                    <th></th>
                                                    <th></th>
                                                    <th></th>
                                                    <th></th>
                                                    <th></th>
                                                    <th></th>
                                                    <th></th>
                                                    <th></th>
                                                </tr>
                                            </table>
                                            <table className="table table-bordered vertical-align-top mb-4">
                                                <tr>
                                                    <th scope="col">Location</th>
                                                    <th scope="col" colspan="2">Drop 1 Height</th>
                                                    <th scope="col" colspan="2">Drop 2 Height</th>
                                                    <th scope="col" colspan="2">Drop 3 Height</th>
                                                    <th scope="col" colspan="2">Drop 4 Height</th>
                                                    <th scope="col" rowspan="3" style={{width: '20%',textAlign: 'center', verticalAlign: 'middle'}}>CFH</th>
                                                </tr>
                                                <tr>
                                                    <td rowspan="2">5</td>
                                                    <th>HIC</th>
                                                    <th>Gmax</th>
                                                    <th>HIC</th>
                                                    <th>Gmax</th>
                                                    <th>HIC</th>
                                                    <th>Gmax</th>
                                                    <th>HIC</th>
                                                    <th>Gmax</th>
                                                </tr>
                                                <tr>
                                                    <th></th>
                                                    <th></th>
                                                    <th></th>
                                                    <th></th>
                                                    <th></th>
                                                    <th></th>
                                                    <th></th>
                                                    <th></th>
                                                </tr>
                                            </table>
                                            <table className="table table-bordered vertical-align-top mb-4">
                                                <tr>
                                                    <th scope="col">Location</th>
                                                    <th scope="col" colspan="2">Drop 1 Height</th>
                                                    <th scope="col" colspan="2">Drop 2 Height</th>
                                                    <th scope="col" colspan="2">Drop 3 Height</th>
                                                    <th scope="col" colspan="2">Drop 4 Height</th>
                                                    <th scope="col" rowspan="3" style={{width: '20%',textAlign: 'center', verticalAlign: 'middle'}}>CFH</th>
                                                </tr>
                                                <tr>
                                                    <td rowspan="2">6</td>
                                                    <th>HIC</th>
                                                    <th>Gmax</th>
                                                    <th>HIC</th>
                                                    <th>Gmax</th>
                                                    <th>HIC</th>
                                                    <th>Gmax</th>
                                                    <th>HIC</th>
                                                    <th>Gmax</th>
                                                </tr>
                                                <tr>
                                                    <th></th>
                                                    <th></th>
                                                    <th></th>
                                                    <th></th>
                                                    <th></th>
                                                    <th></th>
                                                    <th></th>
                                                    <th></th>
                                                </tr>
                                            </table>
                                            <table className="table table-bordered vertical-align-top mb-4">
                                                <tr>
                                                    <th scope="col">Location</th>
                                                    <th scope="col" colspan="2">Drop 1 Height</th>
                                                    <th scope="col" colspan="2">Drop 2 Height</th>
                                                    <th scope="col" colspan="2">Drop 3 Height</th>
                                                    <th scope="col" colspan="2">Drop 4 Height</th>
                                                    <th scope="col" rowspan="3" style={{width: '20%',textAlign: 'center', verticalAlign: 'middle'}}>CFH</th>
                                                </tr>
                                                <tr>
                                                    <td rowspan="2">7</td>
                                                    <th>HIC</th>
                                                    <th>Gmax</th>
                                                    <th>HIC</th>
                                                    <th>Gmax</th>
                                                    <th>HIC</th>
                                                    <th>Gmax</th>
                                                    <th>HIC</th>
                                                    <th>Gmax</th>
                                                </tr>
                                                <tr>
                                                    <th></th>
                                                    <th></th>
                                                    <th></th>
                                                    <th></th>
                                                    <th></th>
                                                    <th></th>
                                                    <th></th>
                                                    <th></th>
                                                </tr>
                                            </table>
                                            <table className="table table-bordered vertical-align-top mb-4">
                                                <tr>
                                                    <th scope="col">Location</th>
                                                    <th scope="col" colspan="2">Drop 1 Height</th>
                                                    <th scope="col" colspan="2">Drop 2 Height</th>
                                                    <th scope="col" colspan="2">Drop 3 Height</th>
                                                    <th scope="col" colspan="2">Drop 4 Height</th>
                                                    <th scope="col" rowspan="3" style={{width: '20%',textAlign: 'center', verticalAlign: 'middle'}}>CFH</th>
                                                </tr>
                                                <tr>
                                                    <td rowspan="2">8</td>
                                                    <th>HIC</th>
                                                    <th>Gmax</th>
                                                    <th>HIC</th>
                                                    <th>Gmax</th>
                                                    <th>HIC</th>
                                                    <th>Gmax</th>
                                                    <th>HIC</th>
                                                    <th>Gmax</th>
                                                </tr>
                                                <tr>
                                                    <th></th>
                                                    <th></th>
                                                    <th></th>
                                                    <th></th>
                                                    <th></th>
                                                    <th></th>
                                                    <th></th>
                                                    <th></th>
                                                </tr>
                                            </table>
                                            <table className="table table-bordered vertical-align-top mb-4">
                                                <tr>
                                                    <th scope="col">Location</th>
                                                    <th scope="col" colspan="2">Drop 1 Height</th>
                                                    <th scope="col" colspan="2">Drop 2 Height</th>
                                                    <th scope="col" colspan="2">Drop 3 Height</th>
                                                    <th scope="col" colspan="2">Drop 4 Height</th>
                                                    <th scope="col" rowspan="3" style={{width: '20%',textAlign: 'center', verticalAlign: 'middle'}}>CFH</th>
                                                </tr>
                                                <tr>
                                                    <td rowspan="2">9</td>
                                                    <th>HIC</th>
                                                    <th>Gmax</th>
                                                    <th>HIC</th>
                                                    <th>Gmax</th>
                                                    <th>HIC</th>
                                                    <th>Gmax</th>
                                                    <th>HIC</th>
                                                    <th>Gmax</th>
                                                </tr>
                                                <tr>
                                                    <th></th>
                                                    <th></th>
                                                    <th></th>
                                                    <th></th>
                                                    <th></th>
                                                    <th></th>
                                                    <th></th>
                                                    <th></th>
                                                </tr>
                                            </table>
                                            <table className="table table-bordered vertical-align-top mb-4">
                                                <tr>
                                                    <th scope="col">Location</th>
                                                    <th scope="col" colspan="2">Drop 1 Height</th>
                                                    <th scope="col" colspan="2">Drop 2 Height</th>
                                                    <th scope="col" colspan="2">Drop 3 Height</th>
                                                    <th scope="col" colspan="2">Drop 4 Height</th>
                                                    <th scope="col" rowspan="3" style={{width: '20%',textAlign: 'center', verticalAlign: 'middle'}}>CFH</th>
                                                </tr>
                                                <tr>
                                                    <td rowspan="2">10</td>
                                                    <th>HIC</th>
                                                    <th>Gmax</th>
                                                    <th>HIC</th>
                                                    <th>Gmax</th>
                                                    <th>HIC</th>
                                                    <th>Gmax</th>
                                                    <th>HIC</th>
                                                    <th>Gmax</th>
                                                </tr>
                                                <tr>
                                                    <th></th>
                                                    <th></th>
                                                    <th></th>
                                                    <th></th>
                                                    <th></th>
                                                    <th></th>
                                                    <th></th>
                                                    <th></th>
                                                </tr>
                                            </table>
                                            <table className="table table-bordered vertical-align-top mb-4">
                                                <tr>
                                                    <th scope="col">Location</th>
                                                    <th scope="col" colspan="2">Drop 1 Height</th>
                                                    <th scope="col" colspan="2">Drop 2 Height</th>
                                                    <th scope="col" colspan="2">Drop 3 Height</th>
                                                    <th scope="col" colspan="2">Drop 4 Height</th>
                                                    <th scope="col" rowspan="3" style={{width: '20%',textAlign: 'center', verticalAlign: 'middle'}}>CFH</th>
                                                </tr>
                                                <tr>
                                                    <td rowspan="2">11</td>
                                                    <th>HIC</th>
                                                    <th>Gmax</th>
                                                    <th>HIC</th>
                                                    <th>Gmax</th>
                                                    <th>HIC</th>
                                                    <th>Gmax</th>
                                                    <th>HIC</th>
                                                    <th>Gmax</th>
                                                </tr>
                                                <tr>
                                                    <th></th>
                                                    <th></th>
                                                    <th></th>
                                                    <th></th>
                                                    <th></th>
                                                    <th></th>
                                                    <th></th>
                                                    <th></th>
                                                </tr>
                                                <tr className="cfh-average">
                                                    <td colspan="7"></td>
                                                    <th colspan="2" className="cfh1">CFH Average</th>
                                                    <th className="cfh2"></th>
                                                </tr>
                                            </table>
                                        </div>
                                        <div className="col-md-12 pt-3 text-center">
                                            <div className="form-group">
                                                <button className=" btn btn-primary btn-width">Save</button>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="tab-pane" id="home3" role="tabpanel" aria-labelledby="home-tab3">
                                        <div className="row justify-content-center">
                                            <div className="col-lg-11">
                                                <div className="row">
                                                    <div className="col-md-6 pt-3">
                                                        <div className="chart-div" style={{boxShadow: '0 5px 20px #1E1E2214'}}>
                                                            <h4 className="small-title sm text-center ml-auto mb-auto mr-auto mt-0">Football</h4>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 pt-3">
                                                        <div className="chart-div" style={{boxShadow: '0 5px 20px #1E1E2214'}}>
                                                            <h4 className="small-title sm text-center ml-auto mb-auto mr-auto mt-0">Football</h4>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 pt-3">
                                                        <div className="chart-div" style={{boxShadow: '0 5px 20px #1E1E2214'}}>
                                                            <h4 className="small-title sm text-center ml-auto mb-auto mr-auto mt-0">Women's Lacrosse</h4>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 pt-3">
                                                        <div className="chart-div" style={{boxShadow: '0 5px 20px #1E1E2214'}}>
                                                            <h4 className="small-title sm text-center ml-auto mb-auto mr-auto mt-0">Non-Lined Field</h4>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane" id="home4" role="tabpanel" aria-labelledby="home-tab4">
                                        <div className="row justify-content-center">
                                            <div className="col-lg-11">
                                                <div className="row">
                                                    <div className="col-md-6 pt-3">
                                                        <div className="chart-div" style={{boxShadow: '0 5px 20px #1E1E2214'}}>
                                                            <h4 className="small-title sm text-center ml-auto mb-auto mr-auto mt-0">Location Description</h4>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 pt-3">
                                                        <div className="chart-div" style={{boxShadow: '0 5px 20px #1E1E2214'}}>
                                                            <h4 className="small-title sm text-center ml-auto mb-auto mr-auto mt-0">Location Description</h4>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 pt-3">
                                                        <div className="chart-div" style={{boxShadow: '0 5px 20px #1E1E2214'}}>
                                                            <h4 className="small-title sm text-center ml-auto mb-auto mr-auto mt-0">Location Description</h4>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 pt-3">
                                                        <div className="chart-div" style={{boxShadow: '0 5px 20px #1E1E2214'}}>
                                                            <h4 className="small-title sm text-center ml-auto mb-auto mr-auto mt-0">Location Description</h4>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>



                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminTestingOptions
