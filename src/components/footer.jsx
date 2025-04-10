export function Footer(){
    return(
        <>
        <div className="container footer py-5">
        <div className="row">
          <div className="col-xxl-12">
            <p className="font_size_80 font_weight_600">Let's Talk</p>
          </div>
          <div className="row">
            <div className="col-xxl-6">
              <div className="address_mail d-flex flex-column gap-5">
                <a href="" className="font_size_37 font_weight_400 text-black">
                  support@codeship.in
                </a>
                <p className="font_size_24 font_weight_400 w-75">
                  No 1, 1st Floor, Narasimhan St, Jothi Nagar, West Mambalam,
                  Chennai, Tamil Nadu 600033
                </p>
              </div>
            </div>
            <div className="col-xxl-6 d-flex">
              <div className="row p-0 align-items-center w-100">
                <div className="col-6">
                  <a
                    href=""
                    className="font_size_30 font_weight_400 text-black d-block mb-4"
                  >
                    Home
                  </a>
                  <a
                    href=""
                    className="font_size_30 font_weight_400 text-black d-block mb-4"
                  >
                    About
                  </a>
                  <a
                    href="#"
                    className="font_size_30 font_weight_400 text-black d-block"
                  >
                    Capabilites
                  </a>
                </div>
                <div className="col-6">
                  <a
                    href=""
                    className="font_size_30 font_weight_400 text-black d-block mb-4"
                  >
                    Solutions
                  </a>
                  <a
                    href=""
                    className="font_size_30 font_weight_400 text-black d-block mb-4"
                  >
                    Our Works
                  </a>
                  <a
                    href="#"
                    className="font_size_30 font_weight_400 text-black d-block"
                  >
                    Contact
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row pt-5">
          <div className="col-xxl-6 d-flex gap-5 ">
            <a href="" className="text-black font_size_25 font_weight_400">
              Privacy
            </a>
            <a href="" className="text-black font_size_25 font_weight_400">
              Terms
            </a>
            <a href="" className="text-black font_size_25 font_weight_400">
              Sitemap
            </a>
          </div>
          <div className="col-xxl-6 font_size_30 font_weight_400">
            <p>@ 2021 - 2024 Codeship pvt Ltd.</p>
          </div>
        </div>
      </div>
        </>
    );
}