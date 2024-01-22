import './Footer.css'
import { images } from '../../constants';

const Footer = () => {
	return (
		<footer className='footer container'>
			<div className='footer__logo' data-aos='zoom-out-up'>
				<img src={images.footer_logo} />
			</div>
			<div className='footer__middle' data-aos='zoom-out-up'>
				<div className='footer__middle-navigation'>
					<span>Navigation</span>
					<ul>
						<li>Home</li>
						<li>About Us</li>
						<li>Service</li>
						<li>Shop</li>
						<li>Contact Us</li>
					</ul>
				</div>
				<div className='footer__middle-contacts'>
					<span>Contact</span>
					<ul>
						<li>
							<img src={images.phone_icon} alt='phone icon' />
							<p>Tell:</p>
							<p>525624553474</p>
						</li>
						<li>
							<img src={images.phone_icon} alt='phone icon' />
							<p>Office tell:</p>
							<p>312525616000033</p>
						</li>
					</ul>
				</div>
			</div>
			<div className='footer__address' data-aos='zoom-out-up'>
				<div>
					<span>Get in touch</span>
					<ul>
						<li>69 North Cleveland Street, Memphis,USA.</li>
						<li>(123) 8111 9210 - (012) 1111 6868</li>
						<li>Florisr@supportthem.com</li>
					</ul>
				</div>
				<div className='footer__social-networks'>
					<span>Follow Us</span>
					<ul>
						<li>
							<img src={images.instagram_icon} alt='instagram' />
						</li>
						<li>
							<img src={images.whatsapp_icon} alt='whatsapp' />
						</li>
						<li>
							<img src={images.telegram_icon} alt='telegram' />
						</li>
						<li>
							<img src={images.vkontakte_icon} alt='vkontakte' />
						</li>
					</ul>
				</div>
			</div>
		</footer>
	)
}
export default Footer
