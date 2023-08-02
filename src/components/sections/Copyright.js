const Copyright = () => {
  return (
    <section className='copyright'>
      <img
        alt=''
        className='z-1 hide-mobile'
        src='assets/separator-copyright.png'
      />
      <div>
        <span>
          © {new Date().getFullYear()} <a href='#'>Vaishnav V</a>{" "}
        </span>

        <ul>
          <li>
            <a href='https://github.com/vyshnav-v' target='_blank'>
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
            <a
              target='_blank'
              href='https://wa.me/7736473741?text=Hi%20there!%20I%27m%20a%20web%20developer%20with%20expertise%20in%20ReactJS,%20NodeJS,%20HTML,%20CSS,%20and%20JavaScript.%20If%20you%20need%20any%20help%20with%20website%20development%20or%20have%20any%20questions,%20feel%20free%20to%20ask.%20I%27d%20be%20happy%20to%20assist%20you!'
            >
              <i className='fa-brands fa-whatsapp' />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};
export default Copyright;
