import React from 'react';
import Navbar from './Navbar';

var aboutStyle = {
  color: "white",
  backgroundColor: "#151719"

}

export default function About() {
  return (
    <>

      <Navbar />
      <div className="container-fluid"  >
        {/* <div className="row h-100 align-items-center py-5" style={{ margin: "450px" }}> */}

        {/* </div> */}
        <div className=" py-5" style={aboutStyle}>
          <div className="container py-5" >
            <div className="row align-items-center mb-5">
              <div className="col-lg-6 order-2 order-lg-1"><i className="fa fa-bar-chart fa-2x mb-3 text-primary"></i>
                <h2 className="font-weight-light">About Us</h2>
                <p className="font-italic text-muted mb-4">Contos Ltd. is a leading company in the Energy Sector and Contos EMS is it's department which has built and maintains the software to manage the equipments used in plant production.</p>
              </div>
              <div className="col-lg-5 px-5 mx-auto order-1 order-lg-2"><img src="https://www.powerworldanalysis.com/wp-content/uploads/2017/02/Paks-Nuclear-Power-Plant-Nuclear-Hall.jpg" alt="" className="img-fluid mb-4 mb-lg-0" /></div>
            </div>
            <div className="row align-items-center">
              <div className="col-lg-5 px-5 mx-auto"><img src="https://www.ipsgroupbv.com/wp-content/uploads/2019/06/IMG_7126_01_39f416721d.jpg" alt="" className="img-fluid mb-4 mb-lg-0" /></div>
              <div className="col-lg-6"><i className="fa fa-leaf fa-2x mb-3 text-primary"></i>
                <h2 className="font-weight-light">Manage Equipments</h2>
                <p className="font-italic text-muted mb-4">Manage all your equipments and improve management for supply with non conformance and improved adherence.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="py-5" style={aboutStyle}>
          <div className="container py-5">
            <div className="row mb-4">
              <div className="col-lg-5">
                <h2 className="display-4 font-weight-light">Our team</h2>
              </div>
            </div>

            <div className="row text-center">

              <div className="col-xl-3 col-sm-6 mb-5">
                <div className="bg-white rounded shadow-sm py-5 px-4"><img src="https://bootstrapious.com/i/snippets/sn-about/avatar-4.png" alt="" width="100" className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
                  <h5 className="mb-0" style={{ color: "black" }}>Rishika</h5><span className="small text-uppercase text-muted">CEO - Founder</span>

                </div>
              </div>

              <div className="col-xl-3 col-sm-6 mb-5">
                <div className="bg-white rounded shadow-sm py-5 px-4"><img src="https://bootstrapious.com/i/snippets/sn-about/avatar-3.png" alt="" width="100" className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
                  <h5 className="mb-0" style={{ color: "black" }}>Tejas</h5><span className="small text-uppercase text-muted">CEO - Founder</span>

                </div>
              </div>

              <div className="col-xl-3 col-sm-6 mb-5">
                <div className="bg-white rounded shadow-sm py-5 px-4"><img src="https://bootstrapious.com/i/snippets/sn-about/avatar-4.png" alt="" width="100" className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
                  <h5 className="mb-0" style={{ color: "black" }}>Shruti</h5><span className="small text-uppercase text-muted">CEO - Founder</span>

                </div>
              </div>

              <div className="col-xl-3 col-sm-6 mb-5">
                <div className="bg-white rounded shadow-sm py-5 px-4"><img src="https://bootstrapious.com/i/snippets/sn-about/avatar-4.png" alt="" width="100" className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
                  <h5 className="mb-0" style={{ color: "black" }}>Soumya</h5><span className="small text-uppercase text-muted">CEO - Founder</span>

                </div>
              </div>
              <div className="col-xl-3 col-sm-6 mb-5">
                <div className="bg-white rounded shadow-sm py-5 px-4"><img src="https://bootstrapious.com/i/snippets/sn-about/avatar-4.png" alt="" width="100" className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
                  <h5 className="mb-0" style={{ color: "black" }}>Rachana</h5><span className="small text-uppercase text-muted">CEO - Founder</span>

                </div>
              </div>


            </div>
          </div>
        </div>


        <footer className="pb-5">
          <div className="container text-center">
            <p className="font-italic text-muted mb-0">&copy; Copyrights Company.com All rights reserved.</p>
          </div>
        </footer>
      </div>



    </>



  )
}