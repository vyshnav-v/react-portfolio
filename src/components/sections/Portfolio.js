import { salimovSlider } from "@/src/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { useState, useEffect } from "react";

const Portfolio = () => {
  const [swiperInstance, setSwiperInstance] = useState(null);

  useEffect(() => {
    if (swiperInstance && swiperInstance.navigation) {
      swiperInstance.navigation.init();
      swiperInstance.navigation.update();
    }
  }, [swiperInstance]);

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
        modules={[Navigation]}
        loop={true}
        navigation={{
          prevEl: '.prev-item',
          nextEl: '.next-item',
        }}
        onSwiper={setSwiperInstance}
        breakpoints={{
          320: {
            slidesPerView: 1.2,
            spaceBetween: 30,
          },
          768: {
            slidesPerView: "auto",
            spaceBetween: 0,
          },
          1025: {
            direction: "vertical",
          },
        }}
        className='swiper swiper-portfolio animated-layer fade-in-right-animation fadeInUp wow'
        data-wow-offset={200}
      >
        {/* PORTFOLIO ITEM STARTS - Near Blocks */}
        <SwiperSlide className='single-item swiper-slide'>
          {/* ITEM MAIN CONTENT STARTS */}
          <div className='main-content'>
            <div className='image-container'>
              <img
                className='img-fluid'
                src='assets/portfolio/project-nearblocks.png'
                alt='Near Blocks'
              />
              <div className='image-overlay'>
                <div className='project-details'>
                  <span>
                    Developed the frontend of a blockchain explorer application,
                    NearBlocks, utilizing the latest Next.js App Router for
                    optimized performance.
                  </span>
                  <span>
                    Implemented state management using Zustand, ensuring
                    efficient and responsive data handling across the
                    application.
                  </span>
                  <span>
                    Collaborated with backend developers using Node.js to
                    deliver real-time blockchain data visualization.
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* ITEM MAIN CONTENT ENDS */}
          {/* ITEM DETAILS STARTS */}
          <div className='details'>
            <h4>Near Blocks</h4>
            <div>
              <ul>
                <li>
                  <span>
                    <i className='fa-regular fa-file-lines' /> Project :
                  </span>
                  <span>Blockchain Explorer</span>
                </li>
                <li>
                  <span>
                    <i className='fa-regular fa-user' /> Client :
                  </span>
                  <span>Dot In Technologies</span>
                </li>
                <li>
                  <span>
                    <i className='fa-solid fa-code-branch' /> Technologies :
                  </span>
                  <span>
                    Next.js, Zustand, Node.js,
                    <br /> TypeScript, REST APIs
                  </span>
                </li>
              </ul>
            </div>
            <a
              href='https://nearblocks.io/'
              target='_blank'
              className='custom-btn'
            >
              <span>
                preview <i className='fa-solid fa-arrow-up-right-from-square' />
              </span>
            </a>
            <a
              href='https://lite.nearblocks.io/'
              target='_blank'
              className='custom-btn'
            >
              <span>
                lite <i className='fa-solid fa-arrow-up-right-from-square' />
              </span>
            </a>
          </div>
          {/* ITEM DETAILS ENDS */}
        </SwiperSlide>
        {/* PORTFOLIO ITEM ENDS */}

        {/* PORTFOLIO ITEM STARTS - Voltron */}
        <SwiperSlide className='single-item swiper-slide'>
          {/* ITEM MAIN CONTENT STARTS */}
          <div className='main-content'>
            <div className='image-container'>
              <img
                className='img-fluid'
                src='assets/portfolio/project-voltron.png'
                alt='Voltron EV Charging'
              />
              <div className='image-overlay'>
                <div className='project-details'>
                  <span>
                    Developed and maintained the frontend of the Voltron EV
                    Charging mobile app using React Native and TypeScript.
                  </span>
                  <span>
                    Enabling users across Indonesia to easily locate and control
                    EV charging stations.
                  </span>
                  <span>
                    Implemented real-time charging session tracking, payments,
                    and dynamic station search.
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* ITEM MAIN CONTENT ENDS */}
          {/* ITEM DETAILS STARTS */}
          <div className='details'>
            <h4>Voltron EV Charging</h4>
            <div>
              <ul>
                <li>
                  <span>
                    <i className='fa-regular fa-file-lines' /> Project :
                  </span>
                  <span>Mobile App</span>
                </li>
                <li>
                  <span>
                    <i className='fa-regular fa-user' /> Client :
                  </span>
                  <span>Indonesia Client</span>
                </li>
                <li>
                  <span>
                    <i className='fa-solid fa-code-branch' /> Technologies :
                  </span>
                  <span>
                    React Native, TypeScript,
                    <br /> Node.js, REST APIs
                  </span>
                </li>
              </ul>
            </div>
            <a
              href='https://play.google.com/store/apps/details?id=com.voltron.ev'
              target='_blank'
              className='custom-btn'
            >
              <span>
                Play Store{" "}
                <i className='fa-solid fa-arrow-up-right-from-square' />
              </span>
            </a>
          </div>
          {/* ITEM DETAILS ENDS */}
        </SwiperSlide>
        {/* PORTFOLIO ITEM ENDS */}

        {/* PORTFOLIO ITEM STARTS - Ferry Booking */}
        <SwiperSlide className='single-item swiper-slide'>
          {/* ITEM MAIN CONTENT STARTS */}
          <div className='main-content'>
            <div className='image-container'>
              <img
                className='img-fluid'
                src='assets/portfolio/project-ferry.png'
                alt='Ferry Booking App'
              />
              <div className='image-overlay'>
                <div className='project-details'>
                  <span>
                    Designed and developed a ferry booking application using
                    React Native, TypeScript, and Zustand for state management.
                  </span>
                  <span>
                    Worked on both frontend and backend, including Supabase
                    database design, API integration.
                  </span>
                  <span>
                    Utilized modern tools like Cursor AI and Loveable.dev to
                    boost development speed and code quality.
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* ITEM MAIN CONTENT ENDS */}
          {/* ITEM DETAILS STARTS */}
          <div className='details'>
            <h4>Ferry Booking App</h4>
            <div>
              <ul>
                <li>
                  <span>
                    <i className='fa-regular fa-file-lines' /> Project :
                  </span>
                  <span>Mobile App</span>
                </li>
                <li>
                  <span>
                    <i className='fa-regular fa-user' /> Client :
                  </span>
                  <span>FIES System</span>
                </li>
                <li>
                  <span>
                    <i className='fa-solid fa-code-branch' /> Technologies :
                  </span>
                  <span>
                    React Native, TypeScript,
                    <br /> Zustand, Supabase
                  </span>
                </li>
              </ul>
            </div>
            <a
              href='https://play.google.com/store'
              target='_blank'
              className='custom-btn'
            >
              <span>
                Play Store{" "}
                <i className='fa-solid fa-arrow-up-right-from-square' />
              </span>
            </a>
          </div>
          {/* ITEM DETAILS ENDS */}
        </SwiperSlide>
        {/* PORTFOLIO ITEM ENDS */}

        {/* PORTFOLIO ITEM STARTS - Brickar */}
        <SwiperSlide className='single-item swiper-slide'>
          {/* ITEM MAIN CONTENT STARTS */}
          <div className='main-content'>
            <div className='image-container'>
              <img
                className='img-fluid'
                src='assets/portfolio/project-brickar.png'
                alt='Brickar Admin Panel'
              />
              <div className='image-overlay'>
                <div className='project-details'>
                  <span>
                    Developing the admin panel for a construction industry
                    mobile application.
                  </span>
                  <span>
                    Employing React.js and Redux Toolkit to create a seamless
                    and intuitive user interface.
                  </span>
                  <span>
                    Implementing APIs and utilizing Swagger for API
                    documentation.
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* ITEM MAIN CONTENT ENDS */}
          {/* ITEM DETAILS STARTS */}
          <div className='details'>
            <h4>Brickar Admin Panel</h4>
            <div>
              <ul>
                <li>
                  <span>
                    <i className='fa-regular fa-file-lines' /> Project :
                  </span>
                  <span>Admin Dashboard</span>
                </li>
                <li>
                  <span>
                    <i className='fa-regular fa-user' /> Client :
                  </span>
                  <span>Construction Industry</span>
                </li>
                <li>
                  <span>
                    <i className='fa-solid fa-code-branch' /> Technologies :
                  </span>
                  <span>
                    React.js, Redux Toolkit,
                    <br /> Swagger, REST APIs
                  </span>
                </li>
              </ul>
            </div>
          </div>
          {/* ITEM DETAILS ENDS */}
        </SwiperSlide>
        {/* PORTFOLIO ITEM ENDS */}

        {/* PORTFOLIO ITEM STARTS - E-Commerce Jewelry */}
        <SwiperSlide className='single-item swiper-slide'>
          {/* ITEM MAIN CONTENT STARTS */}
          <div className='main-content'>
            <div className='image-container'>
              <img
                className='img-fluid'
                src='assets/portfolio/project-ecommerce.png'
                alt='E-Commerce Website'
              />
              <div className='image-overlay'>
                <div className='project-details'>
                  <span>
                    Engineered a visually appealing e-commerce website utilizing
                    React, Node.js, Redux Toolkit, Material UI, and Tailwind
                    CSS.
                  </span>
                  <span>
                    Implemented an intuitive C-panel for seamless management of
                    jewelry inventory, B2B-B2C orders, and CMS.
                  </span>
                  <span>
                    Contributed to daily standups, sprint planning, and
                    retrospectives in an agile environment.
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* ITEM MAIN CONTENT ENDS */}
          {/* ITEM DETAILS STARTS */}
          <div className='details'>
            <h4>E-Commerce & CPanel</h4>
            <div>
              <ul>
                <li>
                  <span>
                    <i className='fa-regular fa-file-lines' /> Project :
                  </span>
                  <span>TL Technologies Pvt Ltd</span>
                </li>
                <li>
                  <span>
                    <i className='fa-regular fa-user' /> Client :
                  </span>
                  <span>Jewelry Company</span>
                </li>
                <li>
                  <span>
                    <i className='fa-solid fa-code-branch' /> Technologies :
                  </span>
                  <span>
                    React, Node.js, Redux Toolkit,
                    <br /> Material UI, Tailwind CSS
                  </span>
                </li>
              </ul>
            </div>
          </div>
          {/* ITEM DETAILS ENDS */}
        </SwiperSlide>
        {/* PORTFOLIO ITEM ENDS */}

        {/* PORTFOLIO ITEM STARTS - TSO Briargove */}
        <SwiperSlide className='single-item swiper-slide'>
          {/* ITEM MAIN CONTENT STARTS */}
          <div className='main-content'>
            <div className='image-container'>
              <img
                className='img-fluid'
                src='assets/portfolio/project-briargrove.png'
                alt='TSO Briargrove'
              />
              <div className='image-overlay'>
                <div className='project-details'>
                  <span>
                    Designed and developed a visually appealing front-end for a
                    website project for an eye hospital.
                  </span>
                  <span>
                    Collaborated with a team to create an intuitive cPanel
                    interface for easy management and navigation.
                  </span>
                  <span>
                    Implemented modern web development technologies and worked
                    closely with the back-end team.
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* ITEM MAIN CONTENT ENDS */}
          {/* ITEM DETAILS STARTS */}
          <div className='details'>
            <h4>TSO Briargove</h4>
            <div>
              <ul>
                <li>
                  <span>
                    <i className='fa-regular fa-file-lines' /> Project :
                  </span>
                  <span>TL Technologies Pvt Ltd</span>
                </li>
                <li>
                  <span>
                    <i className='fa-regular fa-user' /> Client :
                  </span>
                  <span>US Client</span>
                </li>
                <li>
                  <span>
                    <i className='fa-solid fa-code-branch' /> Technologies :
                  </span>
                  <span>
                    HTML5, CSS, JavaScript,
                    <br /> Contabo, SmarterASP
                  </span>
                </li>
              </ul>
            </div>
            <a
              href='https://eveloungebriargrove.com/'
              target='_blank'
              className='custom-btn'
            >
              <span>
                preview <i className='fa-solid fa-arrow-up-right-from-square' />
              </span>
            </a>
          </div>
          {/* ITEM DETAILS ENDS */}
        </SwiperSlide>
        {/* PORTFOLIO ITEM ENDS */}

        {/* PORTFOLIO ITEM STARTS - TSO Champions */}
        <SwiperSlide className='single-item swiper-slide'>
          {/* ITEM MAIN CONTENT STARTS */}
          <div className='main-content'>
            <div className='image-container'>
              <img
                className='img-fluid'
                src='assets/portfolio/project-champions.png'
                alt='TSO Champions'
              />
              <div className='image-overlay'>
                <div className='project-details'>
                  <span>
                    Designed and developed a visually appealing front-end for a
                    website project for an eye hospital.
                  </span>
                  <span>
                    Collaborated with a team to create an intuitive cPanel
                    interface for easy management and navigation.
                  </span>
                  <span>
                    Completed the project within the given timeframe, meeting
                    client requirements.
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* ITEM MAIN CONTENT ENDS */}
          {/* ITEM DETAILS STARTS */}
          <div className='details'>
            <h4>TSO Champions</h4>
            <div>
              <ul>
                <li>
                  <span>
                    <i className='fa-regular fa-file-lines' /> Project :
                  </span>
                  <span>TL Technologies Pvt Ltd</span>
                </li>
                <li>
                  <span>
                    <i className='fa-regular fa-user' /> Client :
                  </span>
                  <span>US Client</span>
                </li>
                <li>
                  <span>
                    <i className='fa-solid fa-code-branch' /> Technologies :
                  </span>
                  <span>
                    HTML5, CSS, JavaScript,
                    <br /> Contabo, SmarterASP
                  </span>
                </li>
              </ul>
            </div>
            <a
              href='https://completeevecarechampions.com/'
              target='_blank'
              className='custom-btn'
            >
              <span>
                preview <i className='fa-solid fa-arrow-up-right-from-square' />
              </span>
            </a>
          </div>
          {/* ITEM DETAILS ENDS */}
        </SwiperSlide>
        {/* PORTFOLIO ITEM ENDS */}

        {/* PORTFOLIO ITEM STARTS - Zycaz */}
        <SwiperSlide className='single-item swiper-slide'>
          {/* ITEM MAIN CONTENT STARTS */}
          <div className='main-content'>
            <div className='image-container'>
              <img
                className='img-fluid'
                src='assets/portfolio/project-1.png'
                alt='Zycaz E-Commerce'
              />
              <div className='image-overlay'>
                <div className='project-details'>
                  <span>
                    Implemented all the necessary e-commerce functionalities
                    like product listing, cart, orders, etc.
                  </span>
                  <span>
                    <strong>Payment gateways integrated: PayPal</strong>
                  </span>
                </div>
              </div>
            </div>
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
                  <span>E-Commerce</span>
                </li>
                <li>
                  <span>
                    <i className='fa-regular fa-user' /> Client :
                  </span>
                  <span>Personal</span>
                </li>
                <li>
                  <span>
                    <i className='fa-solid fa-code-branch' /> Technologies :
                  </span>
                  <span>
                    Node.js, Express.js,
                    <br /> MongoDB, EJS, Bootstrap, Nginx, EC2
                  </span>
                </li>
              </ul>
            </div>
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
