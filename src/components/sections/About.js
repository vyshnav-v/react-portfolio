const About = () => {
  return (
    <section className='about main-section flex-column-mobile' id='about'>
      {/* INFO HOLDER STARTS */}
      <div className='info flex-column-mobile'>
        {/* IMAGE STARTS */}
        <div
          className='img-container animated-layer image-animation my-photo-container fadeInUp wow'
          data-wow-offset={200}
          id='my-photo'
        >
          <div>
            <div>
              <img className='my-photo' src='assets/about.jpg' alt='' />
            </div>
          </div>
        </div>
        {/* IMAGE ENDS */}
        {/* INFO STARTS */}
        <div>
          <h2>
            <span>
              <span className='animated-layer fade-in-up-animation fadeInUp wow'>
                Vaishnav
              </span>
            </span>
            <span>
              <span className='animated-layer fade-in-up-animation fadeInUp wow'>
                Venugopal
              </span>
            </span>
          </h2>
          <div className='infos'>
            <ul>
              <li>
                <span>
                  <span className='animated-layer fade-in-up-animation fadeInUp wow'>
                    <span>Age :</span>
                    <span>26 Years</span>
                  </span>
                </span>
              </li>
              <li>
                <span>
                  <span className='animated-layer fade-in-up-animation fadeInUp wow'>
                    <span>Nationality :</span>
                    <span>Indian</span>
                  </span>
                </span>
              </li>
              <li>
                <span>
                  <span className='animated-layer fade-in-up-animation fadeInUp wow'>
                    <span>Freelance :</span>
                    <span>Available</span>
                  </span>
                </span>
              </li>
              <li>
                <span>
                  <span className='animated-layer fade-in-up-animation fadeInUp wow'>
                    <span>Langages :</span>
                    <span>English, Malayalam</span>
                  </span>
                </span>
              </li>
            </ul>
            <ul>
              <li>
                <span>
                  <span className='animated-layer fade-in-up-animation fadeInUp wow'>
                    <span>Address :</span>
                    <span>Kerala</span>
                  </span>
                </span>
              </li>
              <li>
                <span>
                  <span className='animated-layer fade-in-up-animation fadeInUp wow'>
                    <span>Phone :</span>
                    <span>+91 7736473741</span>
                  </span>
                </span>
              </li>
              <li>
                <span>
                  <span className='animated-layer fade-in-up-animation fadeInUp wow'>
                    <span>Email :</span>
                    <span>vaishnavvenugopal706@gmail.com</span>
                  </span>
                </span>
              </li>
              {/* <li>
                <span>
                  <span className='animated-layer fade-in-up-animation fadeInUp wow'>
                    <span>Skype :</span>
                    <span>steven.walker</span>
                  </span>
                </span>
              </li> */}
            </ul>
          </div>
        </div>
        {/* INFO ENDS */}
      </div>
      {/* INFO HOLDER ENDS */}
      {/* SKILLS STARTS */}
      <div className='skills flex-column-mobile'>
        {/* TITLE STARTS */}
        <div className='custom-title'>
          {/* MAIN TITLE STARTS */}
          <h3>
            <span>
              <span className='animated-layer fade-in-left-animation fadeInUp wow'>
                My Skills
              </span>
            </span>
          </h3>
          <h5>
            <span>
              <span className='animated-layer fade-in-left-animation fadeInUp wow'>
                I love to learn new technologies.
              </span>
            </span>
          </h5>
          {/* MAIN TITLE ENDS */}
        </div>
        {/* TITLE ENDS */}
        <div className='skills-content'>
          <div>
            {/* SKILL ITEM STARTS */}
            <div className='animated-layer fade-in-down-animation fadeInLeft wow'>
              <span>
                <i className='devicon-mongodb-plain' />
              </span>
              <h4>MongoDB</h4>
            </div>
            {/* SKILL ITEM ENDS */}
            {/* SKILL ITEM STARTS */}
            <div className='animated-layer fade-in-up-animation fadeInRight wow'>
              <span>
                <i className='devicon-javascript-plain' />
              </span>
              <h4>JavaScript</h4>
            </div>
            {/* SKILL ITEM ENDS */}
          </div>
          <div>
            {/* SKILL ITEM STARTS */}
            <div className='animated-layer fade-in-down-animation fadeInLeft wow'>
              <span>
                <i className='devicon-express-original' />
              </span>
              <h4>Express JS</h4>
            </div>
            {/* SKILL ITEM ENDS */}
            {/* SKILL ITEM STARTS */}
            <div className='animated-layer fade-in-up-animation fadeInRight wow'>
              <span>
                <i className='devicon-redux-original' />
              </span>
              <h4>Redux</h4>
            </div>
            {/* SKILL ITEM ENDS */}
          </div>
          <div>
            {/* SKILL ITEM STARTS */}
            <div className='animated-layer fade-in-down-animation fadeInLeft wow'>
              <span>
                <i className='devicon-react-plain' />
              </span>
              <h4>React JS</h4>
            </div>
            {/* SKILL ITEM ENDS */}
            {/* SKILL ITEM STARTS */}
            <div className='animated-layer fade-in-up-animation fadeInRight wow'>
              <span>
                <i className='devicon-git-plain' />
              </span>
              <h4>Git</h4>
            </div>
            {/* SKILL ITEM ENDS */}
          </div>
          <div>
            {/* SKILL ITEM STARTS */}
            <div className='animated-layer fade-in-down-animation fadeInLeft wow'>
              <span>
                <i className='devicon-nodejs-plain' />
              </span>
              <h4>Node JS</h4>
            </div>
            {/* SKILL ITEM ENDS */}
            {/* SKILL ITEM STARTS */}
            <div className='animated-layer fade-in-up-animation fadeInRight wow'>
              <span>
                <i className='devicon-html5-plain' />
              </span>
              <h4>HTML5</h4>
            </div>
            {/* SKILL ITEM ENDS */}
          </div>
          <div>
            {/* SKILL ITEM STARTS */}
            <div className='animated-layer fade-in-down-animation fadeInLeft wow'>
              <span>
                <i className='devicon-mysql-plain' />
              </span>
              <h4>SQL</h4>
            </div>
            {/* SKILL ITEM ENDS */}
            {/* SKILL ITEM STARTS */}
            <div className='animated-layer fade-in-up-animation fadeInRight wow'>
              <span>
                <i className='devicon-css3-plain' />
              </span>
              <h4>CSS3</h4>
            </div>
            {/* SKILL ITEM ENDS */}
          </div>
          <div>
            {/* SKILL ITEM STARTS */}
            <div className='animated-layer fade-in-down-animation fadeInLeft wow'>
              <span>
                <i className='devicon-firebase-plain' />
              </span>
              <h4>Firebase</h4>
            </div>
            {/* SKILL ITEM ENDS */}
            {/* SKILL ITEM STARTS */}
            <div className='animated-layer fade-in-up-animation fadeInRight wow'>
              <span>
                <i className='devicon-nginx-original' />
              </span>
              <h4>NginX</h4>
            </div>
            {/* SKILL ITEM ENDS */}
          </div>
          <div>
            {/* SKILL ITEM STARTS */}
            <div className='animated-layer fade-in-down-animation fadeInLeft wow'>
              <span>
                <i className='devicon-materialui-plain' />
              </span>
              <h4>MaterialUI</h4>
            </div>
            {/* SKILL ITEM ENDS */}
            {/* SKILL ITEM STARTS */}
            <div className='animated-layer fade-in-up-animation fadeInRight wow'>
              <span>
                <i className='devicon-tailwindcss-plain' />
              </span>
              <h4>TailwindCSS</h4>
            </div>
            {/* SKILL ITEM ENDS */}
          </div>
        </div>
      </div>
      {/* SKILLS ENDS */}
      {/* RESUME STARTS */}
      <div className='resume flex-column-mobile'>
        {/* TITLE STARTS */}
        <div className='custom-title fadeInUp wow'>
          {/* MAIN TITLE STARTS */}
          <h3>
            <span>
              <span className='animated-layer fade-in-left-animation'>
                My Resume
              </span>
            </span>
          </h3>
          {/* MAIN TITLE ENDS */}
        </div>
        {/* TITLE ENDS */}
        {/* TIMELINE STARTS */}
        <div className='timeline'>
          <ol className='animated-layer fade-in-animation'>
            {/* TIMELINE ITEM STARTS */}
            <li>
              <div className='animated-layer fade-in-down-animation fadeInUp wow'>
                <div className='experience'>
                  <h4>Freelance</h4>
                  <p>
                    <i className='fa-regular fa-clock' />
                    <span>Aug 2023 - Now</span>
                  </p>
                  <p>
                    <i className='fa-regular fa-building' />
                    <span>Web Development</span>
                  </p>
                </div>
              </div>
            </li>
            {/* TIMELINE ITEM ENDS */}
            {/* TIMELINE ITEM STARTS */}
            <li>
              <div className='animated-layer fade-in-up-animation fadeInUp wow'>
                <div className='experience'>
                  <h4>Full s</h4>
                  <p>
                    <i className='fa-regular fa-clock' />
                    <span>mar 2023 - Aug 2023</span>
                  </p>
                  <p>
                    <i className='fa-regular fa-building' />
                    <span>TL Technologies pvt ltd</span>
                  </p>
                </div>
              </div>
            </li>
            {/* TIMELINE ITEM ENDS */}
            {/* TIMELINE ITEM STARTS */}
            <li>
              <div className='animated-layer fade-in-down-animation fadeInUp wow'>
                <div className='experience'>
                  <h4>Trainee</h4>
                  <p>
                    <i className='fa-regular fa-clock' />
                    <span>Aug 2022 - Feb 2023</span>
                  </p>
                  <p>
                    <i className='fa-regular fa-building' />
                    <span>Brototype</span>
                  </p>
                </div>
              </div>
            </li>
            {/* TIMELINE ITEM ENDS */}
            {/* TIMELINE ITEM STARTS */}
            <li>
              <div className='animated-layer fade-in-up-animation fadeInUp wow'>
                <div className='education'>
                  <h4>Assistant Manager</h4>
                  <p>
                    <i className='fa-regular fa-clock' />
                    <span> Mar 2020- Jul 2022</span>
                  </p>
                  <p>
                    <i className='fa-solid fa-building-columns' />
                    <span>AiroTrack Technologies </span>
                  </p>
                </div>
              </div>
            </li>
            {/* TIMELINE ITEM ENDS */}
            {/* TIMELINE ITEM STARTS */}
            <li>
              <div className='animated-layer fade-in-down-animation fadeInUp wow'>
                <div className='education'>
                  <h4>Bachelor Degree</h4>
                  <p>
                    <i className='fa-regular fa-clock' />
                    <span>2015 - 2019</span>
                  </p>
                  <p>
                    <i className='fa-solid fa-building-columns' />
                    <span>GEC Wayanad</span>
                  </p>
                </div>
              </div>
            </li>
            {/* TIMELINE ITEM ENDS */}
            <li />
          </ol>
        </div>
        {/* TIMELINE ENDS */}
      </div>
      {/* RESUME ENDS */}
      <img
        alt=''
        className='separator hide-mobile'
        src='assets/separator.png'
      />
    </section>
  );
};
export default About;
