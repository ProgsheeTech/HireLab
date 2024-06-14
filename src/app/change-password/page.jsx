import React from 'react';
import Link from 'next/link'
import Image from 'next/image'
function Changepasswordpage(){
	return(
		<>
			<div className="page-content bg-white">
				<div className="content-block">
					<div className="section-full bg-white browse-job p-t50 p-b20">
						<div className="container">
							<div className="row">
								<div className="col-xl-3 col-lg-4 m-b30">
									<div className="sticky-top">
										<div className="candidate-info">
											<div className="candidate-detail text-center">
												<div className="canditate-des">
													<Link href={"#"}>
														<Image alt="" src={require("../../images/team/pic1.jpg")} />
													</Link>
													<div className="upload-link" title="update" data-toggle="tooltip" data-placement="right">
														<input type="file" className="update-flie" />
														<i className="fa fa-camera"></i>
													</div>
												</div>
												<div className="candidate-title">
													<div className="">
														<h4 className="m-b5"><Link href={"#"}>David Matin</Link></h4>
														<p className="m-b0"><Link href={"#"}>Web developer</Link></p>
													</div>
												</div>
											</div>
											
										</div>
									</div>
								</div>
								<div className="col-xl-9 col-lg-8 m-b30">
									<div className="job-bx job-profile">
										<div className="job-bx-title clearfix">
											<h5 className="font-weight-700 pull-left text-uppercase">Change Password</h5>
											<Link href={"/jobs-cv-manager"} className="site-button right-arrow button-sm float-right">Back</Link>
										</div>
										<form>
											<div className="row">
												<div className="col-lg-12">
													<div className="form-group">
														<label>Old Password</label>
														<input type="password" className="form-control" />
													</div>
												</div>
												<div className="col-lg-12">
													<div className="form-group">
														<label>New Password </label>
														<input type="password" className="form-control"/>
													</div>
												<div className="col-lg-12">
													<div className="form-group"  style={{marginLeft: "-16px"}}>
														<label>Confirm New Password</label>
														<input type="password" className="form-control"/>
													</div>
												</div>
												<div className="col-lg-12">
													<button className="site-button"  style={{marginLeft: "-16px"}}>Update Password</button>
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
	)
}
export default Changepasswordpage;