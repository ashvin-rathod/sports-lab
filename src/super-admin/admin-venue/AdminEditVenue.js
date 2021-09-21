import React, { useState } from 'react';
import { useHistory } from 'react-router';
// import { postaxios } from '../../axios';
import './AdminAddVenue.css';
import axios from 'axios';
import instence from '../../helpers/axiosistence';
// field states
const AdminEditVenue = () => {
  const history = useHistory();
  const token = localStorage.getItem('admin-login');
  const [venueName, setVenueName] = useState('');
  const [fieldLength, setFieldLength] = useState('');
  const [fieldWidth, setFieldWidth] = useState('');
  const [totalFieldArea, setTotalFieldArea] = useState('');
  const [description, setDescription] = useState('');
  const [address, setAddress] = useState('');
  const [surfaceType, setSurfaceType] = useState('');
  const [country, setCountry] = useState('');
  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  const [image, setImage] = useState('');
  console.log(image);

  // alert states
  const [VenueNameAlert, setVenueNameAlert] = useState('');
  const [FieldLengthAlert, setFieldLengthAlert] = useState('');
  const [FieldWidthAlert, setFieldWidthAlert] = useState('');
  const [TotalFieldAreaAlert, setTotalFieldAreaAlert] = useState('');
  const [DescriptionAlert, setDescriptionAlert] = useState('');
  const [AddressAlert, setAddressAlert] = useState('');
  const [SurfaceTypeAlert, setSurfaceTypeAlert] = useState('');
  const [CountryAlert, setCountryAlert] = useState('');
  const [StateAlert, setStateAlert] = useState('');
  const [CityAlert, setCityAlert] = useState('');
  // validation
  const handleAddVenue = async (e) => {
    e.preventDefault();
    if (venueName === '') {
      setVenueNameAlert('please enter Venue Name ');
    } else if (venueName !== '') {
      setVenueNameAlert('');
    }
    if (fieldLength === '') {
      setFieldLengthAlert('please enter Field Length ');
    } else if (fieldLength !== '') {
      setFieldLengthAlert('');
    }
    if (fieldWidth === '') {
      setFieldWidthAlert('please enter Field Width ');
    } else if (fieldWidth !== '') {
      setFieldWidthAlert('');
    }
    if (totalFieldArea === '') {
      setTotalFieldAreaAlert('please enter totalFieldArea ');
    } else if (totalFieldArea !== '') {
      setTotalFieldAreaAlert('');
    }
    if (description === '') {
      setDescriptionAlert('please enter description ');
    } else if (description !== '') {
      setDescriptionAlert('');
    }
    if (address === '') {
      setAddressAlert('please enter address ');
    } else if (address !== '') {
      setAddressAlert('');
    }
    if (surfaceType === '') {
      setSurfaceTypeAlert('please enter Surface type ');
    } else if (surfaceType !== '') {
      setSurfaceTypeAlert('');
    }
    if (country === '') {
      setCountryAlert('please enter country ');
    } else if (country !== '') {
      setCountryAlert('');
    }
    if (state === '') {
      setStateAlert('please enter state ');
    } else if (state !== '') {
      setStateAlert('');
    }
    if (city === '') {
      setCityAlert('please enter City ');
    } else if (city !== '') {
      setCityAlert('');
    }

    if (
      venueName !== '' &&
      fieldLength !== '' &&
      fieldWidth !== '' &&
      totalFieldArea !== '' &&
      description !== '' &&
      address !== '' &&
      surfaceType !== '' &&
      country !== '' &&
      state !== '' &&
      city !== '' 
      // image !== '' 
    ) {

        
    // fetchapi
    const url = 'admin/login';

    const formdata = new URLSearchParams();
    formdata.append('venue_name', venueName);
    formdata.append('field_length', fieldLength);
    formdata.append('field_width', fieldWidth);
    formdata.append('total_field_area', totalFieldArea);
    formdata.append('choose_surface_type', surfaceType);
    formdata.append('description', description);
    formdata.append('address', address);
    formdata.append('country', country);
    formdata.append('state', state);
    formdata.append('city', city);
    // formdata.append('upload_image',image ); 

    await instence
      .post('http://18.171.24.247:3000/admin/createvenue', formdata)
      .then((res) => {
        console.log(res);
        if (res.data) {
          history.push('/adminvenues');
        }
      })
      .catch((err) => console.log(err));

    }

  };

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
                <form onSubmit={handleAddVenue}>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          id=""
                          value={venueName}
                          placeholder="Venue Name"
                          onChange={(e) => setVenueName(e.target.value)}
                        />
                        <p className='alert'>{VenueNameAlert}</p>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          id=""
                          value={fieldLength}
                          placeholder="Field Length (m)"
                          onChange={(e) => setFieldLength(e.target.value)}
                        />
                        <p className='alert'>{FieldLengthAlert}</p>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          id=""
                          value={fieldWidth}
                          placeholder="Field Width (m)"
                          onChange={(e) => setFieldWidth(e.target.value)}
                        />
                        <p className='alert'>{FieldWidthAlert}</p>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          id=""
                          value={totalFieldArea}
                          placeholder="Total field area"
                          onChange={(e) => setTotalFieldArea(e.target.value)}
                        />
                        <p className='alert'>{TotalFieldAreaAlert}</p>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <select
                          className="form-control"
                          value={surfaceType}
                          onChange={(e) => setSurfaceType(e.target.value)}
                        >
                          <option>grass</option>
                          <option>plain </option>
                        </select>
                    <p className='alert'>{SurfaceTypeAlert}</p>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <textarea
                          rows="5"
                          className="form-control"
                          placeholder="description"
                          value={description}
                          onChange={(e) => setDescription(e.target.value)}
                        ></textarea>
                        <p className='alert'>{DescriptionAlert}</p>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          id=""
                          placeholder="address"
                          value={address}
                          onChange={(e) => setAddress(e.target.value)}
                        />
                        <p className='alert'>{AddressAlert}</p>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-group">
                        <select
                          className="form-control"
                          value={country}
                          onChange={(e) => setCountry(e.target.value)}
                        >
                          <option>country</option>
                          <option>Count</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-group">
                        <select
                          className="form-control"
                          value={state}
                          onChange={(e) => setState(e.target.value)}
                        >
                          <option>state</option>
                          <option>Stat</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-group">
                        <select
                          className="form-control"
                          value={city}
                          onChange={(e) => setCity(e.target.value)}
                        >
                          <option>City</option>
                          <option>Cit</option>
                        </select>
                      </div>
                    </div>
                    <p className='alert'>{CountryAlert}</p> <p className='alert'>{StateAlert}</p>
                    <p className='alert'>{CityAlert}</p>
                    <div className="col-md-12">
                      <h4 className="small-title">Upload image</h4>
                      <div className="form-group">
                        <div className="upload-file-input">
                          <label>Choose file</label>
                          <input
                            id="uploadFile"
                            defaultValue="No file chosen!"
                            style={{ fontFamily: 'MontserratMedium' }}
                          />
                          <div className="fileUpload btn btn-primary">
                            <span>Upload</span>
                            <input
                              id="uploadBtn"
                              type="file"
                              className="upload"
                              files={image}
                              onChange={(e) => setImage(e.target.files[0])}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12 mt-3 text-center">
                      <div className="form-group">
                        <button
                          type="submit"
                          className=" btn btn-primary btn-width"
                        >
                          Update
                        </button>
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
  );
};

export default AdminEditVenue;
