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
            <div className='image-container'>
              <img
                className='img-fluid'
                src='assets/portfolio/project-1.png'
                alt='Image Project'
              />
              <div className='image-overlay'>
                {" "}
                <div class='project-details'>
                  <span>
                    Implemented all the necessary e-commerce functionalities
                    like product listing, cart, orders, etc.
                  </span>
                  <span>
                    <strong>Payment gateways integrated: paypal</strong>
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
                    <i className='fa-solid fa-code-branch' /> Technologies :
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
            <div className='image-container'>
              <img
                className='img-fluid'
                src='assets/portfolio/project-3.jpg'
                alt='Image Project'
              />

              <div className='image-overlay'>
                <div class='project-details'>
                  <span>
                    {" "}
                    Waste managementinvolves the processes of waste
                    collection,transportation, processing, as well as waste
                    recycling or disposal.
                  </span>{" "}
                  <span>
                    In this site users can book correspondent agentto
                    collecttheir waste. Agencies collectthe waste as perthe
                    details and location provided by the user. Super admin can
                    control users and agencies. etc.
                  </span>
                </div>
                {/* <strong>Payment gateways integrated: paypal</strong> */}
              </div>
              {/* <strong> Payment gateways integrated: paypal</strong> */}
            </div>
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
                    <i className='fa-solid fa-code-branch' /> Technologies :
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
        <SwiperSlide className='single-item swiper-slide'>
          {/* ITEM MAIN CONTENT STARTS */}
          <div className='main-content'>
            <div className='image-container'>
              <img
                className='img-fluid'
                src='assets/portfolio/project-briargrove.png'
                alt='Image Project'
              />
              <div className='image-overlay'>
                <div class='project-details'>
                  <span>
                    Designed and developed a visually appealing front-end for a
                    website project for an eye hospital.
                  </span>
                  <span>
                    Collaborated with a team to create an intuitive cPanel
                    interface for easy management and navigation.
                  </span>
                  <span>
                    {" "}
                    Implemented modern web development technologies such as
                    HTML, CSS, and JavaScript.
                  </span>
                  <span>
                    {" "}
                    Worked closely with the back-end team to integrate front-end
                    design with necessary functionalities.
                  </span>
                  <span>
                    {" "}
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
            <h4>TSO Briargove</h4>
            <div>
              <ul>
                <li>
                  <span>
                    <i className='fa-regular fa-file-lines' /> Project :
                  </span>
                  <span>TL Technologies pvt ltd</span>
                </li>
                <li>
                  <span>
                    <i className='fa-regular fa-user' /> Client :
                  </span>
                  <span>US Client</span>
                </li>
                {/* <li>
                  <span>
                    <i className='fa-regular fa-hourglass' /> Duration :
                  </span>
                  <span> months</span>
                </li> */}
                <li>
                  <span>
                    <i className='fa-solid fa-code-branch' /> Technologies :
                  </span>
                  <span>
                    HTML5, CSS , JavaScript and <br />
                    Contabo, SmarterASP
                  </span>
                </li>
              </ul>
            </div>
            <a
              href='https://eyeloungebriargrove.com/'
              target='_blank'
              className='custom-btn'
            >
              <span>
                preview <i className='fa-solid fa-arrow-up-right-from-square' />
              </span>
            </a>
            {/* <a
              href='https://github.com/vyshnav-v/zycaz'
              target='_blank'
              className='custom-btn'
            >
              <span>
                Code <i className='fa-solid fa-arrow-up-right-from-square' />
              </span>
            </a> */}
          </div>
          {/* ITEM DETAILS ENDS */}
        </SwiperSlide>

        {/* PORTFOLIO ITEM ENDS */}
        {/* PORTFOLIO ITEM STARTS */}
        <SwiperSlide className='single-item swiper-slide'>
          {/* ITEM MAIN CONTENT STARTS */}
          <div className='main-content'>
            <div className='image-container'>
              <img
                className='img-fluid'
                src='assets/portfolio/project-champions.png'
                alt='Image Project'
              />
              <div className='image-overlay'>
                <div class='project-details'>
                  <span>
                    Designed and developed a visually appealing front-end for a
                    website project for an eye hospital.
                  </span>
                  <span>
                    Collaborated with a team to create an intuitive cPanel
                    interface for easy management and navigation.
                  </span>
                  <span>
                    {" "}
                    Implemented modern web development technologies such as
                    HTML, CSS, and JavaScript.
                  </span>
                  <span>
                    {" "}
                    Worked closely with the back-end team to integrate front-end
                    design with necessary functionalities.
                  </span>
                  <span>
                    {" "}
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
                  <span>TL Technologies pvt ltd</span>
                </li>
                <li>
                  <span>
                    <i className='fa-regular fa-user' /> Client :
                  </span>
                  <span>US Client</span>
                </li>
                {/* <li>
                  <span>
                    <i className='fa-regular fa-hourglass' /> Duration :
                  </span>
                  <span> months</span>
                </li> */}
                <li>
                  <span>
                    <i className='fa-solid fa-code-branch' /> Technologies :
                  </span>
                  <span>
                    HTML5, CSS , JavaScript and <br />
                    Contabo, SmarterASP
                  </span>
                </li>
              </ul>
            </div>
            <a
              href='https://completeeyecarechampions.com/'
              target='_blank'
              className='custom-btn'
            >
              <span>
                preview <i className='fa-solid fa-arrow-up-right-from-square' />
              </span>
            </a>
            {/* <a
              href='https://github.com/vyshnav-v/zycaz'
              target='_blank'
              className='custom-btn'
            >
              <span>
                Code <i className='fa-solid fa-arrow-up-right-from-square' />
              </span>
            </a> */}
          </div>
          {/* ITEM DETAILS ENDS */}
        </SwiperSlide>

        {/* PORTFOLIO ITEM ENDS */}
        {/* PORTFOLIO ITEM STARTS */}
        <SwiperSlide className='single-item swiper-slide'>
          {/* ITEM MAIN CONTENT STARTS */}
          <div className='main-content'>
            <div className='image-container'>
              <img
                className='img-fluid'
                src='assets/portfolio/project-ecommerce.png'
                alt='Image Project'
              />
              <div className='image-overlay'>
                <div class='project-details'>
                  <span>
                    Leveraged React,Node.js,Redux Toolkit,MaterialUI, and
                    Tailwind CSS to build a feature-rich and visually appealing
                    website, offering a seamless online shopping experience for
                    customers.
                  </span>
                  <span>
                    Successfully implemented a user-friendly C-panel, empowering
                    management and administration of the inventory,B2B-B2C
                    orders, statistics and a content management system (CMS).
                  </span>
                  <span>
                    Actively participated in daily standups, sprint
                    planning,retrospectives, and task estimation, fostering a
                    collaborative and agile work environmentfor project success.
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* ITEM MAIN CONTENT ENDS */}
          {/* ITEM DETAILS STARTS */}
          <div className='details'>
            <h4>Ecommerce-Bakery</h4>
            <div>
              <ul>
                <li>
                  <span>
                    <i className='fa-regular fa-file-lines' /> Project :
                  </span>
                  <span>TL Technologies pvt ltd</span>
                </li>
                <li>
                  <span>
                    <i className='fa-regular fa-user' /> Client :
                  </span>
                  <span>Company Product</span>
                </li>
                {/* <li>
                  <span>
                    <i className='fa-regular fa-hourglass' /> Duration :
                  </span>
                  <span> months</span>
                </li> */}
                <li>
                  <span>
                    <i className='fa-solid fa-code-branch' /> Technologies :
                  </span>
                  <span>
                    React,Node.js,Redux Toolkit, <br />
                    MaterialUI, and Tailwind CSS Contabo, SmarterASP
                  </span>
                </li>
              </ul>
            </div>
            <a
              href='https://ecommerce-r1-bakery.tltechnologies.net/'
              target='_blank'
              className='custom-btn'
            >
              <span>
                preview <i className='fa-solid fa-arrow-up-right-from-square' />
              </span>
            </a>
            {/* <a
              href='https://github.com/vyshnav-v/zycaz'
              target='_blank'
              className='custom-btn'
            >
              <span>
                Code <i className='fa-solid fa-arrow-up-right-from-square' />
              </span>
            </a> */}
          </div>
          {/* ITEM DETAILS ENDS */}
        </SwiperSlide>

        {/* PORTFOLIO ITEM ENDS */}
        {/* PORTFOLIO ITEM STARTS */}
        <SwiperSlide className='single-item swiper-slide'>
          {/* ITEM MAIN CONTENT STARTS */}
          <div className='main-content'>
            <div className='image-container'>
              <img
                className='img-fluid'
                src='assets/portfolio/project-3.jpg'
                alt='Image Project'
              />
              <div className='image-overlay'>
                <div class='project-details'>
                  <span>
                    Itis a simple web application that would help you manage
                    your sticker notes efficiently and elegantly
                  </span>
                  <span>
                    <strong> F̲e̲a̲t̲u̲r̲e̲s̲ :-</strong> Login, Register,Create,
                    Edit,Delete, View note slices
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* ITEM MAIN CONTENT ENDS */}
          {/* ITEM DETAILS STARTS */}
          <div className='details'>
            <h4>Note Maker</h4>
            <div>
              <ul>
                <li>
                  <span>
                    <i className='fa-regular fa-file-lines' /> Project :
                  </span>
                  <span>Personal Notes</span>
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
                    <i className='fa-solid fa-code-branch' /> Technologies :
                  </span>
                  <span>
                    React,Node.js,Redux Toolkit, <br />
                    Mongoose,JWT,Cloudinary (for profile pic storage), <br />
                    React-bootstrap,React markdown, Redux-toolkit,Axios
                  </span>
                </li>
              </ul>
            </div>
            {/* <a
              href='https://ecommerce-r1-bakery.tltechnologies.net/'
              target='_blank'
              className='custom-btn'
            >
              <span>
                preview <i className='fa-solid fa-arrow-up-right-from-square' />
              </span>
            </a> */}
            <a
              href=' https://github.com/vyshnav-v/Note-maker-MERN'
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
