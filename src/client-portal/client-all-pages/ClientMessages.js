import React from 'react'

const ClientMessages = () => {
    return (
        <>
            <div className="full-content">
                <div className="row justify-content-center">
                    <div className="col-lg-12">
                        <div className="card">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-lg-4 col-md-5">
                                        <ul className="manage-support-ul">
                                            <li>
                                                <img src="images/Rachel_Wagner.png" alt='send' />
                                                <div>
                                                    <h5>Rachel Wagner</h5>
                                                    <p>Duis porta, ligula rhoncus euismod pretium, nisi tellus.</p>
                                                </div>
                                                <div className="time"> Just Now </div>
                                            </li>
                                            <li>
                                                <img src="images/Ryan_Stanley.png" alt='send' />
                                                <div>
                                                    <h5>Ryan Stanley</h5>
                                                    <p>Duis porta, ligula rhoncus euismod pretium, nisi tellus.</p>
                                                </div>
                                                <div className="time"> 10:15 </div>
                                            </li>
                                            <li>
                                                <img src="images/Michelle_Woodkin.png" alt='michell' />
                                                <div>
                                                    <h5>Michelle Woodkin</h5>
                                                    <p>Duis porta, ligula rhoncus euismod pretium, nisi tellus.</p>
                                                </div>
                                                <div className="time"> Mon </div>
                                            </li>
                                            <li>
                                                <img src="images/Carmen_Gomez.png" alt='carmen gomez' />
                                                <div>
                                                    <h5>Carmen Gomez</h5>
                                                    <p>Duis porta, ligula rhoncus euismod pretium, nisi tellus.</p>
                                                </div>
                                                <div className="time"> Sat </div>
                                            </li>
                                        </ul>
                                        <a href="ask-question.html" className="btn btn-primary btn-width">Ask Question</a>
                                    </div>
                                    <div className="col-lg-8 col-md-7 mt-4 mt-md-0 mt-lg-0">
                                        <div className="row">
                                            <div className="col-md-8"><h6 className="m-bold">Protective Preventative Maintenance</h6></div>
                                            <div className="col-md-4 text-right"><span className="badge badge-danger">High Priority</span> </div>
                                        </div>
                                        <div className="mini-profile mt-2">
                                            <img src="images/Rachel_Wagner.png" alt='rachel wagner' />
                                            <div>
                                                <h5>Rachel Wagner</h5>
                                                <p className="mb-0">10, Sep 2020 - 19:15</p>
                                            </div>
                                        </div>
                                        <div className="msg-mid">
                                            <p>Hi,</p>

                                            <p>Iste minus et. Non necessitatibus ut est est id amet. Officiis sequi dolorum assumenda ipsam magnam cum possimus. Laudantium nulla amet tempore excepturi id expedita dolorum quisquam deserunt. Odit vel sint dolor eos. Ea blanditiis animi. Quibusdam unde unde. Perspiciatis vel pariatur qui. Deleniti omnis est quae. Laboriosam numquam amet aliquid.</p>

                                            <p>Iste minus et. Non necessitatibus ut est est id amet. Officiis sequi dolorum assumenda ipsam magnam cum possimus. Laudantium nulla amet tempore excepturi id expedita dolorum quisquam deserunt. Odit vel sint dolor eos. Ea blanditiis animi. Quibusdam unde unde. Perspiciatis vel pariatur qui. Deleniti omnis est quae. Laboriosam numquam amet aliquid.Iste minus et. Non necessitatibus ut est est id amet. Officiis sequi dolorum </p>

                                            <p>Iste minus et. Non necessitatibus ut est est id amet. Officiis sequi dolorum assumenda ipsam magnam cum possimus. Laudantium nulla amet tempore excepturi id expedita dolorum</p>
                                        </div>
                                        <div className="d-flex pr-lg-5">
                                            <input type="text" className="form-control" name="" placeholder="Type something..." />
                                            <button className="delete-btn ml-3">
                                                <img src="images/svg/send.svg" alt='send' />
                                            </button>
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

export default ClientMessages
