const About = () => {
  return (
    <section className='about main-section flex-column-mobile' id='about'>
      {/* INFO HOLDER STARTS */}

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
                <i className='devicon-react-original' />
              </span>
              <h4>React / React Native</h4>
            </div>
            {/* SKILL ITEM ENDS */}
            {/* SKILL ITEM STARTS */}
            <div className='animated-layer fade-in-up-animation fadeInRight wow'>
              <span>
                <i className='devicon-nextjs-original' />
              </span>
              <h4>Next.js</h4>
            </div>
            {/* SKILL ITEM ENDS */}
          </div>
          <div>
            {/* SKILL ITEM STARTS */}
            <div className='animated-layer fade-in-down-animation fadeInLeft wow'>
              <span>
                <i className='devicon-typescript-plain' />
              </span>
              <h4>TypeScript</h4>
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
                <i className='devicon-nodejs-plain' />
              </span>
              <h4>Node.js</h4>
            </div>
            {/* SKILL ITEM ENDS */}
            {/* SKILL ITEM STARTS */}
            <div className='animated-layer fade-in-up-animation fadeInRight wow'>
              <span>
                <i className='devicon-express-original' />
              </span>
              <h4>Express.js</h4>
            </div>
            {/* SKILL ITEM ENDS */}
          </div>
          <div>
            {/* SKILL ITEM STARTS */}
            <div className='animated-layer fade-in-down-animation fadeInLeft wow'>
              <span>
                <i className='devicon-redux-original' />
              </span>
              <h4>Redux / Zustand</h4>
            </div>
            {/* SKILL ITEM ENDS */}
            {/* SKILL ITEM STARTS */}
            <div className='animated-layer fade-in-up-animation fadeInRight wow'>
              <span>
                <i className='devicon-mongodb-plain' />
              </span>
              <h4>MongoDB</h4>
            </div>
            {/* SKILL ITEM ENDS */}
          </div>
          <div>
            {/* SKILL ITEM STARTS */}
            <div className='animated-layer fade-in-down-animation fadeInLeft wow'>
              <span>
                <i className='devicon-postgresql-plain' />
              </span>
              <h4>PostgreSQL / Supabase</h4>
            </div>
            {/* SKILL ITEM ENDS */}
            {/* SKILL ITEM STARTS */}
            <div className='animated-layer fade-in-up-animation fadeInRight wow'>
              <span>
                <i className='devicon-firebase-plain' />
              </span>
              <h4>Firebase</h4>
            </div>
            {/* SKILL ITEM ENDS */}
          </div>
          <div>
            {/* SKILL ITEM STARTS */}
            <div className='animated-layer fade-in-down-animation fadeInLeft wow'>
              <span>
                <i className='devicon-tailwindcss-plain' />
              </span>
              <h4>Tailwind CSS</h4>
            </div>
            {/* SKILL ITEM ENDS */}
            {/* SKILL ITEM STARTS */}
            <div className='animated-layer fade-in-up-animation fadeInRight wow'>
              <span>
                <i className='devicon-materialui-plain' />
              </span>
              <h4>MUI / Shadcn</h4>
            </div>
            {/* SKILL ITEM ENDS */}
          </div>
          <div>
            {/* SKILL ITEM STARTS */}
            <div className='animated-layer fade-in-down-animation fadeInLeft wow'>
              <span>
                <i className='devicon-git-plain' />
              </span>
              <h4>Git / GitHub</h4>
            </div>
            {/* SKILL ITEM ENDS */}
            {/* SKILL ITEM STARTS */}
            <div className='animated-layer fade-in-up-animation fadeInRight wow'>
              <span>
                <i className='devicon-docker-plain' />
              </span>
              <h4>Docker / CI/CD</h4>
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
                  <h4>React Native Developer</h4>
                  <p>
                    <i className='fa-regular fa-clock' />
                    <span>May 2025 - Present</span>
                  </p>
                  <p>
                    <i className='fa-regular fa-building' />
                    <span>FIES System</span>
                  </p>
                </div>
              </div>
            </li>
            {/* TIMELINE ITEM ENDS */}
            {/* TIMELINE ITEM STARTS */}
            <li>
              <div className='animated-layer fade-in-up-animation fadeInUp wow'>
                <div className='experience'>
                  <h4>React JS Developer</h4>
                  <p>
                    <i className='fa-regular fa-clock' />
                    <span>Aug 2023 - Apr 2025</span>
                  </p>
                  <p>
                    <i className='fa-regular fa-building' />
                    <span>Dot In Technologies</span>
                  </p>
                </div>
              </div>
            </li>
            {/* TIMELINE ITEM ENDS */}
            {/* TIMELINE ITEM STARTS */}
            <li>
              <div className='animated-layer fade-in-down-animation fadeInUp wow'>
                <div className='experience'>
                  <h4>Full Stack Developer</h4>
                  <p>
                    <i className='fa-regular fa-clock' />
                    <span>Dec 2022 - Aug 2023</span>
                  </p>
                  <p>
                    <i className='fa-regular fa-building' />
                    <span>TL Technologies Pvt Ltd</span>
                  </p>
                </div>
              </div>
            </li>
            {/* TIMELINE ITEM ENDS */}
            {/* TIMELINE ITEM STARTS */}
            <li>
              <div className='animated-layer fade-in-up-animation fadeInUp wow'>
                <div className='education'>
                  <h4>Trainee - MERN Stack</h4>
                  <p>
                    <i className='fa-regular fa-clock' />
                    <span>Jul 2022 - Dec 2022</span>
                  </p>
                  <p>
                    <i className='fa-solid fa-building-columns' />
                    <span>Packageer Academy</span>
                  </p>
                </div>
              </div>
            </li>
            {/* TIMELINE ITEM ENDS */}
            {/* TIMELINE ITEM STARTS */}
            <li>
              <div className='animated-layer fade-in-down-animation fadeInUp wow'>
                <div className='experience'>
                  <h4>Technical Support Engineer</h4>
                  <p>
                    <i className='fa-regular fa-clock' />
                    <span>Mar 2020 - Feb 2022</span>
                  </p>
                  <p>
                    <i className='fa-regular fa-building' />
                    <span>Airo Track Technologies</span>
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
