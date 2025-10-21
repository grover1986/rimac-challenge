import './Header.scss'

const Header = () => {
	return (
		<div className='header'>
			<div className="container">
				<div className="header__content">
					{/* Logo */}
					<div className="header__logo">
						<img
							src="/logo-rimac.png"
							alt="RIMAC Seguros"
							className="header__logo-img"
						/>
					</div>

					{/* Información de contacto */}
					<div className="header__contact">
            <span className="header__contact-text hide-mobile">
              ¡Compra por este medio!
            </span>
            <a 
              href="tel:014116001" 
              className="header__contact-phone"
            >
              <span className="header__contact-icon">📞</span>
              (01) 411 6001
            </a>
          </div>
				</div>
			</div>
		</div>
	)
}

export default Header