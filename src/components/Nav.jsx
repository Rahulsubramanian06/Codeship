import logo from "../assets/logo.png";
// import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useState } from 'react';
export function Navs() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
    <div className="container d-flex pt-5 justify-content-xl-between justify-content-start">
    <Button variant="transparent" className="d-xl-none" onClick={handleShow}>
     <i className ="fa-solid fa-bars-staggered font_size_27"></i>
    </Button>
    <div className="img_wrapper ">
                <img src={logo} alt="logo" />
              </div>
              <Offcanvas show={show} onHide={handleClose} responsive="xl">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title><div className="img_wrapper ">
                <img src={logo} alt="logo" />
              </div></Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
      <div className="nav_links d-flex flex-column flex-xl-row text-center gap-3 align-items-xl-center align-items-start">
               <a
                 href="#"
                 className="text-decoration-none font_color_blue font_size_24"
               >
                 Home
               </a>
               <a
                 href="#"
                 className="text-decoration-none font_color_black font_size_24"
               >
                 About
               </a>
               <a
                 href="#"
                className="text-decoration-none font_color_black font_size_24"
              >
                 Services
               </a>
               <a
                 href="#"
                 className="text-decoration-none font_color_black font_size_24"
               >
                 Solutions
               </a>
               <a
                 href="#"
                 className="text-decoration-none font_color_black font_size_24"
               >
                 Our Works
               </a>
               <a
                 href="#"
                 className="text-decoration-none font_color_black font_size_24"
               >
                 Contact
               </a>
               <a
             href="#"
             className="text-decoration-none text-white font_size_24 gradient_background px-4 py-2 rounded-pill d-flex align-items-center"
           >
             <div className="green_dot mx-2"></div> Lets Talk!
           </a>
             </div>
     </Offcanvas.Body>
    </Offcanvas>
    </div>
  </>
  );
}
