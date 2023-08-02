import { salimovSlider } from "@/src/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";

const Portfolio = () => {
  return (
    <section
      className='portfolio main-section flex-column-mobile'
      id='portfolio'
    >
      {/* TITLE STARTS */}
      <div className='custom-title'>
        {/* MAIN TITLE STARTS */}
        <h3>
          <span>
            <span className='animated-layer fade-in-left-animation fadeInUp wow'>
              WHAT I'VE DONE?
            </span>
          </span>
        </h3>
        {/* MAIN TITLE ENDS */}
      </div>
      {/* TITLE ENDS */}
      <Swiper
        {...salimovSlider.portfolio}
        className='swiper swiper-portfolio animated-layer fade-in-right-animation fadeInUp wow'
        data-wow-offset={200}
      >
        {/* PORTFOLIO ITEM STARTS */}
        <SwiperSlide className='single-item swiper-slide'>
          {/* ITEM MAIN CONTENT STARTS */}
          <div className='main-content'>
            <img
              className='img-fluid'
              src='assets/portfolio/project-1.png'
              alt='Image Project'
            />
            Implemented allthe necessary e-commerce functionalities like
            productlisting, cart, orders, etc.
            <strong> Payment gateways integrated: paypal</strong>
          </div>
          {/* ITEM MAIN CONTENT ENDS */}
          {/* ITEM DETAILS STARTS */}
          <div className='details'>
            <h4>Zycaz</h4>
            <div>
              <ul>
                <li>
                  <span>
                    <i className='fa-regular fa-file-lines' /> Project :
                  </span>
                  <span>Ecommerce</span>
                </li>
                <li>
                  <span>
                    <i className='fa-regular fa-user' /> Client :
                  </span>
                  <span>Personal</span>
                </li>
                {/* <li>
                  <span>
                    <i className='fa-regular fa-hourglass' /> Duration :
                  </span>
                  <span> months</span>
                </li> */}
                <li>
                  <span>
                    <i className='fa-solid fa-code-branch' /> Frameworks :
                  </span>
                  <span>
                    Node.js, Express.js,
                    <br /> MongoDBand EJS,Bootstrap,Nginx , EC2
                  </span>
                </li>
              </ul>
            </div>
            <a
              href='https://zycaz.shop/'
              target='_blank'
              className='custom-btn'
            >
              <span>
                preview <i className='fa-solid fa-arrow-up-right-from-square' />
              </span>
            </a>
            <a
              href='https://github.com/vyshnav-v/zycaz'
              target='_blank'
              className='custom-btn'
            >
              <span>
                Code <i className='fa-solid fa-arrow-up-right-from-square' />
              </span>
            </a>
          </div>
          {/* ITEM DETAILS ENDS */}
        </SwiperSlide>
        {/* PORTFOLIO ITEM ENDS */}
        {/* PORTFOLIO ITEM STARTS */}
        <SwiperSlide className='single-item swiper-slide'>
          {/* ITEM MAIN CONTENT STARTS */}
          <div className='main-content'>
            <img
              className='img-fluid'
              src='assets/portfolio/project-3.jpg'
              alt='Image Project'
            />
            Waste managementinvolves the processes of waste
            collection,transportation, processing, as well as waste recycling or
            disposal. In this site users can book correspondent agentto
            collecttheir waste. Agencies collectthe waste as perthe details and
            location provided by the user. Super admin can control users and
            agencies. etc.
            {/* <strong> Payment gateways integrated: paypal</strong> */}
          </div>
          {/* ITEM MAIN CONTENT ENDS */}
          {/* ITEM DETAILS STARTS */}
          <div className='details'>
            <h4>GreenZone</h4>
            <div>
              <ul>
                <li>
                  <span>
                    <i className='fa-regular fa-file-lines' /> Project :
                  </span>
                  <span>Waste Management</span>
                </li>
                <li>
                  <span>
                    <i className='fa-regular fa-user' /> Client :
                  </span>
                  <span>Personal</span>
                </li>
                {/* <li>
                  <span>
                    <i className='fa-regular fa-hourglass' /> Duration :
                  </span>
                  <span> months</span>
                </li> */}
                <li>
                  <span>
                    <i className='fa-solid fa-code-branch' /> Frameworks :
                  </span>
                  <span>
                    ReactJs,Node.js, Express.js,
                    <br />
                    MongoDB,Redux Tool kit,MUI,Tailwind,jwt,Axios..
                  </span>
                </li>
              </ul>
            </div>
            {/* <a
              href='https://zycaz.shop/'
              target='_blank'
              className='custom-btn'
            >
              <span>
                preview <i className='fa-solid fa-arrow-up-right-from-square' />
              </span>
            </a> */}
            <a
              href='https://github.com/vyshnav-v/MERN-Green-Zone'
              target='_blank'
              className='custom-btn'
            >
              <span>
                Code <i className='fa-solid fa-arrow-up-right-from-square' />
              </span>
            </a>
          </div>
          {/* ITEM DETAILS ENDS */}
        </SwiperSlide>
        {/* PORTFOLIO ITEM ENDS */}
        {/* PORTFOLIO ITEM STARTS */}
        
        {/* PORTFOLIO ITEM ENDS */}
        {/* PORTFOLIO ITEM STARTS */}
       
        {/* PORTFOLIO ITEM ENDS */}
        {/* PORTFOLIO ITEM STARTS */}
        <SwiperSlide className='single-item swiper-slide'>
          {/* ITEM MAIN CONTENT STARTS */}
          <div className='main-content'>
            <a
              href='https://themeforest.net'
              target='_blank'
              className='external'
            >
              <img
                className='img-fluid'
                src='assets/portfolio/project-3.jpg'
                alt='External Project'
              />
            </a>
          </div>
          {/* ITEM MAIN CONTENT ENDS */}
          {/* ITEM DETAILS STARTS */}
          <div className='details'>
            <h4>External Link</h4>
            <div>
              <ul>
                <li>
                  <span>
                    <i className='fa-regular fa-file-lines' /> Project :
                  </span>
                  <span>Advertising</span>
                </li>
                <li>
                  <span>
                    <i className='fa-regular fa-user' /> Client :
                  </span>
                  <span>Envato</span>
                </li>
                <li>
                  <span>
                    <i className='fa-regular fa-hourglass' /> Duration :
                  </span>
                  <span>1 month</span>
                </li>
                <li>
                  <span>
                    <i className='fa-solid fa-code-branch' /> Frameworks :
                  </span>
                  <span>Adobe Premiere</span>
                </li>
              </ul>
            </div>
            <a href='#' target='_blank' className='custom-btn'>
              <span>
                preview <i className='fa-solid fa-arrow-up-right-from-square' />
              </span>
            </a>
          </div>
          {/* ITEM DETAILS ENDS */}
        </SwiperSlide>
        {/* PORTFOLIO ITEM ENDS */}
        <div className='nav-item next-item animated-btn'>
          <span />
        </div>
        <div className='nav-item prev-item animated-btn'>
          <span />
        </div>
      </Swiper>
      <img
        alt=''
        className='z-1 hide-mobile opposite-separator'
        src='assets/separator-opposite.png'
      />
    </section>
  );
};
export default Portfolio;
