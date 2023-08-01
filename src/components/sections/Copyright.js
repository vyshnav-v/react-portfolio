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
            <a target='_blank' href='#'>
              <i className='fa-brands fa-facebook' />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};
export default Copyright;
