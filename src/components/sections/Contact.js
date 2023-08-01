const Contact = () => {
  return (
    <section className='contact main-section flex-column-mobile' id='contact'>
      {/* TITLE STARTS */}
      <div className='custom-title'>
        {/* MAIN TITLE STARTS */}
        <h3>
          <span>
            <span className='animated-layer fade-in-left-animation fadeInUp wow'>
              Get in touch
            </span>
          </span>
        </h3>
        {/* MAIN TITLE ENDS */}
      </div>
      {/* TITLE ENDS */}
      {/* CONTACTS STARTS */}
      <div className='boxes'>
        <div>
          {/* CONTACT ITEM STARTS */}
          <div className='animated-layer fade-in-down-animation fadeInUp wow'>
            <i className='fa fa-phone' />
            <p>
              <span className='small-text'>phone</span>
              +91 7736473741
            </p>
          </div>
          {/* CONTACT ITEM ENDS */}
          {/* CONTACT ITEM STARTS */}
          <div className='animated-layer fade-in-up-animation fadeInUp wow'>
            <i className='fa fa-location-dot' />
            <p>
              <span className='small-text'>address</span>
              Kerala, India
            </p>
          </div>
          {/* CONTACT ITEM ENDS */}
        </div>
        <div>
          {/* CONTACT ITEM STARTS */}
          <div className='animated-layer fade-in-down-animation fadeInUp wow'>
            <i className='fa fa-envelope' />
            <p>
              <span className='small-text'>email</span>
              vaishnavvenugopal706@gmail.com
            </p>
          </div>
          {/* CONTACT ITEM ENDS */}
          {/* CONTACT ITEM STARTS */}
          <div className='animated-layer fade-in-up-animation fadeInUp wow'>
            <i className='fa fa-share-nodes' />
            <span className='small-text'>follow me</span>
            <ul className='social'>
              <li>
                <a target='_blank' href='https://github.com/vyshnav-v'>
                  <i className='fa-brands fa-github' />
                </a>
              </li>
              <li>
                <a
                  target='_blank'
                  href='https://www.linkedin.com/in/vaishnavofficial/'
                >
                  <i className='fa-brands fa-linkedin' />
                </a>
              </li>
              <li>
                <a
                  target='_blank'
                  href='https://www.instagram.com/h_a.d.e_s/?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D&__coig_restricted=1'
                >
                  <i className='fa-brands fa-instagram' />
                </a>
              </li>
              <li>
                <a target='_blank' href='#'>
                  <i className='fa-brands fa-facebook' />
                </a>
              </li>
            </ul>
          </div>
          {/* CONTACT ITEM ENDS */}
        </div>
      </div>
      {/* CONTACTS ENDS */}
      <img
        alt=''
        className='z-1 hide-mobile opposite-separator'
        src='assets/separator.png'
      />
    </section>
  );
};
export default Contact;
