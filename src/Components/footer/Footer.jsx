import React from 'react'

export const Footer = () => {
    return (
        <>
            <footer className="shadow p-4 bg-dark rounded-lg flex-column text-white pt-5">

                <div className="container text-center text-md-left">

                    <div className="row text-center text-md-left">

                        <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                            <h5 className="text-uppercase mb-4 font-weight-bold text-warning">Company Name</h5>
                            <p>Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
                            ital consectetur lorem ipsum dolor sit amet adipisicing elit.</p>
                            
                        </div>

                        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                            <h5 className="text-uppercase mb-4 font-weight-bold text-warning">Products</h5>
                        <p>
                            <a className="text-white" style={{textDecoration: "none"}}> TheProviders</a>
                        </p>
                        <p>
                            <a className="text-white" style={{textDecoration: "none"}}> Creativity</a>
                        </p>
                        <p>
                            <a className="text-white" style={{textDecoration: "none"}}> SourceFiles</a>
                        </p>
                        <p>
                            <a className="text-white" style={{textDecoration: "none"}}> bootstrap 5 alpha</a>
                        </p>

                        </div>

                        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                            <h5 className="text-uppercase mb-4 font-weight-bold text-warning">Useful links</h5>
                        <p>
                            <a className="text-white" style={{textDecoration: "none"}}> Your Account</a>
                        </p>
                        <p>
                            <a className="text-white" style={{textDecoration: "none"}}> Become an Affiliates</a>
                        </p>
                        <p>
                            <a className="text-white" style={{textDecoration: "none"}}>Shipping Rates</a>
                        </p>
                        <p>
                            <a className="text-white" style={{textDecoration: "none"}}> Help</a>
                        </p>
                        </div>

                        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                            <h5 className="text-uppercase mb-4 font-weight-bold text-warning" >Contact</h5>
                            <p>
                                <i className="fas fa-home mr-3"></i>New York, NY 2333, US
                            </p>
                            <p>
                                <i className="fas fa-envelope mr-3"></i>theproviders98@gmail.com
                            </p>
                            <p>
                                <i className="fas fa-phone mr-3"></i>+92 3162859445
                            </p>
                            <p>
                                <i className="fas fa-print	 mr-3"></i>+01 335 633 77
                            </p>
                        </div>
                        
                    </div>

                    <hr className="mb-4" />

                    <div className="row align-items-center">

                        <div className="col text-center">
                            <p>	Copyright ©2020 All rights reserved by:
                                <a style={{textDecoration: "none"}}>
                                    <strong> Wayding</strong>
                                </a></p>
                            
                        </div>
                        
                    </div>

                </div>

            </footer>

        </>
    )
}
