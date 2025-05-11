export function Services_card({logo, title, subtitle, className}){
    return(
      <>
        <div className="services_card d-flex justify-content-evenly flex-column shadow p-5 bg-white rounded-5">
        <div className={`icon_wrapper ${className}`}>
          <img src={logo} className="object_contain card_logo" alt="logo" />
        </div>
        <div className="card_title font_size_58 font_weight_500">
          {title}
        </div>
        <div className="card_content m-0 text-start">
          <p>
            {subtitle}
          </p>
        </div>
        <button className="font_size_20 read_btn font_color_dark_blue bg-transparent border-0">
          Read More <i className="fa-solid fa-chevron-right fa-xs"></i>
        </button>
      </div>
      </>
    );
}