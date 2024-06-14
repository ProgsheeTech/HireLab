"use client";
import React from "react";
import Link from "next/link";
var bnr = require("./../../images/background/bg6.jpg");

function Register2(props) {
  return (
    <div className="page-wraper">
      <div className="browse-job login-style3">
        <div
          className="bg-img-fix"
          style={{
            backgroundImage: `url(${bnr.default.src})`,
            height: "100vh",
          }}
        >
          <div className="row">
            <div className="col-xl-4 col-lg-5 col-md-6 col-sm-12 bg-white z-index2 relative p-a0 content-scroll skew-section left-bottom">
              <div className="login-form style-2" style={{ width: "50%" }}>
                <div className="logo-header text-center p-tb30">
                  <Link href={"./"}>
                    <img src={require("./../../images/logo.png")} alt="" />
                  </Link>
                </div>
                <div className="clearfix"></div>
                <div className="tab-content nav p-b30 tab">
                  <div id="login" className="tab-pane active">
                    <form className="dez-form p-b30 mx-2">
                      <div className="width-main-div">
                        <div>
                          <div className="mb-3">
                            <img
                              src="/images/logo1__2_-removebg-preview.png"
                              alt="Logo 1"
                            />
                            <img
                              src="/images/logo2__2_-removebg-preview.png"
                              alt="Logo 2"
                            />
                          </div>
                        </div>
                        <h3
                          className="form-title m-t0 rubik-font"
                          style={{ fontWeight: "600" }}
                        >
                          Login
                        </h3>
                        <div className="dez-separator-outer m-b5">
                          <div className="dez-separator bg-primary style-liner"></div>
                        </div>
                        <p className="lato-font">Enter your login details</p>
                        <div className="form-group width-form">
                          <input
                            className="form-control w-full lato-font"
                            placeholder="User Name/Email"
                          />
                        </div>
                        <div className="form-group width-form">
                          <input
                            type="number"
                            className="form-control w-full lato-font"
                            placeholder="Mobile Number"
                          />
                        </div>
                      </div>
                      <div
                        className="form-group text-right otp-button-center"
                        style={{ marginTop: "49px" }}
                      >
                        <Link
                          href="/send-otp"
                          className="site-button button-md text-white lato-font"
                        >
                          <p className="lato-font p-0 m-0">Send OTP</p>
                        </Link>
                      </div>
                      <div className="text-center bottom">
                        <Link
                          href="/register"
                          className="site-button button-md btn-block text-white margin-left lato-font"
                          style={{
                            marginLeft: "30%",
                            fontWeight: "400",
                            marginTop: "32px",
                          }}
                        >
                          <p className="lato-font p-0 m-0">Create Account</p>
                        </Link>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .width-form {
          width: 180%;
        }
        .otp-button-center {
          margin-left: 50%;
        }
        .account-button-center {
          margin-left: 30%;
        }
        .rubik-font {
          font-family: "Rubik", sans-serif !important;
        }
        .lato-font {
          font-family: "Lato", sans-serif !important;
          letter-spacing: 0.03em;
        }
      `}</style>
    </div>
  );
}

export default Register2;
