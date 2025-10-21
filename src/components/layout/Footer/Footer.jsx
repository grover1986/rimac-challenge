import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          {/* Logo en blanco */}
          <div className="footer__logo">
            <img 
              src='/logo-rimac-white.png' 
              alt="RIMAC Seguros" 
              className="footer__logo-img"
            />
          </div>

          {/* Copyright */}
          <div className="footer__copyright">
            <p className="footer__copyright-text">
              © 2023 RIMAC Seguros y Reaseguros.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;