import logo from "../assets/girl_landing_section.png";
import "swiper/css";
// swiper below landing section
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Mousewheel } from "swiper/modules";
// what we do
import magnifying_glass from "../assets/magnifying_glass.svg";
import magnifying_glass_hover from "../assets/magnifying_glass_hover.png";
import rocket from "../assets/rocket_launch.png";
import rocket_hover from "../assets/rocket_launch_hover.svg";
import bug from "../assets/bug.png";
import projects from "../assets/projects.png";
import bug_hover from "../assets/bug_hover.svg";
import projects_hover from "../assets/projects_hover.svg";
// services
import laptop from "../assets/laptop.png";
import app from "../assets/app.png";
import ui_ux from "../assets/ui_ux.png";
import amc from "../assets/amc.png";
import servers from "../assets/servers.png";
import digital_marketing from "../assets/digital_marketing.png";
import { Services_card } from "../components/Services_card.jsx";
// gsap
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

//Animation
import { useScrollAnimation } from "../components/animation.jsx";
// tech_stack
import { Tech_stack_img } from "./teck_stack_img.jsx";
// sofwares
import erp from "../assets/erp.png";
import crm from "../assets/crm.png";
import hrms from "../assets/hrms.png";
import checked from "../assets/checked_rect.png";
import spring from "../assets/spring.png";
// testimonials
import client from "../assets/client_image.png";
import client_logo from "../assets/client_logo.png";
import checked_square from "../assets/checked_square.png";
import basketball from "../assets/basketball.png";
import twitter from "../assets/twitter.png";
import insta from "../assets/insta.png";
import linkedin from "../assets/linkedin.png";
export function Landing_page() {
  useScrollAnimation();

  return (
    <>
      <div className="container py-5">
        <div className="row">
          <div className="col-xxl-7 mt-3 order-1 order-xxl-0 d-flex flex-column align-items-center justify-content-center">
            <p className="font_size_48 font_weight_500 text-center text-xxl-start">
              A global development company providing comprehensive solutions for
              innovative brands.
            </p>
            <button className="gradient_background text-white border-0 font_size_25 font_weight_500 px-5 py-3 border_radius_25">
              Let's talk
            </button>
          </div>
          <div className="col-xxl-5 mt-3 d-flex justify-content-center">
            <div className="girl_img_wrapper">
              <img src={logo} className="object_cover" alt="" />
            </div>
          </div>
        </div>
      </div>
      {/* swiper below landing section */}
      <Swiper
        id="brand_swiper_container"
        spaceBetween={1}
        slidesPerView={5}
        centeredSlides={true}
        loop={true}
        speed={20000}
        autoplay={{
          delay: 250,
          disableOnInteraction: false,
        }}
        breakpoints={{
          370: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Autoplay]}
        className="mySwiper font_size_24 py-5 py-4"
      >
        <SwiperSlide>Toyota</SwiperSlide>
        <SwiperSlide>Uber</SwiperSlide>
        <SwiperSlide>amazon</SwiperSlide>
        <SwiperSlide>coinbase</SwiperSlide>
        <SwiperSlide>credit karma</SwiperSlide>
        <SwiperSlide>credit Karma</SwiperSlide>
      </Swiper>
      {/* growth of the company */}
      <div className="world_container d-flex justify-content-center align-items-center">
        <div className="world_img_wrapper py-5 ">
          <div className="world_background object_contain d-flex align-items-center justify-content-center flex-column text-center">
            <div className="content_wrapper">
              <p className="font_size_40 font_weight_400 line_height_40 mb-5">
                Since our founding in 2020, Codeship has rapidly grown into a
                dynamic and thriving company.
              </p>
              <p className="font_size_40 font_weight_400 line_height_40 mt-5">
                With a shared dedication to innovation and a customer-centric
                approach, our team brings a wealth of experience and skills to
                the table.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* What we do */}
      <div className="container what_we_do  mt-5">
        <div className="row">
          <div className="col-xxl-5 col-12 text-xxl-start text-center px-3">
            <p className="font_size_58 font_weight_600 line_height_54">
              Some of the things we can do for you
            </p>
            <p className="font_size_24 font_weight_400 line_height_29">
              We offer a comprehensive range of software development services
              tailored to meet the unique needs of your business.
            </p>
          </div>
          <div className="col-xxl-7 pt-xxl-0 pt-5">
            <div className="container">
              <div className="row gap-xxl-5 gap-4 justify-content-center">
                <div className="col-md-5 col-12 discovery hover_card_effect shadow p-3 mb-5 border_radius_25 py-3">
                  <div className="d-flex align-items-center px-4 py-3">
                    <img
                      src={magnifying_glass}
                      alt=""
                      className="hover_d_none"
                    />
                    <img
                      src={magnifying_glass_hover}
                      alt=""
                      className="d_hover_block"
                    />
                    <p className="hover_white font_size_28 font_weight_500 font_color_dark_blue m-0 ps-3">
                      Discovery
                    </p>
                  </div>
                  <div className="discovery_content px-4 py-2">
                    <p className="font_size_18 font_weight_400">
                      Gain valuable insights and define the scope
                      throughcomprehensive analysis, research,and feasibility
                      assessments. Ourexpert team collaborates with youensuring
                      a clear understanding ofyour project's objectives
                      andrequirements.
                    </p>
                  </div>
                </div>
                <div className="col-md-5 col-12 hover_card_effect shadow p-3 mb-5 border_radius_25 py-3">
                  <div className="d-flex align-items-center px-4 py-3">
                    <img src={rocket} alt="" className="hover_d_none" />
                    <img src={rocket_hover} alt="" className="d_hover_block" />
                    <p className="hover_white font_size_28 font_weight_500 font_color_dark_blue m-0 ps-3">
                      Development
                    </p>
                  </div>
                  <div className="discovery_content px-4 py-2">
                    <p className="font_size_18 font_weight_400">
                      Leverage our team's specialized full-stack expertise in
                      software development to bring your product vision to life.
                      We are dedicated to delivering solutions that meet the
                      highest coding standards, ensuring reliability,
                      scalability, and security.
                    </p>
                  </div>
                </div>
                <div className="col-md-5 col-12 shadow p-3 mb-5 hover_card_effect border_radius_25 py-3">
                  <div className="d-flex align-items-center px-4 py-3">
                    <img src={bug} alt="" className="hover_d_none" />
                    <img src={bug_hover} alt="" className="d_hover_block" />
                    <p className="hover_white font_size_28 font_weight_500 font_color_dark_blue m-0 ps-3">
                      Testing
                    </p>
                  </div>
                  <div className="discovery_content px-4 py-2">
                    <p className="font_size_18 font_weight_400">
                      Ensure the quality and reliability of your software
                      through our comprehensive testing services. Our team
                      performs a wide range of testing activities such as
                      functional and regression testing in order to ensure
                      quality.
                    </p>
                  </div>
                </div>
                <div className="col-md-5 col-12 shadow p-3 mb-5 hover_card_effect border_radius_25 py-3">
                  <div className="d-flex align-items-center px-4 py-3">
                    <img src={projects} alt="" className="hover_d_none" />
                    <img
                      src={projects_hover}
                      alt=""
                      className="d_hover_block"
                    />
                    <p className="hover_white font_size_28 font_weight_500 font_color_dark_blue m-0 ps-3">
                      Project Management
                    </p>
                  </div>
                  <div className="discovery_content px-4 py-2">
                    <p className="font_size_18 font_weight_400">
                      Seamlessly execute your software development project with
                      the help of our experienced project managers. We tailor
                      fit the methodology to your needs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* services */}
      <div className="services_container pt-5">
        <div className="services_wrapper">
          <div className="services_row py-5">
            <div className="d-flex fixed-top gap-5 col_wrapper">
              <div className="px-5">
                <div className="d-flx serv_content flex-row justify-content-between">
                  <div className=" text-center text-xxl-start">
                    <p className="font_size_20 font_weight_500 line_height_20">
                      How we can help you
                    </p>
                    <p className="font_size_65 font_weight_600 line_height_65">
                      Services
                      <br /> We Offer
                    </p>
                    <p className="font_size_24 font_weight_400">
                      We offer a comprehensive range of software development
                      services tailored to meet the unique needs of your
                      business. A full-service creative agency designing and
                      building inventive digital experiences across all
                      platforms and brand touchpoints
                    </p>
                    <button className="gradient_background border-0 text-white px-4 py-2 rounded-pill">
                      All Services{" "}
                      <span>
                        <i className="fa-solid fa-arrow-right"></i>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
              <div className="individual_cards">
                <Services_card
                  className={"lap_icon"}
                  logo={laptop}
                  title={"web Development"}
                  subtitle={
                    "Get a high-quality, responsive, and fully optimized website designed to elevate your business Our expert team ensures seamless functionality across all devices, enhancing user experience and driving results for your  brand."
                  }
                />
              </div>
              <div className="individual_cards">
                <Services_card
                  className={"app_icon"}
                  logo={app}
                  title={"App Development"}
                  subtitle={
                    "In today's mobile-first era, people are more focused on mobile devices than any other platform Our cutting-edge technology ensures seamless performance, user-friendly interfaces, and tailored features to meet your business needs."
                  }
                />
              </div>
              <div className="individual_cards">
                <Services_card
                  className={"ui_icon"}
                  logo={ui_ux}
                  title={"Ui/Ux Design"}
                  subtitle={
                    "Combining creativity with technical expertise, we design digital experiences that meet today's user needs while anticipating tomorrow's challenges. Our forward-thinking approach ensures adaptable, future-ready solutions that evolve with the digital landscape."
                  }
                />
              </div>
              <div className="individual_cards">
                <Services_card
                  className={"amc_icon"}
                  logo={amc}
                  title={"AMC"}
                  subtitle={
                    "Websites, applications, and tools need ongoing support to stay optimized and secure. We offer Annual Maintenance Contracts (AMC) to keep your business efficient and adaptable, ensuring proactive solutions, continuous improvements, and reliable year-round support."
                  }
                />
              </div>
              <div className="individual_cards">
                <Services_card
                  className={"servers_icon"}
                  logo={servers}
                  title={"Servers & Hosting"}
                  subtitle={
                    "We provide specialized support for the procurement, setup, and maintenance of servers, ensuring the continuous, smooth operation of your online applications 24/7, allowing you to focus on growth while we handle the technical complexities."
                  }
                />
              </div>
              <div className="individual_cards">
                <Services_card
                  className={"digital_icon"}
                  logo={digital_marketing}
                  title={"Digital Marketing"}
                  subtitle={
                    "Elevate your brand and connect with a wider audience through tailored digital marketing strategies. Harness the power of Facebook, Instagram, and AdWords to drive traffic, increase conversions, and build lasting customer relationships."
                  }
                />
              </div>
            </div>
          </div>
          {/* empty plain black background */}
          <div className="empty_black_background p-0 m-0"></div>
        </div>
      </div>
      {/* softwares */}
      <div className="container-fluid bg-black overflow-hidden py-5">
        <div className="container py-5 position-relative">
          <div className="row">
            <div className="col-xxl-3">
              <div className="erp_icon d-flex align-items-center justify-content-start">
                <div className="erp_icon_wrapper d-flex flex-column align-items-center pe-4 ">
                  <img
                    src={erp}
                    alt="erp"
                    className="gradient_background p-2 rounded-5"
                  />
                  <span className="gradient_background p-1"></span>
                </div>
                <p className="text-white font_size-18 font_weight_400 px-5 py-2 rounded-pill border_erp">
                  ERP Software
                </p>
              </div>
              <div className="erp_icon d-flex align-items-center justify-content-start">
                <div className="erp_icon_wrapper d-flex flex-column align-items-center pe-4">
                  <img
                    src={crm}
                    alt="erp"
                    className="gradient_background p-2 rounded-5"
                  />
                  <span className="gradient_background p-1"></span>
                </div>
                <p className="text-white font_size-18 font_weight_400 px-5">
                  CRM Software
                </p>
              </div>
              <div className="erp_icon d-flex align-items-center justify-content-start">
                <div className="erp_icon_wrapper d-flex flex-column align-items-center pe-4">
                  <img
                    src={hrms}
                    alt="erp"
                    className="gradient_background p-2 rounded-5"
                  />
                  <span className="gradient_background p-1"></span>
                </div>
                <p className="text-white font_size-18 font_weight_400 px-5">
                  HRMS Software
                </p>
              </div>
            </div>
            <div className="col-xxl-9 d-flex flex-column align-items-start justify-content-start pt-5 position-relative z-2">
              <div className="img_content_container">
                <div className="checked_img_wrapper">
                  <img src={checked} className="img-fluid" alt="" />
                </div>

                <div className="content_buttons d-flex flex-column gap-4 align-items-center justify-content-center">
                  <p className="text-white font_size_28 font_weight_600 pt-5">
                    Custom Made ERP Softwares for your Needs
                  </p>
                  <div className="demo_purchase d-flex gap-4 align-items-center justify-content-center">
                    <button className="gradient_background text-white rounded-pill p-2 border-0">
                      View Live Demo
                    </button>
                    <button className="text-white bg-transparent product_border rounded-pill p-2">
                      Purchase Product
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="blur_background z-1 gradient_background position-absolute "></div>
        </div>
      </div>
      {/* tech stack */}
      <div className="container-fluid bg-black py-5">
        <div className="container">
          <div className="first_row d-flex justify-content-center align-items-center gap-3">
            <Tech_stack_img />
            <Tech_stack_img />
            <Tech_stack_img />
            <Tech_stack_img />
            <Tech_stack_img />
          </div>
          <div className="second_row d-flex justify-content-center align-items-center gap-3 pt-3">
            <Tech_stack_img />
            <Tech_stack_img />
            <Tech_stack_img />
            <Tech_stack_img />
            <Tech_stack_img />
            <Tech_stack_img />
          </div>

          <div className="d-flex justify-content-center">
            <div className="center_content_container">
              <div className="row">
                <div className="col-3 d-flex gap-3 p-0 pt-4 justify-content-end">
                  <div>
                    <div className="white_box bg-white mb-3"></div>
                    <Tech_stack_img />
                  </div>
                  <div>
                    <div className="white_box bg-white mb-3"></div>
                    <Tech_stack_img />
                  </div>
                </div>

                <div className="col-6 d-flex justify-content-center align-items-center">
                  <div>
                    <p className="text-white text-center font_size_46 font_weight_600 m-0">
                      Amazing tech stack in our pocket
                    </p>
                    <p className=" text-white text-center font_size_18 font_weight_400 bottom_content">
                      Utilize our team's specialized full-stack expertise in
                      software development to turn your product vision into
                      reality. We are committed to providing solutions that
                      adhere to the highest coding standards, ensuring
                      reliability, scalability, and security.
                    </p>
                  </div>
                </div>
                <div className="col-3 d-flex gap-3 p-0 pt-4">
                  <div>
                    <div className="white_box bg-white mb-3"></div>
                    <Tech_stack_img />
                  </div>
                  <div>
                    <div className="white_box bg-white mb-3"></div>
                    <Tech_stack_img />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="fifth_row d-flex justify-content-center align-items-center gap-3 pt-3">
            <Tech_stack_img />
            <Tech_stack_img />
            <Tech_stack_img />
            <Tech_stack_img />
            <Tech_stack_img />
            <Tech_stack_img />
          </div>
          <div className="sixth_row d-flex justify-content-center align-items-center gap-3 pt-3">
            <Tech_stack_img />
            <Tech_stack_img />
            <Tech_stack_img />
            <Tech_stack_img />
            <Tech_stack_img />
          </div>
        </div>
      </div>
      {/* our projects */}
      <div className="container-fluid bg-black overflow-hidden position-relative px-0 text-center py-5">
        <div className="project_title text-white d-flex align-items-center justify-content-center">
          <p className="font_size_64 fotn_weight_600">Our Latest Projects</p>
          <img
            src={spring}
            className="position-absolute end-0 d-none d-lg-block"
            alt=""
          />
        </div>
        <Swiper
          slidesPerView={2.5}
          spaceBetween={160}
          centeredSlides={true}
          id="projects_swiper_container"
          className="mySwiper"
          breakpoints={{
            374: {
              slidesPerView: 2,
              spaceBetween: 60,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 60,
            },
            768: {
              slidesPerView: 1,
              spaceBetween: 60,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 60,
            },
          }}
        >
          <SwiperSlide id="projects_swiper_slide">
            <div className="card_content d-flex flex-column position-absolute align-items-start">
              <p className="text-white font_size_64 font_weight_600 text-start">
                Soyvita <br /> Landing Page
              </p>
              <div className="card_bottom_buttons d-flex gap-3">
                <button className="bg-white px-2 px-xl-4 py-1 rounded-pill border-0 font_size_16">
                  UX/UI
                </button>
                <button className="bg-white px-2 px-xl-4 py-1 rounded-pill border-0 font_size_16">
                  Website
                </button>
                <button className="bg-white px-2 px-xl-4 py-1 rounded-pill border-0 font_size_16">
                  E-commerce
                </button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide id="projects_swiper_slide">
            <div className="card_content d-flex flex-column position-absolute align-items-start">
              <p className="text-white font_size_64 font_weight_600 text-start">
                Project-2
              </p>
              <div className="card_bottom_buttons d-flex gap-3">
                <button className="bg-white font_size_16 px-2 px-xl-4 py-1 rounded-pill border-0 font_size_16">
                  UX/UI
                </button>
                <button className="bg-white font_size_16 px-2 px-xl-4 py-1 rounded-pill border-0 font_size_16">
                  Website
                </button>
                <button className="bg-white font_size_16 px-2 px-xl-4 py-1 rounded-pill border-0 font_size_16">
                  E-commerce
                </button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide id="projects_swiper_slide">
            <div className="card_content d-flex flex-column position-absolute align-items-start">
              <p className="text-white font_size_64 font_weight_600 text-start">
                Project-3
              </p>
              <div className="card_bottom_buttons d-flex gap-3">
                <button className="bg-white px-2 px-xl-4 py-1 rounded-pill border-0 font_size_16">
                  UX/UI
                </button>
                <button className="bg-white px-2 px-xl-4 py-1 rounded-pill border-0 font_size_16">
                  Website
                </button>
                <button className="bg-white px-2 px-xl-4 py-1 rounded-pill border-0 font_size_16">
                  E-commerce
                </button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide id="projects_swiper_slide">
            <div className="card_content d-flex flex-column position-absolute align-items-start">
              <p className="text-white font_size_64 font_weight_600 text-start">
                Project-4
              </p>
              <div className="card_bottom_buttons d-flex gap-3">
                <button className="bg-white px-2 px-xl-4 py-1 rounded-pill border-0 font_size_16">
                  UX/UI
                </button>
                <button className="bg-white px-2 px-xl-4 py-1 rounded-pill border-0 font_size_16">
                  Website
                </button>
                <button className="bg-white px-2 px-xl-4 py-1 rounded-pill border-0 font_size_16">
                  E-commerce
                </button>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        <button className="gradient_background border-0 text-white px-4 rounded-pill py-1 font_size_22">
          View All{" "}
          <span>
            <i className="fa-solid fa-arrow-right"></i>
          </span>
        </button>
      </div>
      {/* testimonials */}
      <div className="container testimonial py-5">
        <div className="row justify-content-between">
          <div className="col-xxl-12">
            <p className="font_size_50 font_weight_600">
              Hear What Our <br /> Customers Are Saying!
            </p>
          </div>
        </div>
        <div className="row justify-content-between">
          <div className="col-xxl-5">
            <div className="col-xxl-12">
              <p className="fotn_size_20 font_weight_400">
                "Working with Codeship Pvt Ltd to design and develop our
                eCommerce website has been an absolute game-changer for our
                business. The team was professional, responsive, and truly
                understood our vision. The website they delivered is not only
                visually stunning but also fast, secure, and easy to navigate.
                Sales have significantly increased thanks to the seamless user
                experience and mobile optimization. We couldn't be happier with
                the results, and we highly recommend Codeship for anyone looking
                for a high-quality, custom-built eCommerce solution."
              </p>
            </div>
            <div className="col-xxl-12">
              <div className="client_swiper d-flex justify-content-between">
                <div className="client d-flex align-items-center">
                  <img src={client} alt="" />
                  <p className="ps-5">
                    Suyash Sharma <br />
                    Founder, Factory Made
                  </p>
                </div>
                <div className="customer_logo">
                  <img src={client_logo} alt="" />
                </div>
              </div>
              <button className="border-0 gradient_background px-4 py-3 rounded-circle mt-4">
                <i className="fa-solid fa-chevron-left text-white"></i>
              </button>
              <button className="border-0 gradient_background px-4 py-3 rounded-circle ms-5">
                <i className="fa-solid fa-chevron-right text-white"></i>
              </button>
            </div>
          </div>
          <div className="col-xxl-5 pt-3">
            <img className="img-fluid" src={checked_square} alt="" />
          </div>
        </div>
      </div>
      {/* contact form */}
      <div className="container tell_us py-5">
        <p className="font_size_62 font_weight_600">
          Have an innovative thought?
        </p>
        <div className="row">
          <div className="col-xxl-6">
            <p className="font_size_48 font_weight_500">Tell us about it.</p>
          </div>
          <div className="col-xxl-6">
            <div className="row">
              <div className="col-lg-6 col-12">
                <p className="font_size_20 font_weight_400 pt-5">
                  Name & Company
                </p>
                <input
                  className="bg-transparent border-0 border-bottom border-dark outline_none w-75"
                  type="text"
                />
              </div>
              <div className="col-lg-6 col-12">
                <p className="font_size_20 font_weight_400 pt-5">E-mail Id</p>
                <input
                  className="bg-transparent border-0 border-bottom border-dark outline_none w-75"
                  type="text"
                />
              </div>
              <div className="col-lg-6 col-12">
                <p className="font_size_20 font_weight_400 pt-5">
                  Mobile Number
                </p>
                <input
                  className="bg-transparent border-0 border-bottom border-dark outline_none w-75"
                  type="text"
                />
              </div>
              <div className="col-lg-6 col-12">
                <p className="font_size_20 font_weight_400 pt-5">Subject</p>
                <input
                  className="bg-transparent border-0 border-bottom border-dark outline_none w-75"
                  type="text"
                />
              </div>
            </div>
            <div className="row pt-5">
              <div className="col-xxl-12">
                <div className="row">
                  <div className="col-xxl-12">
                    <p>I'm Interested in</p>
                  </div>
                  <div className="col-xxl-12 pt-3">
                    <div className="row">
                      <div className="col-xl-3 col-6 pb-3">
                        <button className="bg-transparent border-1 py-2 rounded-pill w-100 font_size_16">
                          Web Development
                        </button>
                      </div>
                      <div className="col-xl-3 col-6 pb-3">
                        <button className="bg-transparent border-1 py-2 rounded-pill w-100 font_size_16">
                          App Development
                        </button>
                      </div>
                      <div className="col-xl-3 col-6 pb-3">
                        <button className="bg-transparent border-1 py-2 rounded-pill w-100 font_size_16">
                          CRM & Tools
                        </button>
                      </div>
                      <div className="col-xl-3 col-6 pb-3">
                        <button className="bg-transparent border-1 py-2 rounded-pill w-100 font_size_16">
                          Digital Marketing
                        </button>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-xl-3 col-6 pb-3">
                        <button className="bg-transparent border-1 py-2 rounded-pill w-100 font_size_16">
                          UI / UX Design
                        </button>
                      </div>
                      <div className="col-xl-3 col-6 pb-3">
                        <button className="bg-transparent border-1 py-2 rounded-pill w-100 font_size_16">
                          AMC
                        </button>
                      </div>
                      <div className="col-xl-3 col-6 pb-3">
                        <button className="bg-transparent border-1 py-2 rounded-pill w-100 font_size_16">
                          Servers & Hosting
                        </button>
                      </div>
                      <div className="col-xl-3 col-6 pb-3">
                        <button className="bg-transparent border-1 py-2 rounded-pill w-100 font_size_16">
                          Other Services
                        </button>
                      </div>
                    </div>
                    <div className="col-xxl-12">
                      <p className="font_size_20 font_weight_400 pt-5">
                        Tell us more about your project
                      </p>
                      <input
                        className="bg-transparent border-0 border-bottom border-dark outline_none w-100"
                        type="text"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row pt-5 align-items-center">
            <div className="col-xxl-6">
              <div className="social_media">
                <p className="font_size_36 font_weight_500">Follow us on :</p>
                <div className="follow_us_icons d-flex gap-4">
                  <img src={basketball} alt="" />
                  <img src={insta} alt="" />
                  <img src={linkedin} alt="" />
                  <img src={twitter} alt="" />
                </div>
              </div>
            </div>
            <div className="col-xxl-6 pt-5">
              <button className="rounded-pill px-5 py-2 font_size_18 gradient_background text-white border-0">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
