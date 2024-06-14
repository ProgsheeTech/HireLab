"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Form } from "react-bootstrap";
import Image from "next/image";

var teamImg = require("../../images/team/pic1.jpg");

function Componypostjobs() {
  const [isHovered, setIsHovered] = useState(Array(15).fill(false));
  const [isSelected, setIsSelected] = useState(Array(15).fill(false));

  const handleMouseEnter = (index) => {
    const newHoverState = [...isHovered];
    newHoverState[index] = true;
    setIsHovered(newHoverState);
  };

  const handleMouseLeave = (index) => {
    const newHoverState = [...isHovered];
    newHoverState[index] = false;
    setIsHovered(newHoverState);
  };

  const handleToggleSelect = (index) => {
    const newSelectState = [...isSelected];
    newSelectState[index] = !newSelectState[index];
    setIsSelected(newSelectState);
  };

  const spanStyles = (isHovered, isSelected) => ({
    display: "flex",
    fontFamily: "Lato",
    padding: "8px 20px",
    justifyContent: "center",
    lineHeight: "24px",
    alignItems: "center",
    flexShrink: 0,
    borderRadius: "16px",
    border: `1px solid ${isHovered || isSelected ? "#0B66C3" : "#000"}`,
    color: isHovered || isSelected ? "#0B66C3" : "#000",
    background: isHovered || isSelected ? "rgba(11, 102, 195, 0.10)" : "#FFF",
    transition: "color 0.3s, border-color 0.3s",
    margin: "5px",
    whiteSpace: "nowrap",
    cursor: "pointer"
  });

  const plusStyle = {
    fontSize: "1.5em",
    color: "#646464",
    background: "none",
    width: "14px",
    height: "21px",
    fontWeight: "bold",
  };

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
                            <Image alt="" src={teamImg} />
                          </Link>
                          <div
                            className="upload-link"
                            title="update"
                            data-toggle="tooltip"
                            data-placement="right"
                          >
                            <input type="file" className="update-flie" />
                            <i className="fa fa-pencil"></i>
                          </div>
                        </div>
                        <div className="candidate-title">
                          <h4 className="m-b5">
                            <Link href={"#"}>@COMPANY</Link>
                          </h4>
                        </div>
                      </div>
                      <ul>
                        <li>
                          <Link href="/profile">
                            <i className="fa fa-user-o" aria-hidden="true"></i>
                            <span>Satya Profile</span>
                          </Link>
                        </li>

                        <li>
                          <Link className="active" href="/post-job">
                            <i
                              className="fa fa-file-text-o"
                              aria-hidden="true"
                            ></i>
                            <span>Post A job</span>
                          </Link>
                        </li>

                        <li>
                          <Link href="/credit-earned">
                            <i className="fa fa-heart-o" aria-hidden="true"></i>
                            <span>Credit Earned</span>
                          </Link>
                        </li>

                        <li>
                          <Link href="/manage-job">
                            <i className="fa fa-heart-o" aria-hidden="true"></i>
                            <span>Manage Jobs</span>
                          </Link>
                        </li>

                        <li>
                          <Link href="/change-password">
                            <i className="fa fa-key" aria-hidden="true"></i>
                            <span>Change Password</span>
                          </Link>
                        </li>

                        <li>
                          <Link href="/">
                            <i
                              className="fa fa-sign-out"
                              aria-hidden="true"
                            ></i>
                            <span>Log Out</span>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xl-9 col-lg-8 m-b30">
                  <div className="job-bx submit-resume">
                    <div className="job-bx-title clearfix">
                      <h5 className="font-weight-700 pull-left text-uppercase">
                        Post A Job
                      </h5>
                      <Link
                        href={"/company-profile"}
                        className="site-button right-arrow button-sm float-right"
                      >
                        Back
                      </Link>
                    </div>

                    <form
                      className="custom-scrollbar"
                      style={{
                        overflowX: "scroll",
                        overflowY: "scroll",
                        height: "700px",
                      }}
                    >
                      <div className="row">
                        <div className="col-lg-12 col-md-12">
                          <div className="form-group">
                            <label>Company you are hiring for</label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter Company Name"
                            />
                          </div>
                        </div>
                        <div className="col-lg-12 col-md-12">
                          <div className="form-group">
                            <label>Job Role/Category</label>
                            <Form.Control
                              as="select"
                              custom
                              className="custom-select"
                            >
                              <option>Full Time</option>
                              <option>Part Time</option>
                              <option>Internship</option>
                              <option>Freelance</option>
                            </Form.Control>
                          </div>
                        </div>
                        <div className="col-lg-12 col-md-12">
                          <div className="form-group">
                            <label>Job Title / Designation</label>
                            <input
                              type="text"
                              placeholder="Enter a job title"
                              className="form-control tags_input"
                            />
                          </div>
                        </div>
                        <div className="col-lg-12 col-md-12">
                          <div className="form-group">
                            <label>Type of Jobs</label>
                            <Form.Control
                              as="select"
                              custom
                              className="custom-select"
                            >
                              <option>Full Time</option>
                              <option>Part Time</option>
                              <option>Internship</option>
                              <option>Freelance</option>
                            </Form.Control>
                          </div>
                        </div>
                        <div className="col-lg-12 col-md-12">
                          <div className="form-group">
                            <label>Experience</label>
                            <Form.Control
                              as="select"
                              custom
                              className="custom-select"
                            >
                              <option>1 Years</option>
                              <option>2 Years</option>
                              <option>3 Years</option>
                              <option>4 Years</option>
                              <option>5 Years</option>
                            </Form.Control>
                          </div>
                        </div>
                        <div className="col-lg-12 col-md-12">
                          <div className="form-group">
                            <div
                              className="job-time d-flex gap-3 mr-auto"
                              style={{ gap: "1rem", marginBottom: "26px" }}
                            >
                              <span
                                style={spanStyles(isHovered[0], isSelected[0])}
                                onMouseEnter={() => handleMouseEnter(0)}
                                onMouseLeave={() => handleMouseLeave(0)}
                                onClick={() => handleToggleSelect(0)}
                              >
                                Full Time
                              </span>
                              <span
                                style={spanStyles(isHovered[1], isSelected[1])}
                                onMouseEnter={() => handleMouseEnter(1)}
                                onMouseLeave={() => handleMouseLeave(1)}
                                onClick={() => handleToggleSelect(1)}
                              >
                                Part Time
                              </span>
                              <span
                                style={spanStyles(isHovered[2], isSelected[2])}
                                onMouseEnter={() => handleMouseEnter(2)}
                                onMouseLeave={() => handleMouseLeave(2)}
                                onClick={() => handleToggleSelect(2)}
                              >
                                Contract
                              </span>
                            </div>

                            <div className="custom-control custom-checkbox">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                id="check1"
                                name="example1"
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="check1"
                              >
                                This is night shift job
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-12 col-md-12">
                          <div className="form-group">
                            <label>Location</label>
                            <div
                              className="job-time d-flex gap-3 mr-auto"
                              style={{ gap: "1rem" }}
                            >
                              <span
                                style={spanStyles(isHovered[3], isSelected[3])}
                                onMouseEnter={() => handleMouseEnter(3)}
                                onMouseLeave={() => handleMouseLeave(3)}
                                onClick={() => handleToggleSelect(3)}
                              >
                                Work From Office
                              </span>
                              <span
                                style={spanStyles(isHovered[4], isSelected[4])}
                                onMouseEnter={() => handleMouseEnter(4)}
                                onMouseLeave={() => handleMouseLeave(4)}
                                onClick={() => handleToggleSelect(4)}
                              >
                                Work From Home
                              </span>
                              <span
                                style={spanStyles(isHovered[5], isSelected[5])}
                                onMouseEnter={() => handleMouseEnter(5)}
                                onMouseLeave={() => handleMouseLeave(5)}
                                onClick={() => handleToggleSelect(5)}
                              >
                                Both Full Time & Part Time
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-12 col-md-12">
                          <div className="form-group">
                            <label>Office Address/Landmark</label>
                            <input
                              type="text"
                              placeholder="Enter a address"
                              className="form-control tags_input"
                            />
                          </div>
                        </div>
                        <div className="col-lg-12 col-md-12">
                          <div className="form-group">
                            <label>Compensation</label>
                            <div
                              className="job-time d-flex gap-3 mr-auto"
                              style={{ gap: "1rem" }}
                            >
                              <span
                                style={spanStyles(isHovered[6], isSelected[6])}
                                onMouseEnter={() => handleMouseEnter(6)}
                                onMouseLeave={() => handleMouseLeave(6)}
                                onClick={() => handleToggleSelect(6)}
                              >
                                Fixed Only
                              </span>
                              <span
                                style={spanStyles(isHovered[7], isSelected[7])}
                                onMouseEnter={() => handleMouseEnter(7)}
                                onMouseLeave={() => handleMouseLeave(7)}
                                onClick={() => handleToggleSelect(7)}
                              >
                                Fixed + Incentive
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-12 col-md-12">
                          <div className="form-group">
                            <label>Do You Offer any additional Perks?</label>
                            <div
                              className="job-time d-flex flex-wrap mr-auto"
                              style={{ gap: "1rem" }}
                            >
                              {[
                                "Flexible Working Hour ",
                                "Weekly Pay ",
                                "Laptop  ",
                                "Travel Allowance (TA) ",
                                "Annual Bonus ",
                              ].map((text, index) => (
                                <span
                                  key={index}
                                  style={spanStyles(
                                    isHovered[index],
                                    isSelected[index]
                                  )}
                                  onMouseEnter={() => handleMouseEnter(index)}
                                  onMouseLeave={() => handleMouseLeave(index)}
                                  onClick={() => handleToggleSelect(index)}
                                >
                                  {text.replace(" +", "")}
                                  <span style={plusStyle}>+</span>
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>

                        <div className="col-lg-12 col-md-12">
                          <div className="form-group">
                            <label>
                              Is There Any Joining Fee or Deposit Required from
                              the Candidate?
                            </label>
                            <div
                              className="job-time d-flex flex-wrap mr-auto"
                              style={{ gap: "1rem" }}
                            >
                              {["No", "YES"].map((text, index) => (
                                <span
                                  key={index + 5}
                                  style={spanStyles(
                                    isHovered[index + 5],
                                    isSelected[index + 5]
                                  )}
                                  onMouseEnter={() => handleMouseEnter(index + 5)}
                                  onMouseLeave={() => handleMouseLeave(index + 5)}
                                  onClick={() => handleToggleSelect(index + 5)}
                                >
                                  {text}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>

                        <div className="col-lg-12 col-md-12">
                          <div className="form-group">
                            <label>Candidate Requirement</label>
                            <p>Requirement</p>
                          </div>
                        </div>

                        <div className="col-lg-12 col-md-12">
                          <div className="form-group">
                            <label>Maximum Education</label>
                            <div
                              className="job-time d-flex flex-wrap mr-auto"
                              style={{ gap: "1rem" }}
                            >
                              {["10th", "12th", "Graduate"].map(
                                (text, index) => (
                                  <span
                                    key={index + 7}
                                    style={spanStyles(
                                      isHovered[index + 7],
                                      isSelected[index + 7]
                                    )}
                                    onMouseEnter={() =>
                                      handleMouseEnter(index + 7)
                                    }
                                    onMouseLeave={() =>
                                      handleMouseLeave(index + 7)
                                    }
                                    onClick={() =>
                                      handleToggleSelect(index + 7)
                                    }
                                  >
                                    {text}
                                  </span>
                                )
                              )}
                            </div>
                          </div>
                        </div>

                        <div className="col-lg-12 col-md-12">
                          <div className="form-group">
                            <label>Total Experience Required</label>
                            <div
                              className="job-time d-flex flex-wrap mr-auto"
                              style={{ gap: "1rem" }}
                            >
                              {["Fresher Only", "Experience Only", "Any"].map(
                                (text, index) => (
                                  <span
                                    key={index + 10}
                                    style={spanStyles(
                                      isHovered[index + 10],
                                      isSelected[index + 10]
                                    )}
                                    onMouseEnter={() =>
                                      handleMouseEnter(index + 10)
                                    }
                                    onMouseLeave={() =>
                                      handleMouseLeave(index + 10)
                                    }
                                    onClick={() =>
                                      handleToggleSelect(index + 10)
                                    }
                                  >
                                    {text}
                                  </span>
                                )
                              )}
                            </div>
                          </div>
                        </div>

                        <div className="col-lg-12 col-md-12">
                          <div className="form-group">
                            <label>Job Description</label>
                            <textarea className="form-control"></textarea>
                          </div>
                        </div>
                      </div>
                      <button type="button" className="site-button m-b30">
                        Upload
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <style jsx>{`
          .custom-scrollbar {
            overflow: scroll;
            height: 700px;
          }
          .custom-scrollbar::-webkit-scrollbar {
            width: 12px;
            height: 12px;
          }
          .custom-scrollbar::-webkit-scrollbar-track {
            background: #f1f1f1;
          }
          .custom-scrollbar::-webkit-scrollbar-thumb {
            background-color: #0b66c3; /* Blue color */
            border-radius: 10px;
            border: 3px solid #ffffff;
          }
          /* Firefox scrollbar */
          .custom-scrollbar {
            scrollbar-width: auto;
            scrollbar-color: #0b66c3 #f1f1f1;
          }
        `}</style>
      </div>
    </>
  );
}

export default Componypostjobs;
