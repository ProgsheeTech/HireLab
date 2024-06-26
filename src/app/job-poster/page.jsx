'use client'
import React from 'react';
import Link from 'next/link';
import { Form } from 'react-bootstrap';
import Image from 'next/image';
import GoogleMaps from 'simple-react-google-maps';

function Companyprofile() {
  return (
    <>
      <div className="page-content bg-white">
        <div className="content-block">
          <div className="section-full bg-white p-t50 p-b20">
            <div className="container">
              <div className="row">
                <div className="col-xl-3 col-lg-4 m-b30">
                  <div className="sticky-top">
                    <div className="candidate-info company-info">
                      <div className="candidate-detail text-center">
                        <div className="canditate-des">
                          <Link href={"#"}>
                            <Image src={require('../../images/logo/icon3.jpg')} alt="Company Logo" />
                          </Link>
                          <div className="upload-link" title="update" data-toggle="tooltip" data-placement="right">
                            <input type="file" className="update-flie" />
                            <i className="fa fa-pencil"></i>
                          </div>
                        </div>
                        <div className="candidate-title">
                          <h4 className="m-b5"><Link href={"#"}>@COMPANY</Link></h4>
                        </div>
                      </div>
                      <ul>
                        <li><Link href='/profile' className="active">
                          <i className="fa fa-user-o" aria-hidden="true"></i> 
                          <span>Satya Profile</span></Link></li>
                        <li><Link href='/post-job'>
                          <i className="fa fa-file-text-o" aria-hidden="true"></i> 
                          <span>Post A job</span></Link></li>
                        <li><Link href='/credit-earned'>
                          <i className="fa fa-heart-o" aria-hidden="true"></i> 
                          <span>Credit Earned</span></Link></li>
                        <li><Link href='/manage-job'>
                          <i className="fa fa-heart-o" aria-hidden="true"></i> 
                          <span>Manage Jobs</span></Link></li>
                        <li><Link href='/change-password'>
                          <i className="fa fa-key" aria-hidden="true"></i> 
                          <span>Change Password</span></Link></li>
                        <li><Link href='/'>
                          <i className="fa fa-sign-out" aria-hidden="true"></i> 
                          <span>Log Out</span></Link></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xl-9 col-lg-8 m-b30">
                  <div className="job-bx submit-resume">
                    <div className="job-bx-title clearfix">
                      <h5 className="font-weight-700 pull-left text-uppercase">SATYA'S Profile</h5>
                      <Link href={"/company-profile"} className="site-button right-arrow button-sm float-right">Back</Link>
                    </div>
                    <form>
                      <div className="row m-b30">
                        <div className="col-lg-6 col-md-6">
                          <div className="form-group">
                            <label>Company Name</label>
                            <input type="text" className="form-control" placeholder="Enter Company Name" />
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                          <div className="form-group">
                            <label>Your Email</label>
                            <input type="email" className="form-control" placeholder="info@gmail.com" />
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                          <div className="form-group">
                            <label>Website</label>
                            <input type="text" className="form-control" placeholder="Website Link" />
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                          <div className="form-group">
                            <label>Founded Date </label>
                            <input type="text" className="form-control" placeholder="17/12/2018" />
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                          <div className="form-group">
                            <label>Category</label>
                            <Form.Control as="select" className="custom-select">
                              <option>Web Designer</option>
                              <option>Web Developer</option>
                            </Form.Control>
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                          <div className="form-group">
                            <label>Country</label>
                            <input type="text" className="form-control" placeholder="London" />
                          </div>
                        </div>
                        <div className="col-lg-12 col-md-12">
                          <div className="form-group">
                            <label>Description:</label>
                            <textarea className="form-control" rows="4"></textarea>
                          </div>
                        </div>
                      </div>
                      <div className="job-bx-title clearfix">
                        <h5 className="font-weight-700 pull-left text-uppercase">Contact Information</h5>
                      </div>
                      <div className="row m-b30">
                        <div className="col-lg-6 col-md-6">
                          <div className="form-group">
                            <label>Phone</label>
                            <input type="text" className="form-control" placeholder="+1 123 456 7890" />
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                          <div className="form-group">
                            <label>Email</label>
                            <input type="email" className="form-control" placeholder="example@gmail.com" />
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                          <div className="form-group">
                            <label>Country</label>
                            <input type="text" className="form-control" placeholder="India" />
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                          <div className="form-group">
                            <label>City</label>
                            <input type="text" className="form-control" placeholder="Delhi" />
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                          <div className="form-group">
                            <label>Zip</label>
                            <input type="text" className="form-control" placeholder="504030" />
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                          <div className="form-group">
                            <label>Address</label>
                            <input type="text" className="form-control" placeholder="New York City" />
                          </div>
                        </div>
                      </div>
                      <div className="job-bx-title clearfix">
                        <h5 className="font-weight-700 pull-left text-uppercase">Map</h5>
                      </div>
                      <div className="row m-b30">
                        <div className="col-lg-12 col-md-12">
                          <GoogleMaps
                            apiKey={"AIzaSyBPDjB2qkV4Yxn9h0tGSk2X5uH6NKmssXw"}
                            style={{ height: "250px", width: "100%", border: "0" }}
                            zoom={6}
                            center={{ lat: 37.4224764, lng: -122.0842499 }}
                            markers={{ lat: 37.4224764, lng: -122.0842499 }} // optional
                          />
                        </div>
                      </div>
                      <div className="job-bx-title clearfix">
                        <h5 className="font-weight-700 pull-left text-uppercase">Social link</h5>
                      </div>
                      <div className="row">
                        <div className="col-lg-6 col-md-6">
                          <div className="form-group">
                            <label>Facebook</label>
                            <input type="text" className="form-control" placeholder="https://www.facebook.com/" />
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                          <div className="form-group">
                            <label>Twitter</label>
                            <input type="text" className="form-control" placeholder="https://www.twitter.com/" />
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                          <div className="form-group">
                            <label>Google</label>
                            <input type="text" className="form-control" placeholder="https://www.google.com/" />
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                          <div className="form-group">
                            <label>Linkedin</label>
                            <input type="text" className="form-control" placeholder="https://www.linkedin.com/" />
                          </div>
                        </div>
                      </div>
                      <button type="submit" className="site-button m-b30">Update Setting</button>
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
}

export default Companyprofile;
